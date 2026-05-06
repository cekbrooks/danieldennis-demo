"use client";

import { motion, useReducedMotion } from "motion/react";

// Soft, slow-drifting gradient blobs that sit behind the hero. Pure presentation —
// pointer-events disabled. Falls back to a static layer if reduced motion is on.
export function Aurora() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-12 h-[420px] w-[420px] rounded-full bg-[#D4B07A]/30 blur-3xl" />
        <div className="absolute right-[-10%] top-32 h-[520px] w-[520px] rounded-full bg-[#0F1B2D]/15 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/3 h-[480px] w-[480px] rounded-full bg-[#B5894A]/20 blur-3xl" />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute h-[520px] w-[520px] rounded-full bg-[#D4B07A]/35 blur-3xl"
        initial={{ x: "-15%", y: "5%" }}
        animate={{ x: ["-15%", "10%", "-15%"], y: ["5%", "15%", "5%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[620px] w-[620px] rounded-full bg-[#0F1B2D]/18 blur-3xl"
        initial={{ x: "70%", y: "10%" }}
        animate={{ x: ["70%", "55%", "70%"], y: ["10%", "30%", "10%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[560px] w-[560px] rounded-full bg-[#B5894A]/25 blur-3xl"
        initial={{ x: "25%", y: "60%" }}
        animate={{ x: ["25%", "45%", "25%"], y: ["60%", "45%", "60%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
