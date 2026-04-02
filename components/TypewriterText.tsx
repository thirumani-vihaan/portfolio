"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterTextProps = {
  phrases: string[];
  speed?: number;
  pauseMs?: number;
  className?: string;
};

export default function TypewriterText({ phrases, speed = 42, pauseMs = 1400, className }: TypewriterTextProps) {
  const safePhrases = useMemo(() => (phrases.length ? phrases : [""]), [phrases]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setCharIndex(safePhrases[phraseIndex].length);
      return;
    }

    if (charIndex < safePhrases[phraseIndex].length) {
      const timeout = window.setTimeout(() => setCharIndex((value) => value + 1), speed);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setPhraseIndex((value) => (value + 1) % safePhrases.length);
      setCharIndex(0);
    }, pauseMs);
    return () => window.clearTimeout(timeout);
  }, [charIndex, pauseMs, phraseIndex, safePhrases, speed]);

  return (
    <span className={className}>
      {safePhrases[phraseIndex].slice(0, charIndex)}
      <span className="ml-1 inline-block h-[1em] w-[1px] animate-pulse bg-current align-middle" />
    </span>
  );
}
