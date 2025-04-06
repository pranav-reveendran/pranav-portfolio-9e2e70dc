
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
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
    
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
  
  // Define sections for the navbar with updated order
  const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "expertise", label: "Technical Expertise" },
    { id: "career", label: "Career Highlights" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.4,
      }
    }
  };

  const sectionVariants = {
    initial: {
      y: 20,
      opacity: 0
    },
    in: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    out: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1e30] text-white overflow-hidden">
      <ParticlesBackground />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] circuit-bg opacity-20"></div>
      
      {/* Pass sections and activeSection to Navbar */}
      <Navbar activeSection={activeSection} sections={sections} />
      
      <AnimatePresence mode="wait">
        {pageLoaded && (
          <motion.main
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="bg-[#0f1e30]"
          >
            <motion.div variants={sectionVariants} className="page-section">
              <Hero />
            </motion.div>
            
            <motion.div variants={sectionVariants} className="page-section">
              <FeaturedStats />
            </motion.div>
            
            <motion.section id="skills" variants={sectionVariants} className="page-section">
              <SkillCube />
            </motion.section>
            
            <motion.section id="expertise" variants={sectionVariants} className="page-section">
              <SkillsSection />
            </motion.section>
            
            <motion.section id="career" variants={sectionVariants} className="page-section">
              <Timeline />
            </motion.section>
            
            <motion.section variants={sectionVariants} className="page-section">
              <ExperienceSection />
            </motion.section>
            
            <motion.section variants={sectionVariants} className="page-section">
              <EducationSection />
            </motion.section>
            
            <motion.section id="projects" variants={sectionVariants} className="page-section">
              <ProjectsSection />
            </motion.section>
            
            <motion.section id="contact" variants={sectionVariants} className="page-section">
              <ContactSection />
            </motion.section>
          </motion.main>
        )}
      </AnimatePresence>
      
      <Footer />
      
      {/* Interactive scroll-to-top button with improved animation */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(229, 168, 35, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-sjsu-gold to-sjsu-rolloverBlue text-white shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Progress indicator with smoother animation */}
      <motion.div 
        className="fixed left-0 top-0 h-1 bg-gradient-to-r from-sjsu-gold to-sjsu-blue z-50" 
        style={{ 
          width: `${(scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`,
        }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />
    </div>
  );
};

export default Index;
