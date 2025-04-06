
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

interface NavbarProps {
  activeSection?: string;
  sections?: Array<{ id: string; label: string; }>;
}

export function Navbar({ activeSection = "home", sections = [] }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = sections.length > 0 ? sections : [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "expertise", label: "Technical Expertise" },
    { id: "career", label: "Career Highlights" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar transparency
      setIsScrolled(window.scrollY > 20);
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
          ? "bg-[#0f1e30]/90 backdrop-blur-xl shadow-md" 
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
          <span className="bg-gradient-to-r from-white to-sjsu-gold bg-clip-text text-transparent font-bold">Portfolio</span>
        </motion.a>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-1">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.id}>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all relative flex items-center justify-center",
                      activeSection === item.id
                        ? "text-sjsu-gold"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span 
                        className="absolute -bottom-1 left-0 right-0 mx-auto h-1 bg-sjsu-gold rounded-full"
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
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
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
          className="md:hidden absolute top-full left-0 right-0 bg-[#0f1e30]/95 backdrop-blur-xl shadow-lg py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-6">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "block px-4 py-3 rounded-md text-sm font-medium transition-all",
                      activeSection === item.id
                        ? "bg-sjsu-gold/20 text-sjsu-gold"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
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
