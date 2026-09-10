"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { personal, stats } from "@/lib/data";

function AnimatedStat({
  value,
  suffix,
  label,
  isDecimal,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  isDecimal?: boolean;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const target = isDecimal ? value * 100 : value;
    const duration = 1800;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      current += step;
      if (frame >= steps) {
        current = target;
        clearInterval(interval);
      }
      setCount(Math.round(current));
    }, duration / steps);

    return () => clearInterval(interval);
  }, [inView, value, isDecimal]);

  const displayValue = isDecimal
    ? (count / 100).toFixed(2)
    : count;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
        <span
          style={{
            fontFamily: "var(--font-playfair-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "var(--accent)",
            lineHeight: 1,
          }}
        >
          {displayValue}
        </span>
        <span
          style={{
            fontFamily: "var(--font-playfair-display)",
            fontSize: "1.2rem",
            fontWeight: 500,
            color: "var(--accent-2)",
          }}
        >
          {suffix}
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-poppins-sans)",
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          fontWeight: 300,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding"
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(20px, 6vw, 100px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          background:
            "linear-gradient(135deg, transparent 40%, rgba(255,238,242,0.4) 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "80px" }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-caveat-script)",
              fontSize: "1.1rem",
              color: "var(--accent)",
              display: "block",
              marginBottom: "8px",
            }}
          >
            about me
          </motion.span>
          <motion.div
            initial={{ opacity: 0.06 }}
            animate={inView ? { opacity: 0.06 } : {}}
            style={{
              fontFamily: "var(--font-playfair-display)",
              fontSize: "clamp(60px, 12vw, 120px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              userSelect: "none",
              pointerEvents: "none",
              marginTop: "-0.5em",
            }}
          >
            01
          </motion.div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "clamp(40px, 8vw, 100px)",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(255,111,145,0.15)",
                aspectRatio: "3/4",
              }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Sadhana T P — Full Stack Developer"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              {/* Soft overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(255,111,145,0.1), transparent 40%)",
                }}
              />
            </div>

            {/* Washi-tape badge */}
            <motion.div
              initial={{ rotate: -6, scale: 0.8, opacity: 0 }}
              animate={inView ? { rotate: -6, scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              style={{
                position: "absolute",
                top: "20px",
                right: "-16px",
                background: "linear-gradient(135deg, var(--gold), #f5d08a)",
                padding: "10px 20px",
                borderRadius: "4px",
                fontFamily: "var(--font-caveat-script)",
                fontSize: "0.95rem",
                color: "var(--text-primary)",
                boxShadow: "0 4px 20px rgba(232,192,125,0.3)",
                zIndex: 2,
              }}
            >
              Open to Work ✦
            </motion.div>

            {/* Education badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "14px 24px",
                boxShadow: "0 8px 32px rgba(58,46,48,0.1)",
                textAlign: "center",
                whiteSpace: "nowrap",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-poppins-sans)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "2px",
                }}
              >
                Amrita Vishwa Vidyapeetham
              </div>
              <div
                style={{
                  fontFamily: "var(--font-playfair-display)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--accent)",
                }}
              >
                CGPA 9.29 ✦
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ paddingTop: "16px" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-playfair-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.2,
                marginBottom: "28px",
                letterSpacing: "-0.01em",
              }}
            >
              I build the{" "}
              <span className="squiggle-underline gradient-text">
                full picture.
              </span>
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {personal.bio.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  style={{
                    fontFamily: "var(--font-poppins-sans)",
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                marginTop: "48px",
                paddingTop: "40px",
                borderTop: "1px solid var(--border)",
              }}
            >
              {stats.map((stat) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isDecimal={stat.isDecimal}
                  inView={inView}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
