"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px clamp(20px, 6vw, 100px)",
        background: "var(--background)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Left */}
        <div
          style={{
            fontFamily: "var(--font-playfair-display)",
            fontStyle: "italic",
            fontSize: "1rem",
            fontWeight: 500,
            color: "var(--text-muted)",
          }}
        >
          {personal.name} © {currentYear}
        </div>

        {/* Center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "var(--font-caveat-script)",
            fontSize: "1.05rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          made with{" "}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "var(--accent)", display: "inline-block" }}
          >
            ♡
          </motion.span>{" "}
          by {personal.firstName}
        </motion.div>

        {/* Right */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            cursor: "pointer",
            color: "var(--accent)",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--surface-2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--surface)")
          }
          aria-label="Back to top"
          id="back-to-top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
