
import { cn } from "@/lib/utils";
import { MapPinIcon, LinkedinIcon, MailIcon, PhoneIcon, ChevronDown, ExternalLink, Github, Database, BrainCog, LineChart, ServerIcon } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Vibrant background elements with data theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-blue/30 via-theme-purple/20 to-transparent"></div>
      
      {/* Data particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated data particles */}
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-theme-teal rounded-full opacity-70"
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
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-theme-blue/30 blur-3xl opacity-70"
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
        className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-theme-purple/30 blur-3xl opacity-70"
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
              className="whitespace-nowrap"
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
              className="whitespace-nowrap"
            >
              {`SELECT * FROM data_warehouse WHERE metrics > benchmark ORDER BY impact DESC;`}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side content */}
          <div className="max-w-3xl mx-auto lg:mx-0 flex-1">
            {/* Animated badge/caption */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-theme-teal to-theme-purple text-white text-xs font-medium py-1.5 px-4 rounded-full shadow-lg shadow-theme-purple/20">
                Unlocking Data's Potential
              </div>
            </motion.div>
            
            {/* Animated greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-2 text-xl text-theme-teal font-medium"
            >
              Hi there, I'm
            </motion.div>
            
            {/* Main headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight bg-gradient-to-r from-theme-teal via-theme-purple to-theme-pink bg-clip-text text-transparent"
            >
              Pranav Reveendran
            </motion.h1>
            
            {/* Role and tagline - animated typing effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 mb-6 flex flex-wrap gap-3"
            >
              <span className="bg-theme-teal/10 text-theme-teal px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5 neon-glow">
                <Database size={14} /> Data Engineer
              </span>
              <span className="bg-theme-purple/10 text-theme-purple px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5 neon-glow">
                <BrainCog size={14} /> ML Specialist
              </span>
              <span className="bg-theme-pink/10 text-theme-pink px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5 neon-glow">
                <LineChart size={14} /> Data Scientist
              </span>
            </motion.div>
            
            {/* Personal mission statement/tagline - made larger and more vibrant */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-xl md:text-2xl text-foreground font-medium text-balance max-w-2xl"
            >
              I transform complex data challenges into <span className="text-theme-teal font-semibold">actionable insights</span> and <span className="text-theme-purple font-semibold">scalable solutions</span>.
            </motion.p>
            
            {/* Description - with better color contrast */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-3 text-lg text-muted-foreground text-balance max-w-2xl"
            >
              With a passion for designing elegant data systems and predictive models, I help organizations leverage their data assets to drive business growth and innovation.
            </motion.p>
            
            {/* Contact information - styled as code blocks */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {/* Phone styled as code block */}
              <div className="flex items-center bg-theme-dark/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-muted-foreground group hover:bg-theme-dark/20 transition-colors duration-200 border-l-2 border-theme-teal">
                <PhoneIcon className="w-4 h-4 mr-3 text-theme-teal" />
                <span className="font-mono">+1 660-335-7762</span>
              </div>
              
              {/* Email styled as code block */}
              <div className="flex items-center bg-theme-dark/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-muted-foreground group hover:bg-theme-dark/20 transition-colors duration-200 border-l-2 border-theme-purple">
                <MailIcon className="w-4 h-4 mr-3 text-theme-purple" />
                <a href="mailto:pranav.reveendran@sjsu.edu" className="font-mono group-hover:text-theme-purple transition-colors">
                  pranav.reveendran@sjsu.edu
                </a>
              </div>
              
              {/* LinkedIn styled as code block */}
              <div className="flex items-center bg-theme-dark/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-muted-foreground group hover:bg-theme-dark/20 transition-colors duration-200 border-l-2 border-theme-blue">
                <LinkedinIcon className="w-4 h-4 mr-3 text-theme-blue" />
                <a href="https://linkedin.com/in/" className="flex items-center gap-1 font-mono group-hover:text-theme-blue transition-colors">
                  LinkedIn <ExternalLink size={12} className="opacity-50" />
                </a>
              </div>
              
              {/* GitHub styled as code block */}
              <div className="flex items-center bg-theme-dark/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-muted-foreground group hover:bg-theme-dark/20 transition-colors duration-200 border-l-2 border-theme-yellow">
                <Github className="w-4 h-4 mr-3 text-theme-yellow" />
                <a href="https://github.com/" className="flex items-center gap-1 font-mono group-hover:text-theme-yellow transition-colors">
                  GitHub <ExternalLink size={12} className="opacity-50" />
                </a>
              </div>
              
              {/* Location styled as code block */}
              <div className="flex items-center bg-theme-dark/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-muted-foreground group hover:bg-theme-dark/20 transition-colors duration-200 border-l-2 border-theme-pink sm:col-span-2">
                <MapPinIcon className="w-4 h-4 mr-3 text-theme-pink" />
                <span className="font-mono">San Jose, CA (Available from May 19, 2025)</span>
              </div>
            </motion.div>
            
            {/* CTA buttons - consistent styling with visual hierarchy and vibrant gradients */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a 
                href="#projects" 
                className="bg-gradient-to-r from-theme-teal to-theme-blue text-white rounded-full px-8 py-3 font-medium flex items-center gap-2 shadow-lg shadow-theme-blue/20 hover-lift"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <ExternalLink size={16} />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="bg-gradient-to-r from-theme-purple/10 to-theme-pink/10 backdrop-blur-sm rounded-full px-8 py-3 border border-theme-purple text-theme-purple font-medium flex items-center gap-2 hover:bg-theme-purple/20 transition-colors hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me <MailIcon size={16} />
              </motion.a>
            </motion.div>
          </div>
          
          {/* Right side - interactive personal profile/photo area - enhanced for your photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex-1 w-full max-w-sm lg:max-w-md xl:max-w-lg"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main photo frame - styled for your photo with gradient border and glow effects */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden gradient-border neon-glow">
                <div className="absolute inset-[2px] rounded-xl overflow-hidden bg-gradient-to-br from-background/90 to-background/60 backdrop-blur-sm p-2">
                  {/* Replace this with your actual photo - current placeholder */}
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                    alt="Professional headshot" 
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                  
                  {/* Decorative tech elements around your photo */}
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-theme-teal/10 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-theme-purple/10 to-transparent opacity-80"></div>
                </div>
                
                {/* Floating tech icons with better positioning and animations */}
                {[
                  { Icon: Database, top: "10%", left: "-10%", bg: "bg-gradient-to-br from-theme-teal to-theme-blue" },
                  { Icon: ServerIcon, top: "70%", left: "-5%", bg: "bg-gradient-to-br from-theme-purple to-theme-pink" },
                  { Icon: BrainCog, top: "20%", right: "-10%", bg: "bg-gradient-to-br from-theme-yellow to-theme-pink" },
                  { Icon: LineChart, bottom: "10%", right: "-5%", bg: "bg-gradient-to-br from-theme-teal to-theme-purple" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${item.bg} rounded-full p-3 shadow-lg`}
                    style={{
                      top: item.top,
                      bottom: item.bottom,
                      left: item.left,
                      right: item.right
                    }}
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0, -5, 0],
                      boxShadow: ['0 0 5px rgba(0,0,0,0.2)', '0 0 15px rgba(0,0,0,0.4)', '0 0 5px rgba(0,0,0,0.2)']
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
                
                {/* Data flow lines connecting the icons */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* We'll add SVG lines that connect the icons with animated dashes */}
                  <motion.path 
                    d="M50,50 C100,20 150,80 200,50" 
                    stroke="url(#gradient-line)" 
                    strokeWidth="1.5" 
                    fill="none" 
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: 0.5,
                      strokeDashoffset: [0, -20]
                    }}
                    transition={{ 
                      duration: 2,
                      ease: "linear",
                      repeat: Infinity
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Education/Experience quick facts - with improved card styling */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              transition={{ duration: 0.8, delay: 0.8 + (index * 0.1) }}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="glass-card overflow-hidden relative p-6 h-full rounded-xl border-l-2 border-t-2 border-theme-teal/20">
                {/* Top accent line with gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-theme-teal to-theme-purple"></div>
                
                {/* Icon with animation */}
                <div className="text-2xl mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                <div className="text-xl font-bold bg-gradient-to-r from-theme-teal to-theme-purple bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                
                {/* Glowing effect on hover */}
                <motion.div 
                  className="absolute inset-0 opacity-0 bg-gradient-to-r from-theme-teal/5 to-theme-purple/5 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute transform rotate-45 translate-x-1/2 translate-y-1/2 w-12 h-2 bg-gradient-to-r from-theme-teal/0 to-theme-teal/20"></div>
                </div>
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
          className="text-sm text-muted-foreground mb-2 font-medium"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll to explore
        </motion.span>
        <motion.div 
          className="w-6 h-12 rounded-full border-2 border-theme-teal/50 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div 
            className="w-2 h-3 bg-theme-teal rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          ></motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
        >
          <ChevronDown size={24} className="mt-3 text-theme-teal/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
