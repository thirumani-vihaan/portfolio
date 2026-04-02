"use client";

import { motion } from "framer-motion";
import type { MouseEvent, PropsWithChildren } from "react";
import { useRef } from "react";

type MagneticWrapperProps = PropsWithChildren<{
  className?: string;
  strength?: number;
}>;

export default function MagneticWrapper({ children, className, strength = 20 }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      data-cursor="clickable"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
