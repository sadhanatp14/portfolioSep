"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-glass" : "bg-transparent"
        }`}
        style={{ padding: "0 clamp(20px, 5vw, 80px)" }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <motion.span
                whileHover={{ scale: 1.02 }}
                style={{
                  fontFamily: "var(--font-playfair-display)",
                  fontStyle: "italic",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                Sadhana{" "}
                <span style={{ color: "var(--accent)" }}>T P</span>
              </motion.span>
            </Link>

            {/* Desktop Nav */}
            <nav
              style={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
              }}
              className="hidden md:flex"
            >
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} active={activeSection === link.href} />
              ))}
              <a
                href="mailto:sadhana.aquaris@gmail.com"
                style={{
                  background: "var(--accent)",
                  color: "#fff9f5",
                  padding: "10px 24px",
                  borderRadius: "999px",
                  fontFamily: "var(--font-poppins-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "box-shadow 0.3s ease, transform 0.2s ease",
                }}
                className="hover:shadow-dreamy"
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Hire Me ✦
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-primary)",
                padding: "8px",
              }}
              aria-label="Toggle menu"
              id="nav-menu-toggle"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 36px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 36px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 36px)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              background: "var(--background)",
              zIndex: 49,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "200px",
                height: "200px",
                background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.08 + 0.1, duration: 0.4 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-playfair-display)",
                  fontStyle: "italic",
                  fontSize: "2.5rem",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: "var(--font-caveat-script)",
                fontSize: "1.1rem",
                color: "var(--text-muted)",
              }}
            >
              sadhana.aquaris@gmail.com
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        position: "relative",
        fontFamily: "var(--font-poppins-sans)",
        fontSize: "0.875rem",
        fontWeight: 400,
        color: active ? "var(--accent)" : "var(--text-primary)",
        textDecoration: "none",
        padding: "4px 0",
        letterSpacing: "0.01em",
        transition: "color 0.2s ease",
      }}
      className="group"
    >
      {label}
      <span
        className="group-hover:w-full"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "1.5px",
          width: active ? "100%" : "0%",
          background: "var(--accent)",
          borderRadius: "999px",
          transition: "width 0.3s ease",
        }}
      />
    </a>
  );
}
