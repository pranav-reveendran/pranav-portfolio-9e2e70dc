
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Add a custom css class to enable grid pattern background
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .bg-grid-pattern {
        background-size: 40px 40px;
        background-image: 
          linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
      }
      
      /* Animation keyframes */
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
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
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
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
