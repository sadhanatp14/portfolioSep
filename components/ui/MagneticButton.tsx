"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  href?: string;
  id?: string;
}

export default function MagneticButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  id,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) * 0.3;
    const dy = (e.clientY - centerY) * 0.3;
    setPos({
      x: Math.max(-6, Math.min(6, dx)),
      y: Math.max(-6, Math.min(6, dy)),
    });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const baseCSS = {
    position: "relative" as const,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "14px 32px",
    borderRadius: "999px",
    fontFamily: "var(--font-poppins-sans)",
    fontSize: "0.875rem",
    fontWeight: 500,
    letterSpacing: "0.04em",
    cursor: "none",
    overflow: "hidden",
    textDecoration: "none",
    outline: "none",
  };

  const primaryCSS = {
    ...baseCSS,
    background: "var(--accent)",
    color: "#fff9f5",
    border: "none",
    boxShadow: isHovered
      ? "0 8px 32px rgba(255,111,145,0.4)"
      : "0 4px 16px rgba(255,111,145,0.25)",
    transition: "box-shadow 0.3s ease",
  };

  const secondaryCSS = {
    ...baseCSS,
    background: "transparent",
    color: "var(--accent)",
    border: "1.5px solid var(--accent)",
    boxShadow: isHovered ? "0 4px 24px rgba(255,111,145,0.2)" : "none",
    transition: "box-shadow 0.3s ease",
  };

  const css = variant === "primary" ? primaryCSS : secondaryCSS;

  const sharedMotionProps = {
    animate: { x: pos.x, y: pos.y },
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    style: css,
    className,
  };

  const inner = (
    <>
      <motion.div
        initial={{ x: "-110%" }}
        animate={{ x: isHovered ? "0%" : "-110%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,111,145,0.3), rgba(201,164,222,0.3))",
          borderRadius: "inherit",
          pointerEvents: "none",
        }}
      />
      <motion.span
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {children}
      </motion.span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        id={id}
        {...sharedMotionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      id={id}
      type="button"
      {...sharedMotionProps}
    >
      {inner}
    </motion.button>
  );
}
