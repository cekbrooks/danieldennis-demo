"use client";

import { motion, useReducedMotion } from "motion/react";

const ITEMS = [
  "MA Charter Schools",
  "LIHTC",
  "403(b) Plans",
  "Single Audit",
  "Form 990",
  "Mass UFR",
  "DESE Reporting",
  "HUD REAC",
  "401(k) Audits",
  "Cost Certifications",
  "Agreed-Upon Procedures",
  "Form 5500",
  "Affordable Housing",
  "Nonprofits",
  "Charter Schools",
  "Employee Benefit Plans",
];

export function Marquee() {
  const reduce = useReducedMotion();
  const list = [...ITEMS, ...ITEMS]; // double for seamless loop

  return (
    <div className="relative overflow-hidden border-y border-black/5 bg-[#FAF8F4]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FAF8F4] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FAF8F4] to-transparent" />
      <motion.div
        className="flex gap-10 whitespace-nowrap py-6"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {list.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 font-display text-2xl tracking-tight text-[#3B4A63]/55"
          >
            {item}
            <span aria-hidden className="text-[#B5894A]/45">
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
