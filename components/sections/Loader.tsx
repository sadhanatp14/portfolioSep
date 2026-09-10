"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<"logo" | "name" | "done">("logo");
  const name = "Sadhana T P";

  useEffect(() => {
    // Only show on first visit
    const seen = sessionStorage.getItem("portfolio-loaded");
    if (seen) {
      setShow(false);
      onComplete();
      return;
    }
    sessionStorage.setItem("portfolio-loaded", "1");

    const t1 = setTimeout(() => setPhase("name"), 600);
    const t2 = setTimeout(() => setPhase("done"), 2200);
    const t3 = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 2800);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && phase !== "done" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--background)",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          {/* Decorative blobs */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "15%",
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(255,111,145,0.1), transparent 70%)",
              borderRadius: "50%",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              left: "10%",
              width: "200px",
              height: "200px",
              background:
                "radial-gradient(circle, rgba(201,164,222,0.12), transparent 70%)",
              borderRadius: "50%",
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />

          {/* Heart icon */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "var(--accent)" }}
          >
            <Heart size={40} fill="var(--accent)" />
          </motion.div>

          {/* Letter-by-letter name */}
          <div style={{ display: "flex", gap: "2px", alignItems: "baseline" }}>
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={phase === "name" ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.06,
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  fontFamily: "var(--font-playfair-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  fontWeight: 600,
                  color: char === " " ? "transparent" : "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  minWidth: char === " " ? "0.5ch" : "auto",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Caveat subtitle */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={phase === "name" ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-caveat-script)",
              fontSize: "1.2rem",
              color: "var(--accent)",
            }}
          >
            full stack developer ✦
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
