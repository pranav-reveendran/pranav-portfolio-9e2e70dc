
import { motion } from "framer-motion";
import { CheckCircle, Database, FileText, GitBranch, Server } from "lucide-react";

export function FeaturedStats() {
  const stats = [
    { 
      label: "Data Pipelines Built", 
      value: "50+", 
      icon: Database,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      label: "Projects Completed", 
      value: "30+", 
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500"
    },
    { 
      label: "Data Warehouses Optimized", 
      value: "15+", 
      icon: Server,
      color: "from-purple-500 to-pink-500"
    },
    { 
      label: "GitHub Contributions", 
      value: "1,200+", 
      icon: GitBranch,
      color: "from-orange-500 to-amber-500"
    },
    { 
      label: "Technical Reports Written", 
      value: "25+", 
      icon: FileText,
      color: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold">Career Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-dreamy border border-primary/10 flex flex-col items-center text-center"
            >
              <div className={`p-3 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4`}>
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Animated decorative elements */}
        <div className="mt-16 relative h-20">
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
                  i % 2 === 0 ? 'from-primary to-secondary' : 'from-secondary to-accent'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
