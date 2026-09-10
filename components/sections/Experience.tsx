"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience, education } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";

function TimelineEntry({
  entry,
  index,
  inView,
}: {
  entry: (typeof experience)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{
        position: "relative",
        paddingLeft: "40px",
        paddingBottom: "56px",
      }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "6px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: entry.current ? "var(--accent)" : "var(--border)",
          border: `2px solid ${entry.current ? "var(--accent)" : "var(--border)"}`,
          boxShadow: entry.current
            ? "0 0 0 4px rgba(255,111,145,0.15)"
            : "none",
          animation: entry.current ? "pulse-dot 2s ease-in-out infinite" : "none",
          zIndex: 1,
        }}
      />

      {/* Card */}
      <div
        style={{
          background: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "32px",
          boxShadow: "0 4px 24px rgba(58,46,48,0.06)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-playfair-display)",
                fontStyle: "italic",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              {entry.company}
            </h3>

            {entry.current && (
              <span
                style={{
                  fontFamily: "var(--font-caveat-script)",
                  fontSize: "0.9rem",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                ● present
              </span>
            )}
          </div>

          <p
            style={{
              fontFamily: "var(--font-poppins-sans)",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              margin: "0 0 8px",
            }}
          >
            {entry.role}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-poppins-sans)",
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              fontWeight: 300,
            }}
          >
            <Calendar size={12} />
            {entry.period}
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-poppins-sans)",
            fontSize: "0.875rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            marginBottom: "16px",
            fontWeight: 300,
          }}
        >
          {entry.description}
        </p>

        {/* Achievements */}
        <ul style={{ listStyle: "none", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
          {entry.achievements.map((ach, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-poppins-sans)",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "3px" }}>✦</span>
              {ach}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {entry.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 12px",
                borderRadius: "999px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-poppins-sans)",
                fontSize: "0.72rem",
                fontWeight: 500,
                color: "var(--text-muted)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(20px, 6vw, 100px)",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blob */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,111,145,0.08), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "80px" }}>
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
              04 —
            </span>
            <span
              style={{
                fontFamily: "var(--font-caveat-script)",
                fontSize: "1.15rem",
                color: "var(--accent)",
              }}
            >
              where I&apos;ve been
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
            Experience & Journey.
          </motion.h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 8vw, 80px)",
          }}
          className="exp-grid"
        >
          {/* Timeline */}
          <div>
            <div
              style={{
                position: "relative",
                paddingLeft: "0",
              }}
            >
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "5px",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  background:
                    "linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)",
                }}
              />

              {experience.map((entry, i) => (
                <TimelineEntry
                  key={entry.company}
                  entry={entry}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          {/* Education + Extras */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                background: "linear-gradient(135deg, var(--background) 0%, var(--surface) 100%)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "32px",
                boxShadow: "0 4px 24px rgba(58,46,48,0.06)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-caveat-script)",
                  fontSize: "1rem",
                  color: "var(--accent)",
                  marginBottom: "16px",
                }}
              >
                education ✦
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair-display)",
                  fontStyle: "italic",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  margin: "0 0 6px",
                }}
              >
                Amrita Vishwa Vidyapeetham
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-poppins-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  margin: "0 0 4px",
                }}
              >
                B.Tech, Computer Science and Engineering
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  fontFamily: "var(--font-poppins-sans)",
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <MapPin size={12} /> Coimbatore
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Calendar size={12} /> 2023 – Present
                </span>
              </div>
              <div
                style={{
                  padding: "14px 20px",
                  background: "var(--accent-glow)",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-poppins-sans)",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Current CGPA
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-playfair-display)",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                  }}
                >
                  9.29
                </span>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "28px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-caveat-script)",
                  fontSize: "1rem",
                  color: "var(--accent)",
                  marginBottom: "16px",
                }}
              >
                certifications ✦
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  background: "var(--surface)",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #FF9900, #e8c07d)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  ☁️
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-poppins-sans)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      marginBottom: "2px",
                    }}
                  >
                    AWS Cloud Practitioner Essentials
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-poppins-sans)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Amazon Web Services
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Organizations & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "28px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-caveat-script)",
                  fontSize: "1rem",
                  color: "var(--accent)",
                  marginBottom: "16px",
                }}
              >
                beyond code ✦
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { emoji: "🤖", text: "R&D Member, Tensor AI Club" },
                  { emoji: "🤝", text: "NSS Community Volunteer" },
                  { emoji: "🥋", text: "District & State Level Silambam Player" },
                  { emoji: "🏆", text: "Sports Team Captain" },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontFamily: "var(--font-poppins-sans)",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span>{item.emoji}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
