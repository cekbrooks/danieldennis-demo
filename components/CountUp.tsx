"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  className?: string;
  duration?: number;
};

// Parses a stat string like "100+" or "1981" — animates the leading number,
// preserves any non-digit suffix (e.g. "+", "k", "%").
function parse(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: null as number | null, suffix: value };
  return { num: Number(match[1]), suffix: match[2] };
}

export function CountUp({ value, className, duration = 1.4 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const { num, suffix } = parse(value);
  const [display, setDisplay] = useState(num == null ? value : `0${suffix}`);

  useEffect(() => {
    if (num == null || !inView) return;
    if (reduce) {
      setDisplay(`${num}${suffix}`);
      return;
    }
    const controls = animate(0, num, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, num, suffix, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {num == null ? value : display}
    </span>
  );
}
