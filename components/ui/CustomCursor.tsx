"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const peekRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrame: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }

      if (peekRef.current) {
        peekRef.current.style.left = `${mouseX}px`;
        peekRef.current.style.top = `${mouseY + 14}px`;
      }
    };

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      animFrame = requestAnimationFrame(animate);
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!ringRef.current || !peekRef.current) return;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='link']")
      ) {
        ringRef.current.classList.add("hovering-link");
        ringRef.current.classList.remove("hovering-project");
        peekRef.current.classList.remove("visible");
      } else if (target.closest("[data-cursor='project']")) {
        ringRef.current.classList.add("hovering-project");
        ringRef.current.classList.remove("hovering-link");
        peekRef.current.classList.add("visible");
      } else {
        ringRef.current.classList.remove("hovering-link", "hovering-project");
        peekRef.current.classList.remove("visible");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div ref={peekRef} className="cursor-peek">
        PEEK →
      </div>
    </>
  );
}
