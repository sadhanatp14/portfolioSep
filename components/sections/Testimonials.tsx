"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/data";

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "24px",
        padding: "36px",
        boxShadow: "0 4px 24px rgba(58,46,48,0.06)",
        flexShrink: 0,
        width: "380px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        position: "relative",
      }}
    >
      {/* Big decorative quote */}
      <div
        style={{
          fontFamily: "var(--font-playfair-display)",
          fontSize: "5rem",
          lineHeight: 0.8,
          color: "var(--accent)",
          opacity: 0.2,
          fontStyle: "italic",
          userSelect: "none",
          position: "absolute",
          top: "20px",
          right: "28px",
        }}
      >
        "
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: "var(--font-playfair-display)",
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: "var(--text-primary)",
          lineHeight: 1.75,
          fontWeight: 400,
          position: "relative",
          zIndex: 1,
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          borderTop: "1px solid var(--border)",
          paddingTop: "20px",
        }}
      >
        {/* Avatar placeholder */}
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontFamily: "var(--font-playfair-display)",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#fff9f5",
            fontStyle: "italic",
          }}
        >
          {testimonial.name.charAt(0)}
        </div>

        <div>
          <div
            style={{
              fontFamily: "var(--font-poppins-sans)",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "2px",
            }}
          >
            {testimonial.name}
          </div>
          <div
            style={{
              fontFamily: "var(--font-poppins-sans)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              fontWeight: 300,
            }}
          >
            {testimonial.role} · {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = 0;
    let animId: number;

    const scroll = () => {
      if (!isPaused) {
        x -= 0.5;
        const half = track.scrollWidth / 2;
        if (Math.abs(x) >= half) x = 0;
        track.style.transform = `translateX(${x}px)`;
      }
      animId = requestAnimationFrame(scroll);
    };

    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        padding: "clamp(80px, 10vw, 140px) 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, var(--background) 0%, var(--surface) 50%, var(--background) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(20px, 6vw, 100px)",
          marginBottom: "64px",
          position: "relative",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-poppins-sans)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            05 —
          </span>
          <span
            style={{
              fontFamily: "var(--font-caveat-script)",
              fontSize: "1.15rem",
              color: "var(--accent)",
            }}
          >
            kind words
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "var(--font-playfair-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "var(--text-primary)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          What people say.
        </motion.h2>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        style={{ position: "relative" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            background:
              "linear-gradient(to right, var(--background), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            background:
              "linear-gradient(to left, var(--background), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div style={{ overflow: "hidden", padding: "20px 0 32px" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: "24px",
              width: "max-content",
              willChange: "transform",
            }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
