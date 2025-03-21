
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GithubIcon, ChevronRightIcon } from "lucide-react";
import { motion } from "framer-motion";

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

// Apple-style terminal component
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-[#1d1d1f] rounded-xl p-5 font-mono text-sm text-green-400 overflow-hidden elevation-3"
    >
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-gray-400">data-wizard ~ terminal</span>
      </div>
      <div className="terminal-prompt font-medium text-white">{command}</div>
      <div className="mt-2">
        {displayedOutput.map((line, i) => (
          <div key={i} className="py-0.5">{line}</div>
        ))}
        {isTyping && <span className="inline-block w-2 h-4 ml-1 bg-green-400 animate-pulse"></span>}
      </div>
    </motion.div>
  );
};

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-xl overflow-hidden bg-white elevation-2",
        "transition-all duration-500",
        isHovered ? "elevation-4 transform-gpu scale-[1.02]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          loading="lazy"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",
          "transition-opacity duration-300",
          "opacity-0 group-hover:opacity-100"
        )}></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-balance">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 4).map((tag, i) => (
            <motion.span 
              key={i} 
              className="inline-block text-xs py-1.5 px-3 rounded-full bg-material-background text-material-primary border border-material-primary/20"
              whileHover={{ y: -3, x: 0 }}
            >
              {tag}
            </motion.span>
          ))}
          {project.tags.length > 4 && (
            <span className="inline-block text-xs py-1.5 px-3 rounded-full bg-material-primary/10 text-material-primary">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
        
        <div className="flex space-x-4">
          <motion.a 
            href={project.links.demo} 
            className="inline-flex items-center space-x-1 text-sm font-medium text-white bg-material-primary px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Live Demo</span>
            <ExternalLinkIcon className="w-4 h-4 ml-1" />
          </motion.a>
          <motion.a 
            href={project.links.github} 
            className="inline-flex items-center space-x-1 text-sm font-medium text-material-primary border border-material-primary px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(66, 133, 244, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Source Code</span>
            <GithubIcon className="w-4 h-4 ml-1" />
          </motion.a>
        </div>
      </div>
    </motion.div>
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
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-white to-material-background/30 relative overflow-hidden">
      {/* Apple-style background blur */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-material-tertiary/10 blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
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
              className="text-sm font-medium bg-gradient-to-r from-material-primary to-material-tertiary bg-clip-text text-transparent"
              whileInView={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Showcasing My Work
            </motion.span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-material-primary to-material-tertiary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A collection of my most significant projects in data engineering, machine learning, and data analytics.
          </p>
        </motion.div>
        
        {/* Terminal UI demo before projects */}
        <div className="mb-16 max-w-3xl mx-auto">
          <Terminal command={terminalCommand} output={terminalOutput} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <motion.a
            href="#" 
            className="inline-flex items-center space-x-2 text-material-primary hover:text-material-primary/80 transition-colors font-medium text-lg group px-8 py-2"
            whileHover={{ x: 5 }}
          >
            <span>View All Projects</span>
            <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
