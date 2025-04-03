
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { DeploymentGuide } from "@/components/DeploymentGuide";
import { DataVisualization } from "@/components/DataVisualization";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { Timeline } from "@/components/Timeline";
import { SkillCube } from "@/components/SkillCube";
import { FeaturedStats } from "@/components/FeaturedStats";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .matrix-bg {
        position: relative;
        overflow: hidden;
      }
      
      .matrix-bg::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(hsla(252, 95%, 70%, 0.1) 1px, transparent 1px);
        background-size: 30px 30px;
        opacity: 0.4;
        pointer-events: none;
        z-index: -1;
      }

      .data-particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background-color: hsla(252, 95%, 70%, 0.7);
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
      }
      
      .circuit-line {
        position: absolute;
        background: linear-gradient(90deg, transparent, hsla(252, 95%, 70%, 0.2), transparent);
        height: 1px;
        width: 100%;
        z-index: -1;
      }
      
      .data-flow {
        position: relative;
        overflow: hidden;
      }
      
      .data-flow::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 60%;
        height: 100%;
        background: linear-gradient(90deg, 
          transparent, 
          hsla(252, 95%, 70%, 0.2), 
          hsla(252, 95%, 70%, 0.4),
          hsla(252, 95%, 70%, 0.2),
          transparent
        );
        transform: skewX(-25deg);
        animation: data-flow 5s infinite ease-in-out;
      }
      
      @keyframes data-flow {
        0% { left: -100%; }
        100% { left: 200%; }
      }
      
      .code-block {
        position: relative;
        border-radius: 0.5rem;
        background: #1e1e2e;
        color: #cdd6f4;
        font-family: 'Fira Code', monospace;
        overflow: hidden;
      }
      
      .code-block::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2rem;
        background: #181825;
        display: flex;
        align-items: center;
        padding: 0 1rem;
      }
      
      .code-block::after {
        content: '';
        position: absolute;
        top: 0.7rem;
        left: 1rem;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background: #f38ba8;
        box-shadow: 
          1.25rem 0 0 #f9e2af,
          2.5rem 0 0 #a6e3a1;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
      }
      
      .animate-fade-in {
        opacity: 0;
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animate-fade-in-delayed {
        opacity: 0;
        animation: fadeIn 0.8s ease-out 0.3s forwards;
      }
      
      .animate-fade-in-delayed-2 {
        opacity: 0;
        animation: fadeIn 0.8s ease-out 0.6s forwards;
      }
      
      .animate-fade-in-delayed-3 {
        opacity: 0;
        animation: fadeIn 0.8s ease-out 0.9s forwards;
      }
      
      @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
      }
      
      .typewriter {
        overflow: hidden;
        white-space: nowrap;
        border-right: 0.15em solid hsla(252, 95%, 70%, 1);
        animation: 
          typewriter 4s steps(40, end) forwards,
          blink-caret 0.75s step-end infinite;
      }
      
      @keyframes blink-caret {
        from, to { border-color: transparent; }
        50% { border-color: hsla(252, 95%, 70%, 1); }
      }
      
      .animate-typewriter {
        overflow: hidden;
        white-space: nowrap;
        animation: typewriter 2.5s steps(40, end) forwards;
      }
      
      .data-glow {
        box-shadow: 0 0 15px hsla(252, 95%, 70%, 0.5);
      }
      
      .text-glitch:hover {
        animation: glitch 0.3s ease-in-out;
      }
      
      .card-3d-effect {
        transform-style: preserve-3d;
        perspective: 1000px;
      }
      
      .card-3d-content {
        transition: transform 0.5s ease;
        transform: translateZ(0);
      }
      
      .card-3d-effect:hover .card-3d-content {
        transform: translateZ(20px);
      }
    `;
    document.head.appendChild(style);
    
    const createDataParticles = () => {
      const container = document.querySelector('main');
      if (!container) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('data-particle');
        
        const x = Math.random() * 100;
        const y = Math.random() * 300;
        
        particle.style.left = `${x}vw`;
        particle.style.top = `${y}vh`;
        
        const duration = 5 + Math.random() * 10;
        const delay = Math.random() * 5;
        
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        container.appendChild(particle);
      }
      
      for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.classList.add('circuit-line');
        
        const y = 20 + (i * 15);
        line.style.top = `${y}vh`;
        
        container.appendChild(line);
      }
    };
    
    createDataParticles();
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.head.removeChild(style);
      document.querySelectorAll('.data-particle, .circuit-line').forEach(el => el.remove());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-foreground overflow-hidden">
      <ParticlesBackground />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] circuit-bg opacity-20"></div>
      <Navbar />
      <main>
        <Hero />
        
        <FeaturedStats />
        
        <SkillCube />
        
        <SkillsSection />
        
        <Timeline />
        
        <ExperienceSection />
        <EducationSection />
        <DataVisualization />
        <ProjectsSection />
        <DeploymentGuide />
        <ContactSection />
      </main>
      <Footer />
      
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-sjsu-gold to-sjsu-blue text-white shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
