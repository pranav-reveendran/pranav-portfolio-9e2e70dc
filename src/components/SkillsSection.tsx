
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
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const Icon = skill.icon;
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-card border border-border rounded-lg overflow-hidden transition-all",
        "hover:shadow-md hover:border-primary/20 group",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        "transition-all duration-700 ease-out",
        isHovered ? "transform scale-105" : ""
      )}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={cn(
            "w-10 h-10 rounded-md flex items-center justify-center mr-3 transition-all duration-500",
            isHovered ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
          )}>
            <Icon className={cn(
              "w-5 h-5 transition-all duration-500",
              isHovered ? "animate-pulse" : ""
            )} />
          </div>
          <h3 className="text-lg font-medium">{skill.category}</h3>
        </div>
        
        <p className="text-muted-foreground mb-5 text-balance">
          {skill.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, i) => (
            <span 
              key={i} 
              className={cn(
                "inline-block text-xs py-1 px-3 rounded-full transition-all duration-300",
                isHovered 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-accent text-accent-foreground",
                isHovered && "transform translate-y-[-2px]"
              )}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
      {isHovered && (
        <div className="data-flow-line w-full h-[1px] mt-auto">
          <div className="data-flow"></div>
        </div>
      )}
    </div>
  );
}

export function SkillsSection() {
  const [skillsToShow, setSkillsToShow] = useState<typeof skills>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Show skills with a staggered effect
    const timer = setTimeout(() => {
      const showInterval = setInterval(() => {
        setSkillsToShow(prev => {
          if (prev.length >= skills.length) {
            clearInterval(showInterval);
            return prev;
          }
          return [...prev, skills[prev.length]];
        });
      }, 200);
      
      return () => clearInterval(showInterval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background/90 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16 relative">
          <div className="inline-block mb-3">
            <span className="text-sm text-primary font-medium animate-pulse">My Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 animate-fade-in">
            Technical Skills & Specializations
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-delayed">
            I specialize in data engineering, machine learning, and building scalable data solutions that solve complex business problems.
          </p>
          
          {/* Animated decorative elements */}
          <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsToShow.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
