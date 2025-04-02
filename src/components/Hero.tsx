
import { cn } from "@/lib/utils";
import { MapPinIcon, LinkedinIcon, MailIcon, PhoneIcon, ChevronDown, ExternalLink, Github, Database, BrainCog, LineChart, ServerIcon, Code } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden bg-sjsu-blue">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Data flow lines */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className="absolute data-flow-line"
          style={{ 
            top: `${20 + i * 15}%`, 
            left: 0,
            right: 0,
            opacity: 0.4
          }}
        />
      ))}
      
      {/* Moving gradient accent circles */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-sjsu-gold/20 blur-3xl opacity-30"
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
        className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-sjsu-rolloverBlue/20 blur-3xl opacity-30"
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

      <div className="container mx-auto px-6 md:px-8 relative z-10 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Main content area */}
          <div className="max-w-3xl mx-auto lg:mx-0 flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight flex items-center gap-4">
                  I'm <span className="text-sjsu-gold">Pranav</span>
                  
                  {/* Photo for mobile - only visible on smaller screens */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="md:hidden relative w-16 h-16 mt-2"
                  >
                    <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-sjsu-gold">
                      <img 
                        src="/lovable-uploads/4bc9aeb2-8242-4a36-96c1-fc0599812028.png"
                        alt="Pranav Reveendran" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </motion.div>
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mt-1 md:mt-2">
                  <span className="text-sjsu-gold">Reveendran</span>
                </h1>
              </motion.div>
            </div>
            
            {/* Role tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-2xl md:text-3xl font-bold"
            >
              I'm a <span className="text-sjsu-rolloverBlue">Data Engineer</span>
            </motion.div>
            
            {/* Specialized roles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 mb-6 flex flex-wrap gap-3"
            >
              <span className="bg-sjsu-blue/30 text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5 border border-white/20">
                <Database size={14} /> Data Engineer
              </span>
              <span className="bg-sjsu-rolloverBlue/30 text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5 border border-white/20">
                <BrainCog size={14} /> ML Specialist
              </span>
              <span className="bg-sjsu-gold/30 text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5 border border-white/20">
                <LineChart size={14} /> Data Scientist
              </span>
            </motion.div>
            
            {/* Mission statement */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-xl md:text-2xl text-white font-medium text-balance max-w-2xl"
            >
              I transform complex data challenges into <span className="text-sjsu-rolloverBlue font-semibold">actionable insights</span> and <span className="text-sjsu-gold font-semibold">scalable solutions</span>.
            </motion.p>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-3 text-lg text-white/80 text-balance max-w-2xl"
            >
              With a passion for designing elegant data systems and predictive models, I help organizations leverage their data assets to drive business growth and innovation.
            </motion.p>
            
            {/* Contact information blocks */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {/* Phone block */}
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-white group hover:bg-white/15 transition-colors duration-200 border-l-2 border-sjsu-gold">
                <PhoneIcon className="w-4 h-4 mr-3 text-sjsu-gold" />
                <span className="font-mono">+1 660-335-7762</span>
              </div>
              
              {/* Email block */}
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-white group hover:bg-white/15 transition-colors duration-200 border-l-2 border-sjsu-rolloverBlue">
                <MailIcon className="w-4 h-4 mr-3 text-sjsu-rolloverBlue" />
                <a href="mailto:pranav.reveendran@sjsu.edu" className="font-mono group-hover:text-sjsu-rolloverBlue transition-colors">
                  pranav.reveendran@sjsu.edu
                </a>
              </div>
              
              {/* LinkedIn block */}
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-white group hover:bg-white/15 transition-colors duration-200 border-l-2 border-sjsu-blue">
                <LinkedinIcon className="w-4 h-4 mr-3 text-sjsu-blue" />
                <a href="https://linkedin.com/in/" className="flex items-center gap-1 font-mono group-hover:text-sjsu-blue transition-colors">
                  LinkedIn <ExternalLink size={12} className="opacity-50" />
                </a>
              </div>
              
              {/* GitHub block */}
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-white group hover:bg-white/15 transition-colors duration-200 border-l-2 border-sjsu-gold">
                <Github className="w-4 h-4 mr-3 text-sjsu-gold" />
                <a href="https://github.com/" className="flex items-center gap-1 font-mono group-hover:text-sjsu-gold transition-colors">
                  GitHub <ExternalLink size={12} className="opacity-50" />
                </a>
              </div>
              
              {/* Location block */}
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-white group hover:bg-white/15 transition-colors duration-200 border-l-2 border-sjsu-gray sm:col-span-2">
                <MapPinIcon className="w-4 h-4 mr-3 text-sjsu-gray" />
                <span className="font-mono">San Jose, CA (Available from May 19, 2025)</span>
              </div>
            </motion.div>
            
            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a 
                href="#projects" 
                className="bg-sjsu-blue hover:bg-sjsu-rolloverBlue text-white rounded-full px-8 py-3 font-medium flex items-center gap-2 shadow-lg shadow-sjsu-blue/20 transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <ExternalLink size={16} />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="bg-transparent border border-sjsu-gold text-sjsu-gold rounded-full px-8 py-3 font-medium flex items-center gap-2 hover:bg-sjsu-gold/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me <MailIcon size={16} />
              </motion.a>
            </motion.div>
          </div>
          
          {/* Right side - profile photo - only visible on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:block md:flex-1 w-full max-w-sm lg:max-w-md"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main photo with styling */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-sjsu-gold/80 shadow-xl shadow-sjsu-gold/20">
                <img 
                  src="/lovable-uploads/4bc9aeb2-8242-4a36-96c1-fc0599812028.png"
                  alt="Pranav Reveendran" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sjsu-blue/70 to-transparent opacity-50"></div>
              </div>
              
              {/* Floating technology icons */}
              {[
                { Icon: Database, top: "10%", left: "-5%", bg: "bg-gradient-to-br from-sjsu-blue to-sjsu-rolloverBlue" },
                { Icon: ServerIcon, top: "70%", left: "-5%", bg: "bg-gradient-to-br from-sjsu-rolloverBlue to-sjsu-blue" },
                { Icon: BrainCog, top: "20%", right: "-5%", bg: "bg-gradient-to-br from-sjsu-blue to-sjsu-gold" },
                { Icon: LineChart, bottom: "15%", right: "-5%", bg: "bg-gradient-to-br from-sjsu-blue to-sjsu-rolloverBlue" },
                { Icon: Code, bottom: "40%", right: "-8%", bg: "bg-gradient-to-br from-sjsu-gold to-sjsu-blue" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.bg} rounded-full p-3 shadow-lg z-10`}
                  style={{
                    top: item.top,
                    bottom: item.bottom,
                    left: item.left,
                    right: item.right
                  }}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    duration: 5,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <item.Icon className="text-white" size={20} />
                </motion.div>
              ))}
              
              {/* Decorative rings */}
              <motion.div 
                className="absolute -inset-4 rounded-full border border-sjsu-rolloverBlue/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -inset-8 rounded-full border border-sjsu-gold/10"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Quick facts statistics */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "M.S. in Data Science", label: "SJSU (Expected 2026)", icon: "🎓" },
            { value: "B.E. in Computer Science", label: "Christ University (2020)", icon: "🎓" },
            { value: "3+ Years", label: "Industry Experience", icon: "💼" },
            { value: "AWS Certified", label: "Data Engineer (2024)", icon: "🏆" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + (index * 0.1) }}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm overflow-hidden relative p-6 h-full rounded-xl border-l-2 border-t-2 border-sjsu-gold/30">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sjsu-blue to-sjsu-gold"></div>
                
                {/* Content */}
                <div className="text-2xl mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                <div className="text-xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                
                {/* Hover effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 bg-gradient-to-r from-sjsu-blue/10 to-sjsu-gold/10 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.span 
          className="text-sm text-white/70 mb-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll to explore
        </motion.span>
        <motion.div 
          className="w-6 h-12 rounded-full border-2 border-sjsu-gold/50 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div 
            className="w-2 h-3 bg-sjsu-gold rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          ></motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
        >
          <ChevronDown size={24} className="mt-3 text-sjsu-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
