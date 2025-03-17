
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Add custom styles and animations 
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
      
      /* Animation keyframes */
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
      
      .data-glow {
        box-shadow: 0 0 15px hsla(252, 95%, 70%, 0.5);
      }
      
      .text-glitch:hover {
        animation: glitch 0.3s ease-in-out;
      }
    `;
    document.head.appendChild(style);
    
    // Add data particles for the matrix/tech effect
    const createDataParticles = () => {
      const container = document.querySelector('main');
      if (!container) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('data-particle');
        
        // Random positions
        const x = Math.random() * 100;
        const y = Math.random() * 300;
        
        particle.style.left = `${x}vw`;
        particle.style.top = `${y}vh`;
        
        // Random animations
        const duration = 5 + Math.random() * 10;
        const delay = Math.random() * 5;
        
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        container.appendChild(particle);
      }
      
      // Add circuit lines
      for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.classList.add('circuit-line');
        
        const y = 20 + (i * 15);
        line.style.top = `${y}vh`;
        
        container.appendChild(line);
      }
    };
    
    createDataParticles();
    
    return () => {
      document.head.removeChild(style);
      // Clean up particles
      document.querySelectorAll('.data-particle, .circuit-line').forEach(el => el.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden matrix-bg">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] circuit-bg opacity-20"></div>
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
