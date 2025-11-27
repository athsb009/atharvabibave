import ProjectCard from "./ProjectCard";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
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

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
      const scrollTo = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

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
      image: "/coderhouse.png",
      tags: ["React", "TypeScript", "Phaser 3", "Colyseus", "WebRTC", "Node.js", "GitHub Actions", "Multiplayer", "Avatar Customization", "Interactive Objects"],
      githubUrl: "https://github.com/athsb009/coders-house",
      liveUrl: "https://codershouse-demo.vercel.app",
      delay: 300
    },
    {
      title: "AI Multi-Agent Automation Platform",
      description: "Developed an AI-powered multi-agent workflow automation system using GPT-5.1 and Playwright that captures and documents web application workflows in real-time, achieving 90%+ accuracy across diverse applications.\n\nEngineered a self-healing execution engine with 7+ fallback strategies per action, enabling the system to automatically recover from 85% of selector failures through text-based matching, keyboard shortcuts, and AI vision feedback.",
      image: "/ai_automation.png",
      tags: ["Python", "Playwright", "OpenAI API", "GPT-5.1", "AI Vision", "Multi-Agent", "Self-Healing", "Automation", "Web Scraping"],
      githubUrl: "https://github.com/athsb009",
      delay: 700
    },
    {
      title: "Scalable Image Delivery Platform",
      description: "Engineered an end-to-end image processing solution featuring a serverless AWS pipeline (S3, Lambda, Sharp) for efficient image resizing and optimization.\n\nImplemented AWS CloudFront as a global CDN to cache and serve resized images, optimizing content delivery worldwide. Deployed application on AWS EC2, using Nginx as a reverse proxy to route frontend/backend traffic.",
      image: "/cloud_cdn.png",
      tags: ["AWS S3", "Lambda", "CloudFront", "EC2", "Nginx", "PostgreSQL", "Sharp", "Serverless"],
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

        <div className="relative -mx-8 md:-mx-12">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute -left-12 md:-left-16 lg:-left-20 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:bg-card transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
          )}
          
          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute -right-12 md:-right-16 lg:-right-20 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:bg-card transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          )}
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent snap-x snap-mandatory px-8 md:px-12"
          >
            <div className="flex gap-8" style={{ width: 'max-content' }}>
              {projects.map((project, index) => (
                <div 
                  key={project.title} 
                  className="flex-shrink-0 snap-start w-[calc(100vw-4rem)] md:w-[420px] lg:w-[440px]"
                >
                  <ProjectCard 
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    delay={project.delay}
                  />
                </div>
              ))}
            </div>
          </div>
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
