import { User, Lightbulb, Code } from "lucide-react";
import SkillTag from "./SkillTag";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const visible = sectionTop < window.innerHeight * 0.75;
        setIsVisible(visible);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const infoCards = [
    {
      icon: <User className="h-8 w-8 mb-4 text-primary" />,
      title: "Who I Am",
      description:
        "A detail-oriented developer and designer with a passion for creating intuitive user experiences.",
      delay: 100,
    },
    {
      icon: <Lightbulb className="h-8 w-8 mb-4 text-primary" />,
      title: "My Approach",
      description:
        "I believe in simplicity, functionality, and purpose in every project I undertake.",
      delay: 300,
    },
    {
      icon: <Code className="h-8 w-8 mb-4 text-primary" />,
      title: "What I Do",
      description:
        "I transform complex problems into elegant solutions through thoughtful code and design.",
      delay: 500,
    },
  ];
  
  const skillsCategories = {
    languages: [
      "Python", 
      "Java", 
      "JavaScript", 
      "TypeScript", 
      "HTML/CSS", 
      "Shell Script"
    ],
    frameworks: [
      "React", 
      "Next.js", 
      "Node.js", 
      "Express", 
      "Flask", 
      "SQLAlchemy", 
      "REST Api", 
      "Redux", 
      "Tailwind", 
      "WebRTC", 
      "Chart.js"
    ],
    tools: [
      "AWS", 
      "Linux", 
      "Kubernetes", 
      "Docker", 
      "CI/CD", 
      "Git", 
      "GitHub", 
      "Jenkins", 
      "Terraform", 
      "Kafka",
      "CloudWatch",
      "S3",
      "EC2"
    ],
    databases: [
      "SQL", 
      "MySQL", 
      "PostgreSQL", 
      "NoSQL", 
      "MongoDB", 
      "Redis"
    ]
  };

  return (
    <section 
      id="about" 
      className="py-24 bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="absolute -left-20 top-20 w-60 h-60 bg-primary/10 rounded-full filter blur-3xl opacity-70 dark:bg-primary/5"></div>
      <div className="absolute -right-20 bottom-20 w-60 h-60 bg-accent/10 rounded-full filter blur-3xl opacity-70 dark:bg-accent/5"></div>
      
      <div className="section-container relative z-10">
        {/* About Me Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider text-primary rounded-full bg-primary/10 border border-primary/20">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            I'm a passionate developer focused on creating elegant, user-centric digital experiences.
            With attention to detail and a love for clean code, I build solutions that make a difference.
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {infoCards.map((item, index) => (
            <div 
              key={index} 
              className={`bg-background rounded-xl p-6 shadow-sm border border-border flex flex-col items-center text-center ${
                isVisible ? "animate-slide-in" : "opacity-0 translate-y-10"
              } hover:shadow-md hover:-translate-y-1 transition-all dark:glass-card`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="p-3 bg-primary/10 rounded-full mb-2 animate-pulse">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Skills & Technologies Section */}
<div className={isVisible ? "animate-fade-in animate-delay-200" : "opacity-0"}>
  <h3 className="text-xl font-bold mb-6 text-center">Skills & Technologies</h3>

  <div className="max-w-5xl mx-auto px-4 space-y-10">
    {/* Languages */}
    <div className="space-y-4">
      <h4 className="text-2xl font-semibold mb-4 text-center">Languages</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillsCategories.languages.map((lang, idx) => (
          <div key={idx} className="flex justify-center">
            <SkillTag name={lang} />
          </div>
        ))}
      </div>
    </div>

    {/* Frameworks */}
    <div className="space-y-4">
      <h4 className="text-2xl font-semibold mb-4 text-center">Frameworks</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillsCategories.frameworks.map((fw, idx) => (
          <div key={idx} className="flex justify-center">
            <SkillTag name={fw} />
          </div>
        ))}
      </div>
    </div>

    {/* Tools/Technologies */}
    <div className="space-y-4">
      <h4 className="text-2xl font-semibold mb-4 text-center">Tools/Technologies</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillsCategories.tools.map((tool, idx) => (
          <div key={idx} className="flex justify-center">
            <SkillTag name={tool} />
          </div>
        ))}
      </div>
    </div>

    {/* Databases */}
    <div className="space-y-4">
      <h4 className="text-2xl font-semibold mb-4 text-center">Databases</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillsCategories.databases.map((db, idx) => (
          <div key={idx} className="flex justify-center">
            <SkillTag name={db} />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        
      </div>
    </section>
  );
};

export default About;
