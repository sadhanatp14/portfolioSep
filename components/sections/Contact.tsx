"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Heart, Check } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { personal } from "@/lib/data";

// SVG Icons for social platforms
function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormState("idle"), 4000);
  };

  const socials = [
    { icon: GithubIcon, label: "GitHub", href: personal.github },
    { icon: LinkedinIcon, label: "LinkedIn", href: personal.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${personal.email}` },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(20px, 6vw, 100px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(255,111,145,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}
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
              06 —
            </span>
            <span
              style={{
                fontFamily: "var(--font-caveat-script)",
                fontSize: "1.15rem",
                color: "var(--accent)",
              }}
            >
              let&apos;s talk
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "var(--font-playfair-display)",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "0 0 20px",
            }}
          >
            Let&apos;s build something{" "}
            <span className="gradient-text">great.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "var(--font-poppins-sans)",
              fontSize: "1rem",
              color: "var(--text-muted)",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Available for freelance & full-time opportunities.
            <br />
            Let&apos;s create something beautiful together.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "clamp(32px, 6vw, 80px)",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {/* Contact details */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-playfair-display)",
                  fontStyle: "italic",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "24px",
                }}
              >
                Get in touch
              </h3>

              {[
                { icon: Mail, text: personal.email, href: `mailto:${personal.email}` },
                { icon: Phone, text: personal.phone, href: `tel:${personal.phone}` },
                { icon: MapPin, text: personal.location, href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "var(--accent-glow)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontFamily: "var(--font-poppins-sans)",
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      {text}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-poppins-sans)",
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-caveat-script)",
                  fontSize: "1rem",
                  color: "var(--accent)",
                  marginBottom: "16px",
                }}
              >
                find me here ✦
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                {socials.map(({ icon: Icon, label, href }) => (
                  <SocialIcon key={label} Icon={Icon} label={label} href={href} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
                className="form-row"
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-poppins-sans)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    id="contact-name"
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-poppins-sans)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    id="contact-email"
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-poppins-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Message
                </label>
                <textarea
                  className="form-input"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  id="contact-message"
                  style={{ resize: "vertical", minHeight: "140px" }}
                />
              </div>

              {/* Submit button */}
              <SubmitButton state={formState} />
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function SocialIcon({
  Icon,
  label,
  href,
}: {
  Icon: React.ComponentType<{ size: number }>;
  label: string;
  href: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--text-primary)",
              color: "var(--background)",
              fontFamily: "var(--font-poppins-sans)",
              fontSize: "0.7rem",
              fontWeight: 500,
              padding: "4px 10px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "48px",
          height: "48px",
          borderRadius: "14px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--text-primary)",
          textDecoration: "none",
          transition: "background 0.2s ease, border-color 0.2s ease",
        }}
      >
        <Icon size={20} />
      </motion.a>
    </div>
  );
}

function SubmitButton({ state }: { state: FormState }) {
  return (
    <motion.button
      type="submit"
      disabled={state === "loading" || state === "success"}
      whileHover={state === "idle" ? { scale: 1.01 } : {}}
      whileTap={state === "idle" ? { scale: 0.98 } : {}}
      style={{
        width: "100%",
        padding: "16px 32px",
        borderRadius: "16px",
        border: "none",
        background:
          state === "success"
            ? "linear-gradient(135deg, #4CAF50, #66BB6A)"
            : "linear-gradient(135deg, var(--accent), var(--accent-2))",
        color: "#fff9f5",
        fontFamily: "var(--font-poppins-sans)",
        fontSize: "0.9rem",
        fontWeight: 500,
        cursor: state === "idle" ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        boxShadow: "0 4px 20px rgba(255,111,145,0.3)",
        transition: "background 0.4s ease, box-shadow 0.3s ease",
        letterSpacing: "0.04em",
      }}
      id="contact-submit"
    >
      <AnimatePresence mode="wait">
        {state === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Send size={16} />
            Send Message
          </motion.div>
        )}
        {state === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.div>
            Sending...
          </motion.div>
        )}
        {state === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Check size={16} strokeWidth={3} />
            </motion.div>
            Message sent! ✦
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
