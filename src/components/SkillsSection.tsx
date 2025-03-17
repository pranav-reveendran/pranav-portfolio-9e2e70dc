
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
        "transition-all duration-700 ease-out"
      )}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center text-primary mr-3 transition-all group-hover:bg-primary/20">
            <Icon className="w-5 h-5" />
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
              className="inline-block text-xs py-1 px-3 bg-accent text-accent-foreground rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-3">
            <span className="text-sm text-primary font-medium">My Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Technical Skills & Specializations</h2>
          <p className="text-muted-foreground text-lg">
            I specialize in data engineering, machine learning, and building scalable data solutions that solve complex business problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
