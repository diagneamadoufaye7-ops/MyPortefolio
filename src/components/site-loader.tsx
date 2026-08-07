"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monogram } from "@/components/ui/monogram";

export function SiteLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const minDuration = 1100;

    const finish = () => {
      const remaining = Math.max(0, minDuration - (Date.now() - start));
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => window.removeEventListener("load", finish);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid-glow absolute inset-0" />
          <Monogram className="h-12 w-12" />
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
