
import { cn } from "@/lib/utils";
import { MapPinIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-material-primary/5 to-transparent"></div>
      
      {/* Moving gradient circles */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-material-primary/10 blur-3xl"
        animate={{ 
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{ 
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-material-secondary/10 blur-3xl"
        animate={{ 
          x: [0, -10, 0],
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Caption/Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-material-primary to-material-secondary text-white text-xs font-medium py-1.5 px-4 rounded-full">
              Data Engineer • ML Specialist • Data Scientist
            </div>
          </motion.div>
          
          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight bg-gradient-to-r from-material-primary via-material-secondary to-material-tertiary bg-clip-text text-transparent"
          >
            Pranav Reveendran
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground text-balance max-w-2xl"
          >
            I develop data engineering solutions, ML models, and data pipelines that transform complex datasets into valuable business insights.
          </motion.p>
          
          {/* Contact information */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-col space-y-3"
          >
            <div className="flex items-center text-muted-foreground">
              <PhoneIcon className="w-4 h-4 mr-3 text-material-primary" />
              <span>+1 660-335-7762</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MailIcon className="w-4 h-4 mr-3 text-material-primary" />
              <a href="mailto:pranav.reveendran@sjsu.edu" className="hover:text-material-primary transition-colors">
                pranav.reveendran@sjsu.edu
              </a>
            </div>
            <div className="flex items-center text-muted-foreground">
              <LinkedinIcon className="w-4 h-4 mr-3 text-material-primary" />
              <a href="https://linkedin.com/in/" className="hover:text-material-primary transition-colors">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPinIcon className="w-4 h-4 mr-3 text-material-primary" />
              <span>San Jose, CA (Available from May 19, 2025)</span>
            </div>
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a 
              href="#projects" 
              className="material-btn bg-material-primary rounded-full px-8 py-3 text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="rounded-full px-8 py-3 border border-material-primary text-material-primary font-medium hover:bg-material-primary/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
        
        {/* Education/Experience quick facts - with Apple-like cards */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "M.S. in Data Science", label: "SJSU (Expected 2026)" },
            { value: "B.E. in Computer Science", label: "Christ University (2020)" },
            { value: "3+ Years", label: "Industry Experience" },
            { value: "AWS Certified", label: "Data Engineer (2024)" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + (index * 0.1) }}
              className="material-card overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="p-6 text-center">
                <div className="text-xl font-bold bg-gradient-to-r from-material-primary to-material-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-xs text-muted-foreground mb-2">Scroll to explore</span>
        <motion.div 
          className="w-5 h-10 rounded-full border border-material-primary/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-2 bg-material-primary rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
