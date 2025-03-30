
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

type SkillNode = {
  name: string;
  category: string;
  level: number; // 1-10
};

export function SkillCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  const skills: SkillNode[] = [
    { name: "Python", category: "Programming", level: 9 },
    { name: "SQL", category: "Database", level: 10 },
    { name: "AWS", category: "Cloud", level: 8 },
    { name: "Snowflake", category: "Data Warehouse", level: 8 },
    { name: "Airflow", category: "Data Pipeline", level: 9 },
    { name: "Spark", category: "Big Data", level: 7 },
    { name: "Docker", category: "DevOps", level: 7 },
    { name: "Kubernetes", category: "DevOps", level: 6 },
    { name: "TensorFlow", category: "ML", level: 7 },
    { name: "PyTorch", category: "ML", level: 6 },
    { name: "Tableau", category: "Visualization", level: 8 },
    { name: "Power BI", category: "Visualization", level: 7 },
    { name: "Git", category: "Version Control", level: 9 },
    { name: "CI/CD", category: "DevOps", level: 7 },
    { name: "ETL/ELT", category: "Data Engineering", level: 10 },
    { name: "Java", category: "Programming", level: 6 },
    { name: "REST APIs", category: "Web", level: 7 },
    { name: "Kafka", category: "Streaming", level: 6 },
    { name: "Redshift", category: "Data Warehouse", level: 7 },
    { name: "dbt", category: "Data Transformation", level: 8 },
  ];
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const randomizePositions = () => {
      controls.start(() => ({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        z: Math.random() * 200 - 100,
        transition: { duration: 3, ease: "easeInOut" }
      }));
      
      timeoutId = setTimeout(randomizePositions, 3000);
    };
    
    randomizePositions();
    
    return () => clearTimeout(timeoutId);
  }, [controls]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const rotateY = ((e.clientX - centerX) / width) * 20;
    const rotateX = ((centerY - e.clientY) / height) * 20;
    
    containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      "Programming": "from-blue-500 to-blue-600",
      "Database": "from-green-500 to-green-600",
      "Cloud": "from-purple-500 to-purple-600",
      "Data Warehouse": "from-yellow-500 to-yellow-600",
      "Data Pipeline": "from-red-500 to-red-600",
      "Big Data": "from-orange-500 to-orange-600",
      "DevOps": "from-teal-500 to-teal-600",
      "ML": "from-pink-500 to-pink-600",
      "Visualization": "from-indigo-500 to-indigo-600",
      "Version Control": "from-gray-500 to-gray-600",
      "Data Engineering": "from-emerald-500 to-emerald-600",
      "Web": "from-cyan-500 to-cyan-600",
      "Streaming": "from-amber-500 to-amber-600",
      "Data Transformation": "from-lime-500 to-lime-600",
    };
    
    return categoryColors[category] || "from-primary to-secondary";
  };
  
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
            Interactive
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-2">Skills Universe</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Move your mouse over the skills cloud to explore my technical expertise
          </p>
        </motion.div>
        
        <div 
          ref={containerRef}
          className="h-[500px] relative perspective-1000 transition-transform duration-300 ease-out"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ 
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                z: Math.random() * 200 - 100,
                opacity: 0
              }}
              animate={controls}
              transition={{ 
                delay: index * 0.05,
                duration: 0.5
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ 
                transformStyle: "preserve-3d", 
                zIndex: Math.floor(skill.level)
              }}
            >
              <div 
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} text-white font-medium whitespace-nowrap shadow-lg`}
                style={{ 
                  transform: `scale(${0.7 + skill.level * 0.04})`,
                  opacity: 0.7 + skill.level * 0.03
                }}
              >
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
