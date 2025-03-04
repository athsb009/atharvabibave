import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const visible = sectionTop < window.innerHeight * 0.75;
        setIsVisible(visible);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "ZapDash",
      description: "An automation platform integrating Solana and Gmail, enabling seamless user rewards via Solana token transfers and automated email notifications.",
      image: "/zapdash.webp",
      tags: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Docker", "Kafka", "Kubernetes", "Jenkins", "Terraform"],
      githubUrl: "https://github.com/athsb009/Zapdash",
      delay: 100
    },
    {
      title: "CodersHouse",
      description: "A full-stack voice-based social networking platform leveraging WebRTC for real-time audio interactions.",
      image: "/coder.webp",
      tags: ["React", "Node.js", "WebRTC", "MongoDB", "Express", "Socket.IO", "Docker", "AWS"],
      githubUrl: "https://github.com/athsb009/CodersHouse",
      delay: 300
    },
    {
      title: "Cloud-Based CDN",
      description: "A scalable content delivery network (CDN) leveraging AWS services for optimized global content distribution.",
      image: "/cloud.webp",
      tags: ["AWS CloudFront", "S3", "Lambda", "CloudWatch", "EC2", "Node.js", "React"],
      githubUrl: "https://github.com/athsb009/cloud_cdn",
      delay: 500
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-accent/5 to-transparent dark:from-accent/10"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-primary/5 to-transparent dark:from-primary/10"></div>
      
      <div className="section-container relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider text-primary rounded-full bg-primary/10 border border-primary/20">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            A collection of projects that showcase my skills, problem-solving approach, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              delay={project.delay}
            />
          ))}
        </div>

        {/* Check More on GitHub Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/athsb009"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-semibold text-primary bg-primary/10 border border-primary/20 rounded-lg transition-all duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary/90"
          >
            🚀 Check More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
