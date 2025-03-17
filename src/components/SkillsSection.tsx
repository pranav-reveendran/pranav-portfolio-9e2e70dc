
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  DatabaseIcon, 
  NetworkIcon, 
  BrainIcon, 
  ServerIcon, 
  CodeIcon 
} from "lucide-react";

const skills = [
  {
    category: "Data Engineering",
    icon: DatabaseIcon,
    description: "Building robust pipelines and infrastructure for handling large-scale data workflows.",
    items: ["ETL/ELT", "Data Warehousing", "Apache Spark", "Kafka", "Airflow", "Streaming", "Data Modeling"]
  },
  {
    category: "Distributed Systems",
    icon: NetworkIcon,
    description: "Designing scalable and resilient distributed architectures that process data efficiently.",
    items: ["Kubernetes", "Docker", "Microservices", "Consensus Protocols", "Scheduling", "Load Balancing", "Fault Tolerance"]
  },
  {
    category: "Machine Learning",
    icon: BrainIcon,
    description: "Developing models that extract meaningful patterns and predictions from complex datasets.",
    items: ["Supervised/Unsupervised Learning", "Deep Learning", "NLP", "Feature Engineering", "Model Deployment", "MLOps", "Time Series"]
  },
  {
    category: "AI Systems",
    icon: BrainIcon,
    description: "Creating intelligent systems that can reason, learn, and automate complex tasks.",
    items: ["LLMs", "Reinforcement Learning", "Computer Vision", "Neural Networks", "Transformers", "Generative AI", "Embeddings"]
  },
  {
    category: "Cloud & Infrastructure",
    icon: ServerIcon,
    description: "Leveraging cloud services to build scalable, efficient, and cost-effective solutions.",
    items: ["AWS", "GCP", "Azure", "Terraform", "CI/CD", "Monitoring", "Security", "Performance Optimization"]
  },
  {
    category: "Software Engineering",
    icon: CodeIcon,
    description: "Building reliable, maintainable, and efficient code with best practices.",
    items: ["Python", "Java", "Scala", "SQL", "API Design", "System Design", "Testing", "Documentation"]
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
            I specialize in building scalable data systems and machine learning applications that solve complex business problems.
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
