
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
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
  const [activeSection, setActiveSection] = useState("home");

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
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // offset
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
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
  
  // Pass activeSection to Navbar for highlighting current section
  const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-sjsu-blue text-white overflow-hidden">
      <ParticlesBackground />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] circuit-bg opacity-20"></div>
      
      {/* Pass activeSection to Navbar */}
      <Navbar activeSection={activeSection} sections={sections} />
      
      <main>
        <Hero />
        
        <FeaturedStats />
        
        <SkillCube />
        
        <ExperienceSection />
        
        <EducationSection />
        
        <Timeline />
        
        <ProjectsSection />
        
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Interactive scroll-to-top button */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-sjsu-gold to-sjsu-rolloverBlue text-white shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Progress indicator */}
      <div className="fixed left-0 top-0 h-1 bg-sjsu-gold z-50" style={{ width: `${(scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`, transition: 'width 0.1s' }}></div>
    </div>
  );
};

export default Index;
