"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useRef, useState } from "react";

type CursorVariant = "default" | "clickable" | "text";

type Particle = {
  id: number;
  x: number;
  y: number;
  scale: number;
};

type CursorContextValue = {
  enabled: boolean;
};

const CursorContext = createContext<CursorContextValue>({ enabled: false });

export function useCursor() {
  return useContext(CursorContext);
}

function isTouchDevice() {
  return typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
}

export default function CursorProvider({ children }: PropsWithChildren) {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const innerX = useSpring(x, { stiffness: 720, damping: 40, mass: 0.2 });
  const innerY = useSpring(y, { stiffness: 720, damping: 40, mass: 0.2 });
  const outerX = useSpring(x, { stiffness: 130, damping: 32, mass: 0.85 });
  const outerY = useSpring(y, { stiffness: 130, damping: 32, mass: 0.85 });

  const prev = useRef({ x: 0, y: 0, t: 0 });
  const timeouts = useRef<number[]>([]);
  const variantRef = useRef<CursorVariant>("default");
  const visibleRef = useRef(false);
  const lastParticleAt = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldEnable = !isTouchDevice() && !reduceMotion;
    setEnabled(shouldEnable);
    if (!shouldEnable) return;

    const move = (event: PointerEvent) => {
      const now = performance.now();
      const dx = event.clientX - prev.current.x;
      const dy = event.clientY - prev.current.y;
      const dt = Math.max(now - prev.current.t, 16);
      const speed = Math.hypot(dx, dy) / dt;

      x.set(event.clientX);
      y.set(event.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const target = event.target;
      const hoverTarget = target instanceof Element ? target : null;
      const clickable = hoverTarget?.closest("a, button, [data-cursor='clickable']");
      const text = hoverTarget?.closest("p, [data-cursor='text']") as HTMLElement | null;

      let nextVariant: CursorVariant = "default";
      if (clickable) {
        nextVariant = "clickable";
      } else if (text) {
        const rect = text.getBoundingClientRect();
        const lineHeight = parseFloat(window.getComputedStyle(text).lineHeight || "20");
        y.set(rect.top + Math.min(rect.height, lineHeight));
        nextVariant = "text";
      }

      if (variantRef.current !== nextVariant) {
        variantRef.current = nextVariant;
        setVariant(nextVariant);
      }

      if (speed > 0.95 && now - lastParticleAt.current > 42) {
        lastParticleAt.current = now;
        const particle: Particle = {
          id: now,
          x: event.clientX,
          y: event.clientY,
          scale: Math.min(1.2, speed / 1.5)
        };

        setParticles((prevParticles) => [...prevParticles.slice(-8), particle]);
        const timeoutId = window.setTimeout(() => {
          setParticles((prevParticles) => prevParticles.filter((item) => item.id !== particle.id));
        }, 280);
        timeouts.current.push(timeoutId);
      }

      prev.current = { x: event.clientX, y: event.clientY, t: now };
    };

    const enter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    const leave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
      for (const timeoutId of timeouts.current) {
        clearTimeout(timeoutId);
      }
      timeouts.current = [];
    };
  }, [x, y]);

  const outerClass = useMemo(() => {
    if (variant === "clickable") {
      return "h-16 w-16 mix-blend-difference bg-white/80";
    }
    if (variant === "text") {
      return "h-4 w-12 rounded-sm border border-white/70 bg-white/20";
    }
    return "h-10 w-10 border border-white/40 bg-white/10";
  }, [variant]);

  return (
    <CursorContext.Provider value={{ enabled }}>
      {enabled ? <div className="cursor-none">{children}</div> : children}

      {enabled && (
        <>
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[200]"
            style={{ x: innerX, y: innerY, opacity: visible ? 1 : 0 }}
          >
            <div className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-offWhite" style={{ width: 6, height: 6 }} />
          </motion.div>

          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[199]"
            style={{ x: outerX, y: outerY, opacity: visible ? 1 : 0 }}
          >
            <div
              className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out ${outerClass}`}
            />
          </motion.div>

          <AnimatePresence>
            {particles.map((particle) => (
              <motion.span
                key={particle.id}
                initial={{ opacity: 0.55, scale: particle.scale }}
                animate={{ opacity: 0, scale: 0.08 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="pointer-events-none fixed z-[198] h-3 w-3 rounded-full bg-steel/55"
                style={{ left: particle.x - 6, top: particle.y - 6 }}
              />
            ))}
          </AnimatePresence>
        </>
      )}
    </CursorContext.Provider>
  );
}
