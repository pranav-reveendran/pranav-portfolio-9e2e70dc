
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar transparency
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "skills", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-medium flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <span className="text-primary font-bold">Portfolio</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-all relative",
                activeSection === item.href.substring(1)
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          {/* Mobile menu button (simplified for this version) */}
          <button 
            className="p-2 rounded-md text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
