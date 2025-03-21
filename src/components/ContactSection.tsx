
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Mail as MailIcon, 
  Phone as PhoneIcon, 
  Linkedin as LinkedinIcon, 
  Github as GithubIcon, 
  Twitter as TwitterIcon,
  Send as SendIcon
} from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-material-background to-white relative overflow-hidden">
      {/* Apple-style background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-material-primary/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-16">
          {/* Contact info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 mb-12 lg:mb-0"
          >
            <div className="inline-block mb-3">
              <motion.span 
                className="text-sm font-medium bg-gradient-to-r from-material-primary to-material-secondary bg-clip-text text-transparent"
                whileInView={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Get in Touch
              </motion.span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-material-primary to-material-secondary bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm open to discussing new projects, collaborations, or opportunities to contribute my expertise in data engineering and machine learning.
            </p>
            
            <div className="space-y-5">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-material-primary/10 rounded-full flex items-center justify-center text-material-primary mr-4">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a href="mailto:pranav.reveendran@sjsu.edu" className="font-medium hover:text-material-primary transition-colors">
                    pranav.reveendran@sjsu.edu
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-material-primary/10 rounded-full flex items-center justify-center text-material-primary mr-4">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Phone</div>
                  <a href="tel:+16603357762" className="font-medium hover:text-material-primary transition-colors">
                    +1 (660) 335-7762
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Social links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <div className="mb-3 text-sm text-muted-foreground">Connect with me</div>
              <div className="flex space-x-4">
                {[
                  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                  { icon: GithubIcon, href: "#", label: "GitHub" },
                  { icon: TwitterIcon, href: "#", label: "Twitter" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-white elevation-1 rounded-full flex items-center justify-center text-material-primary hover:elevation-2 transition-all"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-3/5 bg-white rounded-xl elevation-2 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full bg-material-background border border-material-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-material-primary/30 focus:border-material-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full bg-material-background border border-material-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-material-primary/30 focus:border-material-primary transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground/80">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can I help you?"
                  className="w-full bg-material-background border border-material-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-material-primary/30 focus:border-material-primary transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  className="w-full bg-material-background border border-material-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-material-primary/30 focus:border-material-primary transition-all resize-none"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="inline-flex items-center bg-material-primary text-white px-8 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Send Message</span>
                <SendIcon className="ml-2 w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
