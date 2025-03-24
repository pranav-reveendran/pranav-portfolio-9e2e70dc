
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

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
  return (
    <section id="education" className="w-full py-24 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
          Education
        </h2>
        
        <div className="space-y-8">
          {educations.map((education, index) => (
            <div key={index} 
                 className="card-3d-effect group hover:transform hover:scale-[1.01] transition-all duration-300">
              <Card className="card-3d-content overflow-hidden border border-muted/20 shadow-md bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold">{education.school}</CardTitle>
                      <CardDescription className="text-lg font-medium flex items-center gap-1 mt-1">
                        <GraduationCap className="h-4 w-4" />
                        {education.degree}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{education.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-1">
                  {education.description && (
                    <div className="mt-2 text-sm text-foreground/90 whitespace-pre-line">
                      {education.description}
                    </div>
                  )}
                  {education.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {education.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
