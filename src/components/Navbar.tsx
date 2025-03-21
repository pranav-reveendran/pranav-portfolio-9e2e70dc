
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
        isScrolled 
          ? "bg-background/90 backdrop-blur-xl shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-xl font-medium flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-material-primary to-material-secondary bg-clip-text text-transparent font-bold">Portfolio</span>
        </motion.a>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-1">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.href}>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all relative flex items-center justify-center",
                      activeSection === item.href.substring(1)
                        ? "text-material-primary"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {activeSection === item.href.substring(1) && (
                      <motion.span 
                        className="absolute -bottom-1 left-0 right-0 mx-auto h-1 bg-material-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '50%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </motion.div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="p-2 rounded-full bg-material-surface elevation-1 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                d={mobileMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl shadow-lg py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-6">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-md text-sm font-medium transition-all",
                      activeSection === item.href.substring(1)
                        ? "bg-material-primary/10 text-material-primary"
                        : "text-foreground/70 hover:bg-material-primary/5 hover:text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
