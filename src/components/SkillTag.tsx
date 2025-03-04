import React, { useState } from 'react';

interface SkillTagProps {
  name: string;
  icon?: React.ReactNode;
  delay?: number;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, icon, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <div 
      className={`
        px-4 py-2
        rounded-full 
        ${isHovered ? 'bg-primary text-primary-foreground scale-110' : 'bg-secondary text-secondary-foreground'} 
        ${isClicked ? 'animate-ping-once' : 'animate-fade-in'}
        font-medium text-sm 
        cursor-pointer 
        transition-all 
        duration-300
        shadow-glow-sm
        hover:shadow-glow
        backdrop-blur-sm
        border border-transparent
        hover:border-primary/20
        dark:hover:border-primary/30
        transform 
        hover:z-10
        flex items-center
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{name}</span>
    </div>
  );
};

export default SkillTag;
