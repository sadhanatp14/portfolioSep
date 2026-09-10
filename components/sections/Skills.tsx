"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categoryColors: Record<
  string,
  { bg: string; border: string; dot: string }
> = {
  blush: {
    bg: "rgba(255,238,242,0.7)",
    border: "var(--border)",
    dot: "var(--accent)",
  },
  lavender: {
    bg: "rgba(201,164,222,0.12)",
    border: "rgba(201,164,222,0.3)",
    dot: "var(--accent-2)",
  },
  gold: {
    bg: "rgba(232,192,125,0.1)",
    border: "rgba(232,192,125,0.3)",
    dot: "var(--gold)",
  },
  rose: {
    bg: "rgba(255,111,145,0.08)",
    border: "rgba(255,111,145,0.25)",
    dot: "var(--accent)",
  },
};

function ProgressBar({ level, inView }: { level: number; inView: boolean }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setAnimated(true), 300);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <div className="progress-track">
      <div
        className={`progress-fill ${animated ? "animated" : ""}`}
        style={{
          transform: animated ? `scaleX(${level / 100})` : "scaleX(0)",
        }}
      />
    </div>
  );
}

function SkillCard({
  category,
  inView,
  delay,
}: {
  category: (typeof skills)[keyof typeof skills];
  inView: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const colors = categoryColors[category.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="link"
      style={{
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        borderRadius: "24px",
        padding: "32px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 12px 40px rgba(255,111,145,0.15)"
          : "0 2px 12px rgba(58,46,48,0.05)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: colors.dot,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-poppins-sans)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {category.label}
        </span>
      </div>

      {/* Skills list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {category.items.map((skill) => (
          <div key={skill.name}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-poppins-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                }}
              >
                {skill.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-poppins-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  color: "var(--text-muted)",
                }}
              >
                {skill.level}%
              </span>
            </div>
            <ProgressBar level={skill.level} inView={inView} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(20px, 6vw, 100px)",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(201,164,222,0.15), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "72px", maxWidth: "600px" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}
          >
            <div
              style={{
                fontFamily: "var(--font-poppins-sans)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              02 —
            </div>
            <span
              style={{
                fontFamily: "var(--font-caveat-script)",
                fontSize: "1.15rem",
                color: "var(--accent)",
              }}
            >
              my toolkit
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
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
            The tools I trust.
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {Object.entries(skills).map(([key, category], i) => (
            <SkillCard
              key={key}
              category={category}
              inView={inView}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Languages row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ marginTop: "48px" }}
        >
          <div
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              padding: "28px 32px",
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-poppins-sans)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginRight: "8px",
              }}
            >
              Languages
            </span>
            {["Java", "Python", "C/C++", "MySQL", "Haskell", "TypeScript"].map((lang) => (
              <span
                key={lang}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-poppins-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                className="hover:bg-surface-2"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
