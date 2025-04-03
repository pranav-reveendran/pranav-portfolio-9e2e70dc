
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

type SkillNode = {
  name: string;
  category: string;
  level: number; // 1-10
};

type CategoryData = {
  name: string;
  color: string;
  skills: SkillNode[];
};

export function SkillCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  // Group skills by category
  const categories: CategoryData[] = [
    {
      name: "Programming",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Python", category: "Programming", level: 9 },
        { name: "SQL", category: "Programming", level: 10 },
        { name: "Java", category: "Programming", level: 6 },
      ]
    },
    {
      name: "Cloud",
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "AWS", category: "Cloud", level: 8 },
      ]
    },
    {
      name: "Data Storage",
      color: "from-yellow-500 to-yellow-600",
      skills: [
        { name: "Snowflake", category: "Data Storage", level: 8 },
        { name: "Redshift", category: "Data Storage", level: 7 },
      ]
    },
    {
      name: "Data Pipeline",
      color: "from-red-500 to-red-600",
      skills: [
        { name: "Airflow", category: "Data Pipeline", level: 9 },
        { name: "ETL/ELT", category: "Data Pipeline", level: 10 },
        { name: "dbt", category: "Data Pipeline", level: 8 },
      ]
    },
    {
      name: "Big Data",
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "Spark", category: "Big Data", level: 7 },
        { name: "Kafka", category: "Big Data", level: 6 },
      ]
    },
    {
      name: "DevOps",
      color: "from-teal-500 to-teal-600",
      skills: [
        { name: "Docker", category: "DevOps", level: 7 },
        { name: "Kubernetes", category: "DevOps", level: 6 },
        { name: "CI/CD", category: "DevOps", level: 7 },
        { name: "Git", category: "DevOps", level: 9 },
      ]
    },
    {
      name: "ML & AI",
      color: "from-pink-500 to-pink-600",
      skills: [
        { name: "TensorFlow", category: "ML & AI", level: 7 },
        { name: "PyTorch", category: "ML & AI", level: 6 },
      ]
    },
    {
      name: "Visualization",
      color: "from-indigo-500 to-indigo-600",
      skills: [
        { name: "Tableau", category: "Visualization", level: 8 },
        { name: "Power BI", category: "Visualization", level: 7 },
      ]
    },
    {
      name: "Web",
      color: "from-cyan-500 to-cyan-600",
      skills: [
        { name: "REST APIs", category: "Web", level: 7 },
      ]
    },
  ];
  
  const skills: SkillNode[] = categories.flatMap(category => category.skills);
  
  // 3D rotation effect on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate rotation based on mouse position
    const rotateYValue = ((e.clientX - centerX) / width) * 25; // Increase for more dramatic effect
    const rotateXValue = ((centerY - e.clientY) / height) * 25;
    
    rotateY.set(rotateYValue);
    rotateX.set(rotateXValue);
  };
  
  const handleMouseLeave = () => {
    // Smoothly animate back to center
    rotateX.set(0);
    rotateY.set(0);
  };
  
  // Calculate positions for skills in 3D space
  const calculatePosition = (index: number, total: number, radius: number) => {
    // Spiral layout
    const angle = (index / total) * Math.PI * 8; // More loops for more items
    const spiralRadius = (1 - index / total) * radius;
    const x = Math.cos(angle) * spiralRadius;
    const y = Math.sin(angle) * spiralRadius;
    const z = (index / total) * radius * 1.5 - radius/2;
    
    return { x, y, z };
  };
  
  // Show all skills if no category is selected, otherwise filter by category
  const visibleSkills = activeCategory 
    ? skills.filter(skill => {
        const category = categories.find(c => c.name === activeCategory);
        return category?.skills.some(s => s.name === skill.name);
      })
    : skills;
  
  // Get color for a skill's category
  const getSkillColor = (skillName: string) => {
    const skill = skills.find(s => s.name === skillName);
    if (!skill) return "from-gray-500 to-gray-600";
    
    const category = categories.find(c => 
      c.skills.some(s => s.name === skillName)
    );
    
    return category?.color || "from-gray-500 to-gray-600";
  };
  
  // Calculate skill size based on level
  const getSkillSize = (level: number) => {
    return 0.7 + level * 0.05; // Scale based on level
  };
  
  // Get category for a skill
  const getSkillCategory = (skillName: string) => {
    const category = categories.find(c => 
      c.skills.some(s => s.name === skillName)
    );
    return category?.name || "";
  };
  
  return (
    <section className="py-24 relative overflow-hidden bg-sjsu-blue">
      <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      
      {/* Accent lights */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-sjsu-gold/20 blur-3xl opacity-30"
        animate={{ x: [0, 10, 0], y: [0, 15, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-sjsu-rolloverBlue/20 blur-3xl opacity-30"
        animate={{ x: [0, -10, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-sjsu-rolloverBlue/20 text-white rounded-full text-sm font-medium inline-block">
            Interactive Skills
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-2 text-white">Skills Universe</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Explore my technical expertise by category or individual skills. Hover over skills to see details.
          </p>
        </motion.div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null 
                ? 'bg-white text-sjsu-blue' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            All Skills
          </motion.button>
          
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.name 
                  ? 'bg-gradient-to-r ' + category.color + ' text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* Skill details card - shown when hovering */}
        {hoveredSkill && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20 z-20 text-left"
            style={{ maxWidth: '280px' }}
          >
            <h3 className="text-xl font-bold text-white">{hoveredSkill.name}</h3>
            <div className="flex items-center mt-1">
              <div className={`h-2 rounded-full w-full bg-white/20`}>
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(hoveredSkill.name)}`}
                  style={{ width: `${hoveredSkill.level * 10}%` }}
                />
              </div>
              <span className="ml-2 text-white font-medium">{hoveredSkill.level}/10</span>
            </div>
            <p className="text-white/70 text-sm mt-2">
              Category: {getSkillCategory(hoveredSkill.name)}
            </p>
          </motion.div>
        )}
        
        {/* 3D Skills Universe */}
        <div 
          ref={containerRef}
          className="h-[500px] relative perspective-[1000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="w-full h-full relative origin-center"
            style={{ 
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d"
            }}
          >
            {visibleSkills.map((skill, index) => {
              const position = calculatePosition(index, visibleSkills.length, 250);
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: { delay: index * 0.05 }
                  }}
                  className="absolute left-1/2 top-1/2"
                  style={{ 
                    x: position.x, 
                    y: position.y, 
                    z: position.z,
                    translateX: "-50%",
                    translateY: "-50%",
                    transformStyle: "preserve-3d",
                    zIndex: Math.floor(skill.level + position.z)
                  }}
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div 
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.name)} text-white font-medium whitespace-nowrap shadow-lg cursor-pointer`}
                    style={{ 
                      transform: `scale(${getSkillSize(skill.level)})`,
                      opacity: 0.7 + skill.level * 0.03,
                      pointerEvents: 'auto'
                    }}
                  >
                    {skill.name}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Skill level legend */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 inline-flex items-center gap-4">
            <span className="text-white text-sm">Skill Level:</span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <span className="text-white/70 text-xs">Beginner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white/50"></div>
              <span className="text-white/80 text-xs">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/70"></div>
              <span className="text-white text-xs">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
