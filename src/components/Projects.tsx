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
      title: "SaaS Workflow Automation Platform",
      description: "Built a full-stack Zapier-style automation platform with visual drag-and-drop workflow builder. Integrates Google Drive, Slack, Notion, and Discord via OAuth and webhooks.\n\nFeatures sequential execution, real-time preview, and Stripe-powered billing. Deployed on AWS with Docker, NGINX, and GitHub Actions for zero-downtime CI/CD.",
      image: "/fuzzie.png",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS", "Stripe", "Clerk", "OAuth", "Webhooks", "NGINX", "GitHub Actions", "CloudWatch"],
      githubUrl: "https://github.com/athsb009/fuzzie-automation",
      liveUrl: "https://zapdash-demo.vercel.app",
      delay: 100
    },
    {
      title: "Real-Time Virtual Office Platform",
      description: "Developed a real-time multiplayer virtual office platform using React, TypeScript, Phaser 3, and WebRTC. Delivers sub-100ms latency for video calls, screen sharing, and collaborative whiteboards.\n\nFeatures customizable workspaces with avatar customization, interactive objects, and multi-room architecture. Built with CI/CD for rapid, reliable delivery.",
      image: "/coder-house.png",
      tags: ["React", "TypeScript", "Phaser 3", "Colyseus", "WebRTC", "Node.js", "GitHub Actions", "Multiplayer", "Avatar Customization", "Interactive Objects"],
      githubUrl: "https://github.com/athsb009/coders-house",
      liveUrl: "https://codershouse-demo.vercel.app",
      delay: 300
    },
    {
      title: "Cloud-Based CDN",
      description: "A scalable content delivery network (CDN) leveraging AWS services for optimized global content distribution. Implements intelligent caching strategies, geographic load balancing, and real-time performance monitoring for optimal user experience worldwide.",
      image: "/cloud_cdn.png",
      tags: ["AWS CloudFront", "S3", "Lambda", "CloudWatch", "EC2", "Node.js", "React"],
      githubUrl: "https://github.com/athsb009/cloud_cdn",
      liveUrl: "https://cloud-cdn-demo.vercel.app",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            A collection of projects that showcase my expertise in full-stack development, cloud architecture, and innovative problem-solving approaches.
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
              liveUrl={project.liveUrl}
              delay={project.delay}
            />
          ))}
        </div>

        {/* Enhanced GitHub Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore my complete portfolio on GitHub, including open-source contributions, 
              experimental projects, and ongoing development work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/athsb009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-primary bg-primary/10 border border-primary/20 rounded-lg transition-all duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary/90 hover:scale-105"
              >
                🚀 View GitHub Profile
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-accent bg-accent/10 border border-accent/20 rounded-lg transition-all duration-300 hover:bg-accent hover:text-white dark:hover:bg-accent/90 hover:scale-105"
              >
                💬 Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
