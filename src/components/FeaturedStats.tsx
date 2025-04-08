
import { motion } from "framer-motion";
import { CheckCircle, Database, FileText, GitBranch, Server, Sparkles, Award, Zap, BookOpen } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function FeaturedStats() {
  const stats = [
    { 
      label: "Data Pipelines Built", 
      value: "50+", 
      icon: Database,
      color: "from-sjsu-blue to-sjsu-rolloverBlue",
      description: "ETL/ELT pipelines for enterprise clients"
    },
    { 
      label: "Projects Completed", 
      value: "30+", 
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
      description: "From concept to successful deployment"
    },
    { 
      label: "Data Warehouses Optimized", 
      value: "15+", 
      icon: Server,
      color: "from-purple-500 to-pink-500",
      description: "Improving performance by 40-60% on average"
    },
    { 
      label: "GitHub Contributions", 
      value: "1,200+", 
      icon: GitBranch,
      color: "from-sjsu-gold to-amber-500",
      description: "Active open-source contributor"
    },
    { 
      label: "Technical Reports Written", 
      value: "25+", 
      icon: FileText,
      color: "from-red-500 to-rose-500",
      description: "Published insights and documentation"
    }
  ];

  const achievements = [
    {
      title: "AWS Certified Data Engineer",
      icon: Award,
      color: "bg-sjsu-gold",
      description: "Recognized expertise in cloud data engineering"
    },
    {
      title: "Reduced Processing Time by 65%",
      icon: Zap,
      color: "bg-sjsu-blue",
      description: "Optimized critical data pipeline for Fortune 500 client"
    },
    {
      title: "Published Research Paper",
      icon: BookOpen,
      color: "bg-purple-500",
      description: "On ML optimization techniques in data pipelines"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-[#f0f4f8]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-sjsu-blue/5 to-transparent z-0"></div>
      
      {/* Animated floating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 2 === 0 ? 'bg-sjsu-blue/10' : 'bg-sjsu-gold/10'
            }`}
            style={{
              width: `${30 + Math.random() * 40}px`,
              height: `${30 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-sjsu-blue/20 to-sjsu-rolloverBlue/20 text-sjsu-blue font-medium text-sm mb-3">
            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-sjsu-blue" />
              Measurable Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0e1525]">My Data Engineering Journey</h2>
          <p className="text-[#071426] max-w-2xl mx-auto">
            Transforming complex data challenges into elegant, scalable solutions that drive business decisions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-sjsu-blue to-sjsu-gold rounded-full mx-auto mt-4"></div>
        </motion.div>
        
        {/* Key achievements cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative overflow-hidden"
            >
              <Card className="h-full backdrop-blur-sm border-sjsu-blue/10 shadow-lg overflow-hidden relative">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-80">
                  <div className="absolute transform rotate-45 translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-gradient-to-r from-sjsu-blue/0 via-sjsu-blue/20 to-sjsu-gold/30"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className={`p-3 rounded-xl ${achievement.color} text-white`}>
                      <achievement.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Stats counter cards with hover effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border border-sjsu-blue/10 shadow-dreamy overflow-hidden">
                {/* Animated background gradient that moves on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
                
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon size={24} />
                  </div>
                  
                  <div className="space-y-2 z-10">
                    <motion.h3 
                      className="text-3xl font-bold"
                      initial={{ opacity: 1 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                    <p className="text-xs text-muted-foreground/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.description}
                    </p>
                  </div>
                  
                  {/* Decorative accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sjsu-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Animated decorative elements */}
        <div className="mt-16 relative h-20 overflow-hidden">
          <div className="absolute inset-0 flex justify-around items-center">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r ${
                  i % 2 === 0 ? 'from-sjsu-blue to-sjsu-rolloverBlue' : 'from-sjsu-blue to-sjsu-gold'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
