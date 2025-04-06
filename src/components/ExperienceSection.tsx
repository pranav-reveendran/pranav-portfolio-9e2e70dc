
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Graduate Student Assistant Analyst",
    company: "San José State University",
    logo: "San José State University logo",
    type: "Part-time",
    date: "Jan 2025 - Present · 3 mos",
    location: "San Jose, California, United States · On-site",
    skills: ["Data Models", "Data Integration"],
    description: "",
  },
  {
    title: "Vice President of Programs",
    company: "Spartan Analytics",
    logo: "Spartan Analytics logo",
    type: "Full-time",
    date: "Sep 2024 - Present · 7 mos",
    location: "San Jose, California, United States · On-site",
    skills: ["Data Models", "Data Integration"],
    description: "• Spearheaded initiatives to drive data literacy and hands-on analytics skills among students, managing end-to-end program development.\n• Developed and implemented a strategic roadmap to expand Spartan Analytics' impact, focusing on fostering student-industry collaboration.\n• Worked closely with faculty, industry experts, and student teams to design and execute high-impact projects and events.\n• Provided mentorship to students, guiding them in building technical skills in Python, SQL, Tableau, and machine learning.",
  },
  {
    title: "Data Engineer",
    company: "Epsilon",
    logo: "Epsilon logo",
    type: "Full-time",
    date: "Feb 2023 - Nov 2023 · 10 mos",
    location: "Bengaluru, Karnataka, India",
    skills: ["Data Models", "Data Integration"],
    description: "In my role as a Data Engineer at Epsilon, I was responsible for developing and maintaining data pipelines, designing cloud-based big data platforms, and ensuring data quality and governance. I collaborated with data scientists, analysts, and business stakeholders to deliver actionable insights and optimized database structures for high performance.",
  },
  {
    title: "Business Intelligence Developer 2",
    company: "Epsilon",
    logo: "Epsilon logo",
    type: "Full-time",
    date: "Mar 2022 - Feb 2023 · 1 yr",
    location: "Bengaluru, Karnataka, India · Remote",
    skills: ["Data Models"],
    description: "• Developed dynamic, data-driven BI dashboards using Tableau and Power BI for real-time insights.\n• Collaborated with Fortune 500 client to optimize marketing campaigns through data analysis.\n• Implemented innovative solutions to enhance data visualization and reporting capabilities.",
  },
  {
    title: "Business Intelligence Developer",
    company: "Epsilon",
    logo: "Epsilon logo",
    type: "Full-time",
    date: "Mar 2021 - Mar 2022 · 1 yr 1 mo",
    location: "Bengaluru, Karnataka, India · Hybrid",
    skills: ["PHP", "Tableau"],
    description: "• Automated daily operational reports using SAP BusinessObjects, SQL, and Tableau, reducing report generation time by 30%.\n• Optimized complex SQL queries to extract, aggregate, and analyze data from relational databases.\n• Collaborated with stakeholders to define KPIs and develop ad hoc analytical reports for better decision-making.",
  },
  {
    title: "Full Stack Developer",
    company: "Codenex Solutions LLP",
    logo: "Codenex Solutions LLP logo",
    type: "Internship",
    date: "Apr 2019 - Jun 2019 · 3 mos",
    location: "Kozhikode · On-site",
    skills: ["Data Models"],
    description: "As a Full Stack Developer at Codenex Solutions LLP in Kozhikode, I honed my skills in web development technologies like HTML, CSS, Bootstrap, and PHP. I focused on creating visually appealing interfaces and ensuring optimal user experience across different devices. By implementing responsive design principles and best practices, I optimized website performance and maintained code quality.",
  },
  {
    title: "Data Analyst Intern",
    company: "EY",
    logo: "EY logo",
    type: "Internship",
    date: "Apr 2018 - Jun 2018 · 3 mos",
    location: "Kochi",
    skills: [],
    description: "• Conducted data analysis and visualization projects using tools like Hadoop MapReduce and Spark.\n• Collaborated with a diverse team to contribute to data-driven decision-making processes.\n• Assisted in creating visually appealing dashboards and reports for stakeholders.\n• Received mentorship from experienced professionals to enhance skills in data manipulation and statistical analysis.",
  },
];

export const ExperienceSection = () => {
  return (
    <section 
      id="experience" 
      className="w-full py-24 bg-[#0f1e30]" // Updated background color
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} 
                 className="card-3d-effect group hover:transform hover:scale-[1.01] transition-all duration-300">
              <Card className="card-3d-content overflow-hidden border border-muted/20 shadow-md bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium flex items-center gap-1 mt-1">
                        <Building className="h-4 w-4" />
                        {experience.company} · <span className="text-muted-foreground text-sm">{experience.type}</span>
                      </CardDescription>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-1">
                  {experience.description && (
                    <div className="mt-2 text-sm text-foreground/90 whitespace-pre-line">
                      {experience.description}
                    </div>
                  )}
                  {experience.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
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
