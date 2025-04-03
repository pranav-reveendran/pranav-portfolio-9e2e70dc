
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GithubIcon, ChevronRightIcon, ThumbsUpIcon, EyeIcon, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Predictive Analytics for Employee Attrition",
    description: "Built an ETL pipeline to process HR data with data cleaning and feature engineering, implementing Random Forest and Gradient Boosting models that achieved 91% accuracy in predicting employee attrition.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    tags: ["Python", "scikit-learn", "SQL", "Tableau", "Random Forest", "Gradient Boosting", "K-means Clustering"],
    links: {
      demo: "#",
      github: "#"
    },
    metrics: {
      accuracy: "91%",
      dataProcessed: "50K+ records",
      featureCount: "24 features"
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
    },
    metrics: {
      querySpeed: "40% faster",
      dataVolume: "5+ years",
      tables: "12 optimized tables"
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
    },
    metrics: {
      accuracy: "95%",
      timeReduction: "40%",
      regulations: "10,000+"
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
    },
    metrics: {
      services: "7 microservices",
      scaling: "Auto-scaling",
      throughput: "1000+ orders/min"
    }
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20",
        "transition-all duration-500",
        isHovered ? "transform-gpu scale-[1.02] shadow-xl" : "shadow-lg"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-sjsu-blue/90 via-sjsu-blue/40 to-transparent",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-80"
        )}></div>
      </div>
      
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-white/80 mb-4 text-balance">
          {project.description}
        </p>
        
        {/* Project metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5 bg-white/5 rounded-lg p-3">
          {Object.entries(project.metrics).map(([key, value], i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-sjsu-gold font-bold text-lg">{value}</span>
              <span className="text-white/60 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
            </div>
          ))}
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 4).map((tag, i) => (
            <motion.span 
              key={i} 
              className="inline-block text-xs py-1.5 px-3 rounded-full bg-sjsu-rolloverBlue/20 text-white border border-sjsu-rolloverBlue/30"
              whileHover={{ y: -3, x: 0 }}
            >
              {tag}
            </motion.span>
          ))}
          {project.tags.length > 4 && (
            <span className="inline-block text-xs py-1.5 px-3 rounded-full bg-sjsu-gold/20 text-white border border-sjsu-gold/30">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-4">
          <motion.a 
            href={project.links.demo} 
            className="inline-flex items-center space-x-1 text-sm font-medium text-white bg-sjsu-rolloverBlue/80 hover:bg-sjsu-rolloverBlue px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <EyeIcon className="w-4 h-4 mr-1" />
            <span>Live Demo</span>
          </motion.a>
          <motion.a 
            href={project.links.github} 
            className="inline-flex items-center space-x-1 text-sm font-medium text-white border border-sjsu-gold/70 hover:bg-sjsu-gold/20 px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon className="w-4 h-4 mr-1" />
            <span>Source Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="py-20 md:py-32 bg-sjsu-blue relative overflow-hidden">
      {/* Background effects */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-sjsu-gold/10 blur-3xl"
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
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block mb-3">
            <motion.span 
              className="text-sm font-medium px-4 py-2 bg-sjsu-rolloverBlue/20 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio Showcase
            </motion.span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-white/80 text-lg">
            A collection of my most significant projects in data engineering, machine learning, and data analytics.
          </p>
        </motion.div>
        
        {/* Interactive project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* "View All" button with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <motion.a
            href="#" 
            className="inline-flex items-center space-x-2 text-white bg-sjsu-gold/30 hover:bg-sjsu-gold/50 transition-colors font-medium text-lg px-8 py-3 rounded-full group border border-sjsu-gold/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
