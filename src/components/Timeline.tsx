
import { motion } from "framer-motion";
import { CircleIcon, Code2Icon, DatabaseIcon, RocketIcon, ServerIcon } from "lucide-react";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  icon: "database" | "code" | "server" | "rocket" | "circle";
  category: "education" | "work" | "achievement";
};

export function Timeline() {
  const events: TimelineEvent[] = [
    {
      year: "2025",
      title: "Masters in Data Science",
      description: "Expected graduation from San Jose State University with specialization in Machine Learning.",
      icon: "rocket",
      category: "education"
    },
    {
      year: "2024",
      title: "AWS Certified Data Engineer",
      description: "Earned professional certification in designing and implementing data solutions on AWS.",
      icon: "database",
      category: "achievement"
    },
    {
      year: "2023",
      title: "Lead Data Engineer",
      description: "Led a team of data engineers to build scalable data pipelines for a Fortune 500 company.",
      icon: "server",
      category: "work"
    },
    {
      year: "2020",
      title: "B.E. in Computer Science",
      description: "Graduated with honors from Christ University with focus on databases and algorithms.",
      icon: "code",
      category: "education"
    }
  ];

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case "database": return <DatabaseIcon className="h-6 w-6" />;
      case "code": return <Code2Icon className="h-6 w-6" />;
      case "server": return <ServerIcon className="h-6 w-6" />;
      case "rocket": return <RocketIcon className="h-6 w-6" />;
      default: return <CircleIcon className="h-6 w-6" />;
    }
  };

  return (
    <div 
      id="career" 
      className="relative py-16 bg-[#0e1525]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1525]/30 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-[#0077CC]/10 text-[#4d9de0] rounded-full text-sm font-medium">
            My Journey
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-2 text-white">Career Highlights</h2>
          <p className="text-[#a2adc9] max-w-xl mx-auto">
            A timeline of my professional and educational milestones in data engineering
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#4d9de0] via-[#4d9de0] to-[#4d9de0] opacity-30"></div>
          
          <div className="relative">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-[#071426]/80 backdrop-blur-sm p-6 rounded-xl shadow-dreamy border border-[#1e3756]"
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      event.category === 'education' ? 'bg-[#4d9de0]/10 text-[#4d9de0]' :
                      event.category === 'work' ? 'bg-[#ffb347]/10 text-[#ffb347]' :
                      'bg-[#a2adc9]/10 text-[#a2adc9]'
                    }`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <p className="text-[#becde0] mt-2">{event.description}</p>
                  </motion.div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full w-12 h-12 bg-gradient-to-br from-[#4d9de0] to-[#ffb347] flex items-center justify-center shadow-lg text-[#0e1525]"
                  >
                    {getIcon(event.icon)}
                  </motion.div>
                  <div className="mt-2 bg-[#071426] backdrop-blur-sm py-1 px-3 rounded-full text-sm font-bold text-white shadow-sm">
                    {event.year}
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
