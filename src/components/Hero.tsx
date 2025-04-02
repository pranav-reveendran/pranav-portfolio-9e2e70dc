import { cn } from "@/lib/utils";
import { MapPinIcon, LinkedinIcon, MailIcon, PhoneIcon, ChevronDown, ExternalLink, Github, Database, BrainCog, LineChart, ServerIcon, Code } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden bg-[#031b2e]">
      {/* Dark background with data-themed patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031b2e] via-[#0a2942] to-[#031b2e]"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: `linear-gradient(rgba(66, 153, 225, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(66, 153, 225, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Data particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated data particles */}
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#4299e1] rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
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
      </div>
      
      {/* Moving gradient circles with larger blurs for depth */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-[#4299e1]/20 blur-3xl opacity-30"
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
        className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-[#9f7aea]/20 blur-3xl opacity-30"
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

      {/* Animated code snippets in background for tech feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -right-20 top-40 opacity-5 font-mono text-xs overflow-hidden w-80 h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
              className="whitespace-nowrap text-[#4299e1]"
            >
              {`def process_data(data_frame): return data_frame.transform(lambda x: x * 2)`}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="absolute -left-20 bottom-40 opacity-5 font-mono text-xs overflow-hidden w-80 h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
              className="whitespace-nowrap text-[#9f7aea]"
            >
              {`SELECT * FROM data_warehouse WHERE metrics > benchmark ORDER BY impact DESC;`}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side content */}
          <div className="max-w-3xl mx-auto lg:mx-0 flex-1">
            {/* Main headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
            >
              I'm <span className="text-[#4299e1]">Pranav Reveendran</span>
            </motion.h1>
            
            {/* Role tagline with animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-2xl md:text-3xl font-bold"
            >
              I'm a <span className="text-[#9f7aea]">Data Engineer</span>
            </motion.div>
            
            {/* Specialized roles - shown as badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 mb-6 flex flex-wrap gap-3"
            >
              <span className="bg-[#4299e1]/10 text-[#4299e1] px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5">
                <Database size={14} /> Data Engineer
              </span>
              <span className="bg-[#9f7aea]/10 text-[#9f7aea] px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5">
                <BrainCog size={14} /> ML Specialist
              </span>
              <span className="bg-[#ed64a6]/10 text-[#ed64a6] px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5">
                <LineChart size={14} /> Data Scientist
              </span>
            </motion.div>
            
            {/* Personal mission statement/tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-xl md:text-2xl text-white font-medium text-balance max-w-2xl"
            >
              I transform complex data challenges into <span className="text-[#4ec9b0] font-semibold">actionable insights</span> and <span className="text-[#9f7aea] font-semibold">scalable solutions</span>.
            </motion.p>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-3 text-lg text-gray-300 text-balance max-w-2xl"
            >
              With a passion for designing elegant data systems and predictive models, I help organizations leverage their data assets to drive business growth and innovation.
            </motion.p>
            
            {/* Contact information - styled as code blocks */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {/* Phone styled as code block */}
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2.5 text-gray-300 group hover:bg-white/10 transition-colors duration-200 border-l-2 border-[#4299e1]">
                <PhoneIcon className="w-4 h-4 mr-3 text-[#4299e1]" />
                <span className="font-mono">+1 660-335-7762</span>
              </div>
              
              {/* Email styled as code block */}
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2.5 text-gray-300 group hover:bg-white/10 transition-colors duration-200 border-l-2 border-[#9f7aea]">
                <MailIcon className="w-4 h-4 mr-3 text-[#9f7aea]" />
                <a href="mailto:pranav.reveendran@sjsu.edu" className="font-mono group-hover:text-[#9f7aea] transition-colors">
                  pranav.reveendran@sjsu.edu
                </a>
              </div>
              
              {/* LinkedIn styled as code block */}
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2.5 text-gray-300 group hover:bg-white/10 transition-colors duration-200 border-l-2 border-[#4299e1]">
                <LinkedinIcon className="w-4 h-4 mr-3 text-[#4299e1]" />
                <a href="https://linkedin.com/in/" className="flex items-center gap-1 font-mono group-hover:text-[#4299e1] transition-colors">
                  LinkedIn <ExternalLink size={12} className="opacity-50" />
                </a>
              </div>
              
              {/* GitHub styled as code block */}
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2.5 text-gray-300 group hover:bg-white/10 transition-colors duration-200 border-l-2 border-[#ecc94b]">
                <Github className="w-4 h-4 mr-3 text-[#ecc94b]" />
                <a href="https://github.com/" className="flex items-center gap-1 font-mono group-hover:text-[#ecc94b] transition-colors">
                  GitHub <ExternalLink size={12} className="opacity-50" />
                </a>
              </div>
              
              {/* Location styled as code block */}
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2.5 text-gray-300 group hover:bg-white/10 transition-colors duration-200 border-l-2 border-[#ed64a6] sm:col-span-2">
                <MapPinIcon className="w-4 h-4 mr-3 text-[#ed64a6]" />
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
                className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-full px-8 py-3 font-medium flex items-center gap-2 shadow-lg shadow-[#4299e1]/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <ExternalLink size={16} />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="bg-transparent border border-[#9f7aea] text-[#9f7aea] rounded-full px-8 py-3 font-medium flex items-center gap-2 hover:bg-[#9f7aea]/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me <MailIcon size={16} />
              </motion.a>
            </motion.div>
          </div>
          
          {/* Right side - interactive personal profile/photo area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex-1 w-full max-w-sm lg:max-w-md order-first lg:order-last"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main photo frame with styling */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#4299e1]/50 shadow-xl shadow-[#4299e1]/20">
                <img 
                  src="/lovable-uploads/4bc9aeb2-8242-4a36-96c1-fc0599812028.png"
                  alt="Pranav Reveendran" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031b2e]/70 to-transparent opacity-50"></div>
              </div>
              
              {/* Floating tech icons */}
              {[
                { Icon: Database, top: "10%", left: "-5%", bg: "bg-gradient-to-br from-[#4299e1] to-[#3182ce]" },
                { Icon: ServerIcon, top: "70%", left: "-5%", bg: "bg-gradient-to-br from-[#9f7aea] to-[#805ad5]" },
                { Icon: BrainCog, top: "20%", right: "-5%", bg: "bg-gradient-to-br from-[#ecc94b] to-[#d69e2e]" },
                { Icon: LineChart, bottom: "15%", right: "-5%", bg: "bg-gradient-to-br from-[#4299e1] to-[#9f7aea]" },
                { Icon: Code, bottom: "40%", right: "-8%", bg: "bg-gradient-to-br from-[#ed64a6] to-[#d53f8c]" }
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
              
              {/* Subtle ring animations */}
              <motion.div 
                className="absolute -inset-4 rounded-full border border-[#4299e1]/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -inset-8 rounded-full border border-[#9f7aea]/10"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Quick facts with improved styling */}
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
              <div className="bg-white/5 backdrop-blur-sm overflow-hidden relative p-6 h-full rounded-xl border-l-2 border-t-2 border-[#4299e1]/20">
                {/* Top accent line with gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4299e1] to-[#9f7aea]"></div>
                
                {/* Icon with animation */}
                <div className="text-2xl mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                <div className="text-xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                
                {/* Glowing effect on hover */}
                <motion.div 
                  className="absolute inset-0 opacity-0 bg-gradient-to-r from-[#4299e1]/5 to-[#9f7aea]/5 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
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
        <motion.span 
          className="text-sm text-gray-400 mb-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll to explore
        </motion.span>
        <motion.div 
          className="w-6 h-12 rounded-full border-2 border-[#4299e1]/50 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div 
            className="w-2 h-3 bg-[#4299e1] rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          ></motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
        >
          <ChevronDown size={24} className="mt-3 text-[#4299e1]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
