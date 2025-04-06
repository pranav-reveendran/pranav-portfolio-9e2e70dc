
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Code, Database, Server, Globe, Cpu, Cloud, BarChart, Lock, Zap } from 'lucide-react';

type SkillNode = {
  name: string;
  category: string;
  level: number; // 1-10
  description: string;
};

type CategoryData = {
  name: string;
  color: string;
  icon: React.ReactNode;
  skills: SkillNode[];
};

export function SkillCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);
  const [view, setView] = useState<'sphere' | 'grid'>('sphere');
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const perspective = 1000;
  
  // Group skills by category with descriptions
  const categories: CategoryData[] = [
    {
      name: "Programming",
      color: "from-blue-500 to-blue-600",
      icon: <Code size={20} />,
      skills: [
        { name: "Python", category: "Programming", level: 9, description: "Advanced data processing, ETL pipelines, and machine learning" },
        { name: "SQL", category: "Programming", level: 10, description: "Complex queries, optimization, and database design" },
        { name: "Java", category: "Programming", level: 6, description: "Enterprise application development and microservices" },
        { name: "JavaScript", category: "Programming", level: 7, description: "Web application development and interactive visualizations" },
      ]
    },
    {
      name: "Cloud",
      color: "from-purple-500 to-purple-600",
      icon: <Cloud size={20} />,
      skills: [
        { name: "AWS", category: "Cloud", level: 8, description: "S3, Lambda, EC2, RDS, Redshift, and CloudFormation" },
        { name: "Azure", category: "Cloud", level: 7, description: "Azure Data Factory, Databricks, and SQL Database" },
        { name: "GCP", category: "Cloud", level: 6, description: "BigQuery, Cloud Storage, and Dataflow" },
      ]
    },
    {
      name: "Data Storage",
      color: "from-yellow-500 to-yellow-600",
      icon: <Database size={20} />,
      skills: [
        { name: "Snowflake", category: "Data Storage", level: 8, description: "Data warehousing, optimization, and virtual warehouses" },
        { name: "Redshift", category: "Data Storage", level: 7, description: "Columnar storage and query performance tuning" },
        { name: "MongoDB", category: "Data Storage", level: 6, description: "Document databases and NoSQL data modeling" },
        { name: "PostgreSQL", category: "Data Storage", level: 8, description: "Relational database design and administration" },
      ]
    },
    {
      name: "Data Pipeline",
      color: "from-red-500 to-red-600",
      icon: <Zap size={20} />,
      skills: [
        { name: "Airflow", category: "Data Pipeline", level: 9, description: "Workflow orchestration and scheduling" },
        { name: "ETL/ELT", category: "Data Pipeline", level: 10, description: "Data extraction, transformation, and loading processes" },
        { name: "dbt", category: "Data Pipeline", level: 8, description: "Data transformation and testing frameworks" },
        { name: "Prefect", category: "Data Pipeline", level: 7, description: "Modern workflow automation and observability" },
      ]
    },
    {
      name: "Big Data",
      color: "from-orange-500 to-orange-600",
      icon: <Server size={20} />,
      skills: [
        { name: "Spark", category: "Big Data", level: 7, description: "Distributed data processing and analytics" },
        { name: "Kafka", category: "Big Data", level: 6, description: "Real-time data streaming and event processing" },
        { name: "Hadoop", category: "Big Data", level: 6, description: "Distributed storage and MapReduce processing" },
        { name: "Hive", category: "Big Data", level: 7, description: "Data warehouse infrastructure and SQL-like queries" },
      ]
    },
    {
      name: "DevOps",
      color: "from-teal-500 to-teal-600",
      icon: <Cpu size={20} />,
      skills: [
        { name: "Docker", category: "DevOps", level: 7, description: "Containerization and deployment" },
        { name: "Kubernetes", category: "DevOps", level: 6, description: "Container orchestration and scaling" },
        { name: "CI/CD", category: "DevOps", level: 7, description: "Automated testing and deployment pipelines" },
        { name: "Git", category: "DevOps", level: 9, description: "Version control and collaborative development" },
      ]
    },
    {
      name: "ML & AI",
      color: "from-pink-500 to-pink-600",
      icon: <Cpu size={20} />,
      skills: [
        { name: "TensorFlow", category: "ML & AI", level: 7, description: "Deep learning and neural networks" },
        { name: "PyTorch", category: "ML & AI", level: 6, description: "Machine learning research and development" },
        { name: "scikit-learn", category: "ML & AI", level: 8, description: "Statistical modeling and prediction" },
        { name: "NLP", category: "ML & AI", level: 7, description: "Text processing and language modeling" },
      ]
    },
    {
      name: "Visualization",
      color: "from-indigo-500 to-indigo-600",
      icon: <BarChart size={20} />,
      skills: [
        { name: "Tableau", category: "Visualization", level: 8, description: "Business intelligence and interactive dashboards" },
        { name: "Power BI", category: "Visualization", level: 7, description: "Data visualization and reporting" },
        { name: "D3.js", category: "Visualization", level: 6, description: "Custom web-based visualizations" },
        { name: "Plotly", category: "Visualization", level: 7, description: "Interactive charts and data exploration" },
      ]
    },
    {
      name: "Data Governance",
      color: "from-cyan-500 to-cyan-600",
      icon: <Lock size={20} />,
      skills: [
        { name: "Data Quality", category: "Data Governance", level: 8, description: "Data validation and quality assurance" },
        { name: "Data Lineage", category: "Data Governance", level: 7, description: "Tracking data origins and transformations" },
        { name: "Metadata Management", category: "Data Governance", level: 7, description: "Data cataloging and discovery" },
      ]
    },
    {
      name: "Web",
      color: "from-emerald-500 to-emerald-600",
      icon: <Globe size={20} />,
      skills: [
        { name: "REST APIs", category: "Web", level: 7, description: "API design and implementation" },
        { name: "GraphQL", category: "Web", level: 6, description: "Query language for APIs" },
        { name: "React", category: "Web", level: 7, description: "Frontend development and component design" },
      ]
    },
  ];
  
  const skills: SkillNode[] = categories.flatMap(category => category.skills);
  
  // 3D rotation effect on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || view !== 'sphere') return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate rotation based on mouse position
    const rotateYValue = ((e.clientX - centerX) / width) * 30; 
    const rotateXValue = ((centerY - e.clientY) / height) * 30;
    
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
    // Fibonacci sphere algorithm for better distribution
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians
    const y = 1 - (index / (total - 1)) * 2; // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y); // radius at y
    
    const theta = phi * index; // Golden angle increment
    
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    
    return { 
      x: x * radius, 
      y: y * radius, 
      z: z * radius 
    };
  };
  
  // Calculate grid positions
  const calculateGridPosition = (index: number, total: number) => {
    const columns = Math.ceil(Math.sqrt(total));
    const rows = Math.ceil(total / columns);
    
    const col = index % columns;
    const row = Math.floor(index / columns);
    
    const cellWidth = 180;
    const cellHeight = 100;
    const gridWidth = columns * cellWidth;
    const gridHeight = rows * cellHeight;
    
    return {
      x: (col * cellWidth) - (gridWidth / 2) + (cellWidth / 2),
      y: (row * cellHeight) - (gridHeight / 2) + (cellHeight / 2),
      z: 0
    };
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

  // Get skill description
  const getSkillDescription = (skillName: string) => {
    const skill = skills.find(s => s.name === skillName);
    return skill?.description || "";
  };
  
  // Animation for skill nodes
  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: i * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hovered: { 
      scale: 1.2,
      zIndex: 10,
      boxShadow: "0px 5px 20px rgba(0,0,0,0.2)"
    }
  };

  // Toggle view between sphere and grid
  const toggleView = () => {
    setView(prev => prev === 'sphere' ? 'grid' : 'sphere');
  };
  
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0f1e30]"></div>
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
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-sjsu-rolloverBlue/20 text-white rounded-full text-sm font-medium inline-block">
            Interactive Skills Universe
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-2 text-white">My Technical Arsenal</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Explore my technical expertise across different domains. Switch between view modes or filter by category.
          </p>
        </motion.div>
        
        {/* View toggle and category filters */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleView}
            className="px-6 py-2.5 rounded-full font-medium transition-all bg-gradient-to-r from-sjsu-blue to-sjsu-rolloverBlue text-white shadow-lg hover:shadow-xl"
          >
            Switch to {view === 'sphere' ? 'Grid' : '3D Sphere'} View
          </motion.button>
          
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null 
                  ? 'bg-white text-[#0f1e30]' 
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeCategory === category.name 
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Skill details card - shown when hovering */}
        <AnimatePresence>
          {hoveredSkill && (
            <motion.div 
              key="skill-card"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="fixed top-1/4 right-8 bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl z-20 text-left"
              style={{ maxWidth: '320px', transformOrigin: 'right top' }}
            >
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${getSkillColor(hoveredSkill.name)} mb-4`}></div>
              <h3 className="text-2xl font-bold text-white">{hoveredSkill.name}</h3>
              <div className="flex items-center mt-2 mb-3">
                <div className={`h-2 rounded-full w-full bg-white/20`}>
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(hoveredSkill.name)}`}
                    style={{ width: `${hoveredSkill.level * 10}%` }}
                  />
                </div>
                <span className="ml-2 text-white font-medium">{hoveredSkill.level}/10</span>
              </div>
              <p className="text-white/70 text-sm mb-2">
                <span className="font-semibold">Category:</span> {getSkillCategory(hoveredSkill.name)}
              </p>
              <p className="text-white/90 text-sm">
                {getSkillDescription(hoveredSkill.name)}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* 3D Skills Universe */}
        <div 
          ref={containerRef}
          className="h-[600px] relative"
          style={{ perspective: `${perspective}px` }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="w-full h-full relative"
            style={{ 
              transformStyle: "preserve-3d",
              rotateX: view === 'sphere' ? rotateX : 0,
              rotateY: view === 'sphere' ? rotateY : 0,
            }}
            animate={view === 'sphere' ? { rotate: [0, 360] } : { rotate: 0 }}
            transition={view === 'sphere' ? { 
              rotate: { duration: 80, ease: "linear", repeat: Infinity },
              rotateX: { duration: 0.5 },
              rotateY: { duration: 0.5 }
            } : {
              rotate: { duration: 0.5 },
              rotateX: { duration: 0.5 },
              rotateY: { duration: 0.5 }
            }}
          >
            {visibleSkills.map((skill, index) => {
              const position = view === 'sphere' 
                ? calculatePosition(index, visibleSkills.length, 230)
                : calculateGridPosition(index, visibleSkills.length);
              
              return (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hovered"
                  className="absolute left-1/2 top-1/2 cursor-pointer"
                  style={{ 
                    x: position.x, 
                    y: position.y, 
                    z: position.z,
                    translateX: "-50%",
                    translateY: "-50%",
                    transformStyle: "preserve-3d",
                    zIndex: Math.floor(skill.level + position.z)
                  }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div 
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.name)} text-white font-medium whitespace-nowrap shadow-lg flex items-center gap-2`}
                    style={{ 
                      transform: `scale(${getSkillSize(skill.level)})`,
                      opacity: 0.7 + skill.level * 0.03,
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse"></div>
                    {skill.name}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Skill level legend */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
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
        </motion.div>
        
        {/* Interactive hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm flex items-center gap-2"
        >
          {view === 'sphere' && (
            <>
              <motion.div 
                animate={{ x: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-5 h-5 border border-white/40 rounded-full flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
              </motion.div>
              <span>Move cursor to rotate the Skills Universe</span>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
