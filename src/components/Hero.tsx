
import { ChevronDown, ExternalLink, Github, Database, BrainCog, LineChart, ServerIcon, Code, MapPinIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden bg-sjsu-blue"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Data flow lines with parallax effect */}
      {[...Array(5)].map((_, i) => (
        <motion.div 
          key={i} 
          className="absolute data-flow-line"
          style={{ 
            top: `${20 + i * 15}%`, 
            left: 0,
            right: 0,
            opacity: 0.4,
            y: y.get() * (i * 0.1) // Parallax effect
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

      <motion.div 
        className="container mx-auto px-6 md:px-8 relative z-10 text-white"
        style={{ opacity }}
      >
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
                  <motion.span 
                    className="text-sjsu-gold"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{
                      backgroundImage: "linear-gradient(45deg, #E5A823, #FFD700, #E5A823)",
                      backgroundSize: "200% 200%",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    Reveendran
                  </motion.span>
                </h1>
              </motion.div>
            </div>
            
            {/* Interactive role tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-2xl md:text-3xl font-bold relative"
            >
              I'm a <motion.span 
                className="text-sjsu-rolloverBlue relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Data Engineer
                <motion.div 
                  className="absolute -bottom-1 left-0 h-1 bg-sjsu-rolloverBlue"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
              </motion.span>
            </motion.div>
            
            {/* Interactive specialized roles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 mb-6 flex flex-wrap gap-3"
            >
              {[
                { icon: Database, text: "Data Engineer", color: "bg-sjsu-blue/30" },
                { icon: BrainCog, text: "ML Specialist", color: "bg-sjsu-rolloverBlue/30" },
                { icon: LineChart, text: "Data Scientist", color: "bg-sjsu-gold/30" }
              ].map((role, index) => (
                <motion.span 
                  key={index}
                  className={`${role.color} text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5 border border-white/20`}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 15px rgba(255,255,255,0.3)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <role.icon size={14} />
                  {role.text}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Mission statement with typing animation */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-xl md:text-2xl text-white font-medium text-balance max-w-2xl"
            >
              I transform complex data challenges into{" "}
              <motion.span 
                className="text-sjsu-rolloverBlue font-semibold"
                animate={{ 
                  color: ["#1C88F4", "#8AD4FF", "#1C88F4"],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                actionable insights
              </motion.span>{" "}
              and{" "}
              <motion.span 
                className="text-sjsu-gold font-semibold"
                animate={{ 
                  color: ["#E5A823", "#FFD700", "#E5A823"],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5
                }}
              >
                scalable solutions
              </motion.span>.
            </motion.p>
            
            {/* Interactive description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-3 text-lg text-white/80 text-balance max-w-2xl"
              whileHover={{ color: "rgba(255, 255, 255, 1)" }}
            >
              With a passion for designing elegant data systems and predictive models, 
              I help organizations leverage their data assets to drive business growth and innovation.
            </motion.p>
            
            {/* Interactive contact information blocks */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {[
                { 
                  icon: PhoneIcon, 
                  content: "+1 660-335-7762", 
                  color: "border-sjsu-gold", 
                  iconColor: "text-sjsu-gold" 
                },
                { 
                  icon: MailIcon, 
                  content: "pranav.reveendran@sjsu.edu", 
                  color: "border-sjsu-rolloverBlue", 
                  iconColor: "text-sjsu-rolloverBlue",
                  isLink: true,
                  href: "mailto:pranav.reveendran@sjsu.edu"
                },
                { 
                  icon: LinkedinIcon, 
                  content: "LinkedIn", 
                  color: "border-sjsu-blue", 
                  iconColor: "text-sjsu-blue",
                  isLink: true,
                  href: "https://linkedin.com/in/",
                  hasExternalIcon: true
                },
                { 
                  icon: Github, 
                  content: "GitHub", 
                  color: "border-sjsu-gold", 
                  iconColor: "text-sjsu-gold",
                  isLink: true,
                  href: "https://github.com/",
                  hasExternalIcon: true
                },
                { 
                  icon: MapPinIcon, 
                  content: "San Jose, CA (Available from May 19, 2025)", 
                  color: "border-sjsu-gray", 
                  iconColor: "text-sjsu-gray",
                  colSpan: true
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-white group hover:bg-white/15 transition-colors duration-200 border-l-2 ${item.color} ${item.colSpan ? "sm:col-span-2" : ""}`}
                  whileHover={{ 
                    x: 5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className={`w-4 h-4 mr-3 ${item.iconColor}`} />
                  {item.isLink ? (
                    <a 
                      href={item.href} 
                      className={`font-mono group-hover:${item.iconColor} transition-colors flex items-center gap-1`}
                    >
                      {item.content}
                      {item.hasExternalIcon && (
                        <ExternalLink size={12} className="opacity-50" />
                      )}
                    </a>
                  ) : (
                    <span className="font-mono">{item.content}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Interactive CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {[
                { 
                  text: "View Projects", 
                  icon: ExternalLink, 
                  href: "#projects",
                  primary: true
                },
                { 
                  text: "Contact Me", 
                  icon: MailIcon, 
                  href: "#contact",
                  primary: false
                }
              ].map((button, index) => (
                <motion.a 
                  key={index}
                  href={button.href} 
                  className={`${
                    button.primary 
                      ? "bg-sjsu-rolloverBlue hover:bg-sjsu-rolloverBlue/80 text-white shadow-lg shadow-sjsu-blue/20" 
                      : "bg-transparent border border-sjsu-gold text-sjsu-gold hover:bg-sjsu-gold/10"
                  } rounded-full px-8 py-3 font-medium flex items-center gap-2 transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button.text} <button.icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          {/* Interactive right side - profile photo - only visible on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:block md:flex-1 w-full max-w-sm lg:max-w-md"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main photo with interactive hover effect */}
              <motion.div 
                className="absolute inset-0 rounded-full overflow-hidden border-2 border-sjsu-gold/80 shadow-xl shadow-sjsu-gold/20"
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src="/lovable-uploads/4bc9aeb2-8242-4a36-96c1-fc0599812028.png"
                  alt="Pranav Reveendran" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sjsu-blue/70 to-transparent opacity-50"></div>
              </motion.div>
              
              {/* Interactive floating technology icons */}
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
                  whileHover={{ 
                    scale: 1.2,
                    boxShadow: "0 0 20px rgba(255,255,255,0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.Icon className="text-white" size={20} />
                </motion.div>
              ))}
              
              {/* Interactive decorative rings */}
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
        
        {/* Interactive quick facts statistics */}
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
              <motion.div 
                className="bg-white/10 backdrop-blur-sm overflow-hidden relative p-6 h-full rounded-xl border-l-2 border-t-2 border-sjsu-gold/30"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(229, 168, 35, 0.5)"
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sjsu-blue to-sjsu-gold"></div>
                
                {/* Content */}
                <motion.div 
                  className="text-2xl mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, repeatDelay: 8 }}
                >
                  {stat.icon}
                </motion.div>
                
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                
                {/* Interactive hover effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 bg-gradient-to-r from-sjsu-blue/10 to-sjsu-gold/10 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Interactive scroll indicator */}
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
          className="w-6 h-12 rounded-full border-2 border-sjsu-gold/50 flex justify-center pt-2 cursor-pointer"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileHover={{ borderColor: "rgba(229, 168, 35, 0.8)", scale: 1.1 }}
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          })}
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
          whileHover={{ scale: 1.2, color: "#E5A823" }}
        >
          <ChevronDown size={24} className="mt-3 text-sjsu-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
