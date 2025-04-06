
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  DatabaseIcon, 
  ServerIcon, 
  BrainIcon, 
  CodeIcon,
  TableIcon,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const skills = [
  {
    category: "Data Engineering",
    icon: DatabaseIcon,
    description: "Building robust ETL/ELT pipelines and data workflows for processing large-scale data.",
    items: ["ETL/ELT Pipeline Development", "Data Integration", "Query Optimization", "Data Modeling", "Apache Airflow", "AWS Lambda", "SQL"]
  },
  {
    category: "Data Warehousing",
    icon: ServerIcon,
    description: "Designing optimized data warehouses with efficient schema designs for analytics and reporting.",
    items: ["Star/Snowflake Schema Design", "Dimensional Modeling", "Data Assets Management", "AWS S3", "Snowflake", "AWS Redshift"]
  },
  {
    category: "Machine Learning",
    icon: BrainIcon,
    description: "Developing predictive models and implementing ML pipelines for business insights.",
    items: ["Feature Engineering", "Predictive Analytics", "Data Preprocessing", "scikit-learn", "Random Forest", "Gradient Boosting", "K-means Clustering"]
  },
  {
    category: "Data Governance",
    icon: TableIcon,
    description: "Implementing data quality, lineage tracking, and security controls for trusted data management.",
    items: ["Data Quality", "Data Lineage", "Metadata Management", "Data Security", "Git Version Control", "Documentation"]
  },
  {
    category: "Cloud Technologies",
    icon: ServerIcon,
    description: "Leveraging cloud services to build scalable, efficient, and cost-effective data solutions.",
    items: ["AWS S3", "AWS Lambda", "AWS Aurora", "Snowflake", "Serverless Architecture", "Infrastructure Cost Optimization"]
  },
  {
    category: "Programming",
    icon: CodeIcon,
    description: "Writing efficient code in multiple languages for data processing and automation.",
    items: ["Python (Advanced)", "SQL (Advanced)", "Git (Proficient)", "Java (Intermediate)", "Tableau", "Docker", "Kubernetes"]
  }
];

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Get the current active skill icon component
  const ActiveSkillIcon = skills[activeSkill].icon;

  return (
    <section 
      id="expertise" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#0f1e30]" // Updated background color
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-sjsu-blue/5 to-transparent pointer-events-none"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" className="opacity-10">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle cx="25" cy="25" r="1" fill="currentColor" className="text-sjsu-blue"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <span className="px-4 py-2 bg-sjsu-blue/10 text-sjsu-blue rounded-full text-sm font-medium mb-3">
            Professional Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-sjsu-blue">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sjsu-gold to-sjsu-blue rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="sticky top-24 space-y-1">
              {skills.map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveSkill(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      activeSkill === index 
                        ? "bg-white shadow-dreamy font-medium text-sjsu-darkGray" 
                        : "hover:bg-white/50 text-muted-foreground"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      activeSkill === index 
                        ? "bg-gradient-to-br from-sjsu-blue to-sjsu-rolloverBlue text-white" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      <SkillIcon size={18} />
                    </div>
                    <span>{skill.category}</span>
                    {activeSkill === index && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto text-sjsu-blue"
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
          
          {/* Right side details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-9"
          >
            <div className="glassmorphism rounded-2xl p-8">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Icon and category */}
                <motion.div 
                  key={`icon-${activeSkill}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-sjsu-blue to-sjsu-rolloverBlue text-white">
                    <ActiveSkillIcon size={32} />
                  </div>
                </motion.div>
                
                {/* Description */}
                <div>
                  <motion.h3 
                    key={`title-${activeSkill}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold mb-3 text-sjsu-darkGray"
                  >
                    {skills[activeSkill].category}
                  </motion.h3>
                  <motion.p 
                    key={`desc-${activeSkill}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground"
                  >
                    {skills[activeSkill].description}
                  </motion.p>
                </div>
              </div>
              
              {/* Skills list */}
              <motion.div
                key={`skills-${activeSkill}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {skills[activeSkill].items.map((item, i) => (
                  <motion.div 
                    key={`${item}-${i}`}
                    variants={itemVariants}
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-sjsu-blue/5 transition-colors"
                  >
                    <CheckCircle size={16} className="text-sjsu-blue flex-shrink-0" />
                    <span className="text-sjsu-darkGray">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Skill level visualization */}
              <motion.div 
                key={`progress-${activeSkill}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-6 border-t border-sjsu-lightGray/50"
              >
                <div className="text-sm font-medium mb-2 text-sjsu-darkGray">Proficiency</div>
                <div className="h-2 w-full bg-sjsu-lightGray/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${80 + Math.random() * 20}%` }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-sjsu-blue to-sjsu-gold rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
