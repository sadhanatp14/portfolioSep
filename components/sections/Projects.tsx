"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { GitFork, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

const accentMap: Record<string, { pill: string; pillBg: string; overlay: string }> = {
  rose: {
    pill: "var(--accent)",
    pillBg: "rgba(255,111,145,0.1)",
    overlay: "linear-gradient(135deg, rgba(255,111,145,0.2), rgba(201,164,222,0.15))",
  },
  gold: {
    pill: "var(--gold)",
    pillBg: "rgba(232,192,125,0.12)",
    overlay: "linear-gradient(135deg, rgba(232,192,125,0.15), rgba(255,111,145,0.1))",
  },
  lavender: {
    pill: "var(--accent-2)",
    pillBg: "rgba(201,164,222,0.12)",
    overlay: "linear-gradient(135deg, rgba(201,164,222,0.2), rgba(255,111,145,0.1))",
  },
};

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const [imageHovered, setImageHovered] = useState(false);
  const isEven = index % 2 === 0;
  const colors = accentMap[project.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 6vw, 80px)",
        alignItems: "center",
        padding: project.featured
          ? "clamp(32px, 4vw, 56px)"
          : "clamp(24px, 3vw, 40px) 0",
        borderBottom: index < projects.length - 1 ? "1px solid var(--border)" : "none",
        background: project.featured
          ? "linear-gradient(135deg, var(--surface) 0%, rgba(201,164,222,0.08) 100%)"
          : "transparent",
        borderRadius: project.featured ? "32px" : "0",
        position: "relative",
        overflow: project.featured ? "hidden" : "visible",
      }}
      className="project-article"
    >
      {/* Featured ribbon */}
      {project.featured && (
        <div
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "linear-gradient(135deg, var(--gold), #f5d08a)",
            borderRadius: "999px",
            padding: "6px 16px",
            fontFamily: "var(--font-poppins-sans)",
            fontSize: "0.7rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Featured ✦
        </div>
      )}

      {/* Text Block */}
      <div
        style={{
          order: isEven ? 0 : 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        className="project-text"
      >
        {/* Project number */}
        <span
          style={{
            fontFamily: "var(--font-caveat-script)",
            fontSize: "1rem",
            color: "var(--text-muted)",
          }}
        >
          {project.id} ✦
        </span>

        {/* Category */}
        <span
          style={{
            fontFamily: "var(--font-poppins-sans)",
            fontSize: "0.7rem",
            fontWeight: 600,
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {project.category}
        </span>

        {/* Name */}
        <h3
          style={{
            fontFamily: "var(--font-playfair-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-poppins-sans)",
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          {project.description}
        </p>

        {/* Highlights */}
        <ul style={{ display: "flex", flexDirection: "column", gap: "8px", listStyle: "none" }}>
          {project.highlights.map((h, i) => (
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
              <span style={{ color: colors.pill, marginTop: "4px", flexShrink: 0 }}>✦</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "5px 14px",
                borderRadius: "999px",
                border: `1px solid ${colors.pill}`,
                background: colors.pillBg,
                fontFamily: "var(--font-poppins-sans)",
                fontSize: "0.72rem",
                fontWeight: 500,
                color: colors.pill,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "16px" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-poppins-sans)",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--text-primary)",
              textDecoration: "none",
              transition: "color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <GitFork size={16} /> GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-poppins-sans)",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--accent)",
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <ExternalLink size={16} /> Live Site
            </a>
          )}
        </div>
      </div>

      {/* Image Block */}
      <div
        style={{ order: isEven ? 1 : 0 }}
        data-cursor="project"
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
        className="project-image"
      >
        <div
          style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            aspectRatio: "16/10",
            boxShadow: imageHovered
              ? "0 20px 60px rgba(255,111,145,0.2)"
              : "0 8px 32px rgba(58,46,48,0.1)",
            transition: "box-shadow 0.4s ease",
          }}
        >
          <Image
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            fill
            style={{
              objectFit: "cover",
              transform: imageHovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Hover overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: colors.overlay,
              opacity: imageHovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(20px, 6vw, 100px)",
        position: "relative",
      }}
    >
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
              03 —
            </span>
            <span
              style={{
                fontFamily: "var(--font-caveat-script)",
                fontSize: "1.15rem",
                color: "var(--accent)",
              }}
            >
              selected work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "var(--font-playfair-display)",
              fontStyle: "italic",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Selected{" "}
            <span className="gradient-text">Projects.</span>
          </motion.h2>
        </div>

        {/* Projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .project-article {
            grid-template-columns: 1fr !important;
          }
          .project-text {
            order: 1 !important;
          }
          .project-image {
            order: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
