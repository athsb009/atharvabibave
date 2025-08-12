
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm animate-fade-in hover:shadow-lg transition-all hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center gap-6 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-primary hover:bg-white/90 transition-all hover:scale-110"
              aria-label={`View ${title} on GitHub`}
            >
              <Github size={20} className="animate-scale-in" />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4 whitespace-pre-line leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={tag} 
              className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground transition-all hover:scale-105"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
