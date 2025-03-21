
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

const projects = [
  {
    title: "Predictive Analytics for Employee Attrition",
    description: "Built an ETL pipeline to process HR data with data cleaning and feature engineering, implementing Random Forest and Gradient Boosting models that achieved 91% accuracy in predicting employee attrition.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    tags: ["Python", "scikit-learn", "SQL", "Tableau", "Random Forest", "Gradient Boosting", "K-means Clustering"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Citibike Data Pipeline & Analytics",
    description: "Designed an end-to-end ETL pipeline processing 5+ years of Citibike rideshare data with weather and traffic patterns, implementing Snowflake data warehouse with optimized schema design reducing query execution by 40%.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000",
    tags: ["Python", "Airflow", "Snowflake", "SQL", "Predictive Models"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "TaxAssist Bot Agent",
    description: "Developed an ETL pipeline processing 10,000+ tax regulations into vector embeddings with LangChain and Pinecone, implementing data validation with 95% accuracy that reduced tax research time by 40%.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000",
    tags: ["Python", "LangChain", "Pinecone", "AWS Lambda", "Vector Embeddings"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Food Delivery Platform (UberEats Clone)",
    description: "Built a full-stack application with React/Redux frontend and Node.js microservices architecture, containerized with Docker and Kubernetes for scalability and using Kafka for asynchronous order processing.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1000",
    tags: ["React", "Redux", "Node.js", "Docker", "Kubernetes", "Kafka", "AWS Aurora"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

// Added new terminal component
const Terminal = ({ command, output }: { command: string, output: string[] }) => {
  const [displayedOutput, setDisplayedOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  
  useEffect(() => {
    if (currentLine < output.length) {
      const timer = setTimeout(() => {
        setDisplayedOutput(prev => [...prev, output[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 100 + Math.random() * 200);
      
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentLine, output]);
  
  return (
    <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-hidden">
      <div className="flex items-center gap-1 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-gray-400">data-wizard ~ terminal</span>
      </div>
      <div className="terminal-prompt">{command}</div>
      <div className="mt-1">
        {displayedOutput.map((line, i) => (
          <div key={i} className="py-0.5">{line}</div>
        ))}
        {isTyping && <span className="inline-block w-2 h-4 ml-1 bg-green-400 animate-pulse"></span>}
      </div>
    </div>
  );
};

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
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
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "group relative rounded-lg overflow-hidden bg-card border border-border",
        "transition-all duration-500 hover:shadow-lg hover:border-primary/20",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        isHovered ? "transform-gpu scale-[1.02]" : ""
      )}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className={cn(
            "w-full h-full object-cover",
            "transition-transform duration-700 ease-out",
            isHovered ? "scale-110" : "scale-100"
          )}
          loading="lazy"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : ""
        )}></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 text-glitch">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-balance">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span 
              key={i} 
              className={cn(
                "inline-block text-xs py-1 px-2 bg-accent text-accent-foreground rounded-full",
                "transition-all duration-300",
                isHovered ? "bg-primary text-primary-foreground" : ""
              )}
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
  const terminalCommand = "python3 run_data_pipeline.py --source=s3://data-lake/raw --target=snowflake";
  const terminalOutput = [
    "INFO: Initializing ETL pipeline...",
    "INFO: Connecting to data sources...",
    "INFO: Starting extraction from S3...",
    "INFO: Extracted 1.2GB of data (3,456,789 records)",
    "INFO: Running transformation jobs...",
    "INFO: Applying schema validation...",
    "INFO: Applying data cleaning routines...",
    "INFO: Transformation complete. Preparing load phase...",
    "INFO: Loading to Snowflake data warehouse...",
    "SUCCESS: ETL pipeline completed in 2m 34s",
    "Statistics:",
    "- Processed: 3,456,789 records",
    "- Validated: 3,455,012 records",
    "- Rejected: 1,777 records",
    "- Output tables: 12",
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
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
        
        {/* Terminal UI demo before projects */}
        <div className="mb-16 max-w-3xl mx-auto">
          <Terminal command={terminalCommand} output={terminalOutput} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="#" 
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium group"
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
