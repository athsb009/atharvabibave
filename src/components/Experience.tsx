
import React, { useEffect, useState } from "react";
import { Calendar, Briefcase, Award, ChevronRight } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  color: string;
  icon: React.ReactNode;
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = sectionTop < window.innerHeight * 0.75;
        setIsVisible(isVisible);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Graduate Software Assistant",
      company: "UH Energy & Innovation",
      period: "2024 - Present",
      description: "Redesigned and deployed a React-based website to enhance visibility and engagement, while leading automation initiatives for data analytics workflows.",
      achievements: [
        "Boosted website visibility, driving 1,000+ user interactions through an optimized React-based platform.",
        "Automated data analytics workflows by implementing real-time dashboards and ETL pipelines, reducing report generation time by 40% and improving decision-making efficiency.",
        "Led agile sprints, facilitated daily stand-ups, and implemented project tracking using Jira, Trello, and Asana, ensuring seamless execution and accelerating project delivery by 30%.",
        "Analyzed research data and resource allocation, delivering insights for strategic planning."
      ],
      color: "bg-primary/10 border-primary/20 text-primary",
      icon: <Briefcase />
    },
    {
      id: 2,
      role: "Software Development Intern",
      company: "CodeAlpha",
      period: "April 2023 – June 2023",
      description: "Developed a scalable CRM dashboard, improving data accuracy and workflow automation using modern web technologies.",
      achievements: [
        "Built a CRM dashboard using React, Node.js, and MongoDB, automating workflows and improving data accuracy by 30%.",
        "Designed and optimized a robust database schema, cleaning and migrating existing data to enhance data integrity.",
        "Deployed the CRM system on AWS EC2, ensuring high availability, scalability, and secure cloud integration.",
        "Implemented interactive data visualizations using Chart.js for real-time sales and customer analytics insights."
      ],
      color: "bg-accent/10 border-accent/20 text-accent",
      icon: <Calendar />
    }
];

  // Store the active experience
  const activeExperience = experiences.find(exp => exp.id === activeTab) || experiences[0];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="absolute right-20 top-40 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-50 dark:bg-accent/5 animate-pulse"></div>
      <div className="absolute left-20 bottom-40 w-60 h-60 bg-primary/10 rounded-full filter blur-3xl opacity-50 dark:bg-primary/5 animate-spin-slow"></div>
      
      <div className="section-container relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider text-primary rounded-full bg-primary/10 border border-primary/20">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            My professional path that led me to where I am today, showcasing the skills and expertise I've gained along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 bg-secondary/20 backdrop-blur-sm p-2 rounded-xl flex justify-between ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`px-5 py-3 rounded-lg transition-all flex-1 text-sm md:text-base font-medium
                  ${activeTab === exp.id 
                    ? 'bg-background shadow-md text-foreground' 
                    : 'hover:bg-background/50 text-muted-foreground'}
                `}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className={`relative bg-card border border-border rounded-xl p-8 shadow-md dark:glass-card overflow-hidden ${isVisible ? 'animate-slide-in animate-delay-300' : 'opacity-0'}`}>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-0 right-0 h-32 w-32 bg-primary rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 h-24 w-24 bg-accent rounded-full -ml-12 -mb-12"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{activeExperience.role}</h3>
                  <div className="flex items-center mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${activeExperience.color}`}>
                      {activeExperience.company}
                    </span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{activeExperience.period}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${activeExperience.color.split(' ')[0]}`}>
                    {activeExperience.icon}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{activeExperience.description}</p>
              
              <h4 className="font-semibold text-lg mb-3">Key Achievements</h4>
              <ul className="space-y-2 mb-6">
                {activeExperience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
