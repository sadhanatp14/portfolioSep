"use client";

import { useRef, Suspense } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import MagneticButton from "@/components/ui/MagneticButton";
import { marqueeItems } from "@/lib/data";
import { ChevronDown } from "lucide-react";

// ─── 3D Spheres Scene ─────────────────────────────────────────────────────────
function FloatingSphere({
  position,
  color,
  size,
  speed,
  distort,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={2}
        roughness={0.1}
        metalness={0.05}
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#fff0f5" />
      <pointLight position={[-5, -3, -5]} intensity={0.3} color="#c9a4de" />
      <FloatingSphere position={[0, 0, 0]} color="#ffb3c6" size={1.4} speed={0.8} distort={0.4} />
      <FloatingSphere position={[2.2, 1, -2]} color="#c9a4de" size={0.8} speed={1.1} distort={0.5} />
      <FloatingSphere position={[-2, -1, -1]} color="#fde2e7" size={0.6} speed={1.4} distort={0.3} />
      <FloatingSphere position={[1.5, -1.8, 0.5]} color="#e8c07d" size={0.45} speed={0.9} distort={0.6} />
      <FloatingSphere position={[-1.5, 1.5, -1]} color="#ff6f91" size={0.35} speed={1.6} distort={0.4} />
    </>
  );
}

// ─── Blob Visual ──────────────────────────────────────────────────────────────
function HeroVisual() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "520px",
        aspectRatio: "1",
      }}
    >
      {/* Organic blob background */}
      <motion.div
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "50% 50% 40% 60% / 40% 60% 60% 40%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
          scale: [1, 1.03, 0.98, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: "10%",
          background:
            "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 50%, rgba(201,164,222,0.3) 100%)",
          filter: "blur(0px)",
        }}
      />

      {/* Glow rings */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: "5%",
          border: "1px solid rgba(255,111,145,0.2)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      {/* 3D Canvas */}
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%" }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          style={{ borderRadius: "50%" }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "8%",
          right: "-5%",
          background: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "12px 20px",
          boxShadow: "0 8px 32px rgba(255,111,145,0.12)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#4CAF50",
            animation: "pulse-dot 2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-poppins-sans)",
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "var(--text-primary)",
          }}
        >
          Open to Work ✦
        </span>
      </motion.div>

      {/* Tech badge */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute",
          top: "10%",
          left: "-8%",
          background: "var(--accent)",
          borderRadius: "999px",
          padding: "8px 18px",
          zIndex: 2,
          boxShadow: "0 4px 20px rgba(255,111,145,0.35)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-caveat-script)",
            fontSize: "1rem",
            color: "#fff9f5",
          }}
        >
          AI/ML ✦
        </span>
      </motion.div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
const headlineLines = ["Building things", "that work &", "look stunning."];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px clamp(20px, 6vw, 100px) 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle, rgba(255,111,145,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          background:
            "radial-gradient(circle, rgba(201,164,222,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 120px)",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "var(--accent)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-caveat-script)",
                fontSize: "1.15rem",
                color: "var(--accent)",
                letterSpacing: "0.02em",
              }}
            >
              full stack developer ✦
            </span>
          </motion.div>

          {/* Headline */}
          <div>
            {headlineLines.map((line, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.12,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  style={{
                    fontFamily: "var(--font-playfair-display)",
                    fontStyle: "italic",
                    fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    margin: 0,
                  }}
                >
                  {i === 2 ? (
                    <>
                      look{" "}
                      <span
                        className="gradient-text"
                        style={{ fontStyle: "italic" }}
                      >
                        stunning.
                      </span>
                    </>
                  ) : (
                    line
                  )}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontFamily: "var(--font-poppins-sans)",
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "420px",
              fontWeight: 300,
            }}
          >
            End-to-end development. Pixel-perfect interfaces.
            <br />
            AI/ML pipelines that actually ship to production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <MagneticButton
              variant="primary"
              href="#projects"
              id="hero-view-work"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              href="#contact"
              id="hero-get-in-touch"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              height: "1px",
              background: "var(--border)",
              transformOrigin: "left",
            }}
          />

          {/* Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{ overflow: "hidden", position: "relative" }}
          >
            <div className="marquee-track" style={{ display: "flex", gap: "0" }}>
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 16px",
                    borderRadius: "999px",
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    fontFamily: "var(--font-poppins-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    whiteSpace: "nowrap",
                    margin: "0 6px",
                    flexShrink: 0,
                  }}
                >
                  {item}
                  <span style={{ color: "var(--accent)", fontSize: "0.6rem" }}>✦</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: 3D Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          className="hero-visual"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-caveat-script)",
            fontSize: "1rem",
            color: "var(--text-muted)",
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--accent)" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-visual {
            order: -1;
            max-width: 320px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
