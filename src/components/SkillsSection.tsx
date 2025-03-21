import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  DatabaseIcon, 
  ServerIcon, 
  BrainIcon, 
  CodeIcon,
  BarChartIcon,
  TableIcon
} from "lucide-react";
import { motion } from "framer-motion";

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

function SkillCard({ skill, index }: { skill: typeof skills[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "bg-white rounded-xl overflow-hidden elevation-2 card-3d-effect",
        "transition-all duration-300",
        isHovered ? "transform scale-[1.02]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="p-6 card-3d-content">
        <div className="flex items-center mb-4">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center mr-3 transition-all duration-500",
            isHovered ? "bg-material-primary text-white" : "bg-material-primary/10 text-material-primary"
          )}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium">{skill.category}</h3>
        </div>
        
        <p className="text-muted-foreground mb-5 text-balance">
          {skill.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, i) => (
            <motion.span 
              key={i} 
              className={cn(
                "inline-block text-xs py-1.5 px-3 rounded-full transition-all duration-300",
                isHovered 
                  ? "bg-material-primary text-white" 
                  : "bg-material-background text-foreground border border-material-primary/20",
                "hover:elevation-1"
              )}
              whileHover={{ y: -2, x: 0 }}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
      
      {isHovered && (
        <div className="h-1 bg-gradient-to-r from-material-primary via-material-secondary to-material-tertiary w-full"></div>
      )}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="py-20 md:py-32 bg-material-background relative overflow-hidden"
    >
      <motion.div 
        className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-material-primary/10 blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-material-secondary/10 blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block mb-3">
            <motion.span 
              className="text-sm font-medium bg-gradient-to-r from-material-primary to-material-secondary bg-clip-text text-transparent"
              whileInView={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              My Expertise
            </motion.span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-material-primary to-material-secondary bg-clip-text text-transparent">
            Technical Skills & Specializations
          </h2>
          <p className="text-muted-foreground text-lg">
            I specialize in data engineering, machine learning, and building scalable data solutions that solve complex business problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
