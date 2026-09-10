"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Loader from "@/components/sections/Loader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <SmoothScrollProvider>
      <Loader onComplete={() => setLoaded(true)} />
      <CustomCursor />

      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </SmoothScrollProvider>
  );
}
