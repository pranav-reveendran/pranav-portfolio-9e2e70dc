
import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Award, ArrowRight } from "lucide-react";

const educations = [
  {
    school: "San José State University",
    logo: "San José State University logo",
    degree: "Master's degree, Applied Data Science",
    date: "Jan 2024 - Dec 2026",
    skills: ["PySpark", "Airflow", "AWS", "Data Engineering", "SQL", "Tableau", "Data Models", "Data Warehousing", "Hadoop", "PL/SQL", "Azure Databricks", "Apache Kafka", "Dbt", "Python", "Spark"],
    description: "",
  },
  {
    school: "Christ University, Bangalore",
    logo: "Christ University, Bangalore logo",
    degree: "Bachelor of Technology, Computer Science",
    date: "Jan 2017 - Mar 2021",
    skills: ["Data Models"],
    description: "",
  },
  {
    school: "The Chartered Institute of Management Accountants",
    logo: "",
    degree: "Cert BA, Accounting and Business/Management",
    date: "Oct 2017 - Jan 2018",
    skills: [],
    description: "• In-depth understanding of management accounting principles and practices, enabling you to provide valuable insights for effective decision-making.\n• Ability to analyze financial data and identify cost-saving opportunities, allowing you to manage resources and manpower efficiently, leading to improved operational efficiency.\n• Strong grasp of budgeting and forecasting techniques, enabling you to develop accurate financial plans and projections for your organization.\n• Proficiency in utilizing accounting software and tools, streamlining processes and improving accuracy in financial reporting and analysis.\n• Expertise in performance measurement and key performance indicators (KPIs), enabling you to assess and monitor the financial performance of projects, departments, or the organization as a whole.",
  },
  {
    school: "Excel Public School Mahe",
    logo: "",
    degree: "Pre University, Computer Science",
    date: "2014 - 2016",
    skills: [],
    description: "Grade: 93.94\nActivities and societies: - Cultural Captain\n- Best Outgoing Student - Computer Science Puducherry State 2016",
  },
];

export const EducationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="education" className="w-full py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-theme-teal/5 to-background/20 z-0"></div>
      
      {/* Floating elements for interactive background */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-theme-teal/10 backdrop-blur-3xl"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-16"
        >
          <span className="px-4 py-2 bg-theme-teal/10 text-theme-teal rounded-full text-sm font-medium mb-3">
            Educational Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Academic <span className="text-theme-teal">Background</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-theme-teal to-theme-purple rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side - Timeline navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="sticky top-24 space-y-4">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <GraduationCap className="mr-2 text-theme-teal" />
                Timeline
              </h3>
              
              <div className="flex flex-col space-y-2">
                {educations.map((education, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative pl-8 py-4 text-left rounded-lg transition-all duration-300 ${
                      activeIndex === index 
                        ? "bg-white shadow-dreamy text-theme-dark font-medium" 
                        : "hover:bg-white/50"
                    }`}
                  >
                    <div 
                      className={`absolute left-0 top-0 bottom-0 w-1 my-4 rounded-r-full transition-all duration-300 ${
                        activeIndex === index ? "bg-theme-teal h-[calc(100%-2rem)]" : "bg-gray-200 h-[calc(70%-1rem)] my-6"
                      }`}
                    ></div>
                    <div className="text-sm text-muted-foreground mb-1">{education.date}</div>
                    <div className="font-medium">{education.school}</div>
                    
                    {activeIndex === index && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-theme-teal"
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Education details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="glassmorphism rounded-2xl p-8 h-full">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <motion.h3 
                    key={`title-${activeIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold"
                  >
                    {educations[activeIndex].school}
                  </motion.h3>
                  <motion.div 
                    key={`degree-${activeIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg flex items-center gap-2 mt-2"
                  >
                    <GraduationCap className="text-theme-teal" size={18} />
                    <span>{educations[activeIndex].degree}</span>
                  </motion.div>
                </div>
                <motion.div 
                  key={`date-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="px-4 py-2 bg-theme-teal/10 text-theme-teal rounded-full text-sm flex items-center whitespace-nowrap"
                >
                  <Calendar className="mr-2" size={14} />
                  {educations[activeIndex].date}
                </motion.div>
              </div>
              
              {educations[activeIndex].description && (
                <motion.div 
                  key={`desc-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 prose prose-slate max-w-none"
                >
                  <h4 className="text-lg font-semibold flex items-center mb-3">
                    <BookOpen className="mr-2 text-theme-purple" size={18} />
                    Details
                  </h4>
                  <div className="text-muted-foreground whitespace-pre-line">
                    {educations[activeIndex].description}
                  </div>
                </motion.div>
              )}
              
              {educations[activeIndex].skills.length > 0 && (
                <motion.div 
                  key={`skills-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <h4 className="text-lg font-semibold flex items-center mb-4">
                    <Award className="mr-2 text-theme-pink" size={18} />
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {educations[activeIndex].skills.map((skill, i) => (
                      <motion.span 
                        key={`${skill}-${i}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (i * 0.05) }}
                        className="px-3 py-1.5 bg-gradient-to-r from-theme-teal/20 to-theme-blue/20 hover:from-theme-teal/30 hover:to-theme-blue/30 rounded-full text-xs font-medium backdrop-blur-sm hover:scale-105 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
