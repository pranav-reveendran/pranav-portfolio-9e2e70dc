
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

const projects = [
  {
    title: "Predictive Analytics for Employee Attrition",
    description: "Built an ETL pipeline to process HR data with data cleaning and feature engineering, implementing Random Forest and Gradient Boosting models that achieved 91% accuracy in predicting employee attrition.",
    image: "photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "scikit-learn", "SQL", "Tableau", "Random Forest", "Gradient Boosting", "K-means Clustering"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Citibike Data Pipeline & Analytics",
    description: "Designed an end-to-end ETL pipeline processing 5+ years of Citibike rideshare data with weather and traffic patterns, implementing Snowflake data warehouse with optimized schema design reducing query execution by 40%.",
    image: "photo-1518770660439-4636190af475",
    tags: ["Python", "Airflow", "Snowflake", "SQL", "Predictive Models"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "TaxAssist Bot Agent",
    description: "Developed an ETL pipeline processing 10,000+ tax regulations into vector embeddings with LangChain and Pinecone, implementing data validation with 95% accuracy that reduced tax research time by 40%.",
    image: "photo-1461749280684-dccba630e2f6",
    tags: ["Python", "LangChain", "Pinecone", "AWS Lambda", "Vector Embeddings"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Food Delivery Platform (UberEats Clone)",
    description: "Built a full-stack application with React/Redux frontend and Node.js microservices architecture, containerized with Docker and Kubernetes for scalability and using Kafka for asynchronous order processing.",
    image: "photo-1526374965328-7f61d4dc18c5",
    tags: ["React", "Redux", "Node.js", "Docker", "Kubernetes", "Kafka", "AWS Aurora"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
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
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "group relative rounded-lg overflow-hidden bg-card border border-border",
        "transition-all duration-500 hover:shadow-lg hover:border-primary/20",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={`https://source.unsplash.com/${project.image}`} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-balance">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span 
              key={i} 
              className="inline-block text-xs py-1 px-2 bg-accent text-accent-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="inline-block text-xs py-1 px-2 bg-primary/10 text-primary rounded-full">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={project.links.demo} 
            className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
          <a 
            href={project.links.github} 
            className="inline-flex items-center space-x-1 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
          >
            <span>Source Code</span>
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 opacity-70"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-3">
            <span className="text-sm text-primary font-medium">Showcasing My Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A collection of my most significant projects in data engineering, machine learning, and data analytics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="#" 
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>View All Projects</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
