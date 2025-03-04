
import { ArrowDown, Heart, Star, Sparkles, Zap, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingItems, setFloatingItems] = useState<Array<{
    id: number;
    icon: JSX.Element;
    x: number;
    y: number;
    scale: number;
    rotation: number;
    speed: number;
  }>>([]);
  
  // Handle cursor interaction with floating elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate random floating items
    const items = [];
    const icons = [
      <Sparkles size={24} className="text-accent" />,
      <Star size={24} className="text-yellow-400" />,
      <Heart size={24} className="text-pink-500" />,
      <Zap size={24} className="text-primary" />,
      <Rocket size={24} className="text-blue-400" />
    ];
    
    for (let i = 0; i < 8; i++) {
      items.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: 0.5 + Math.random() * 1.5,
        rotation: Math.random() * 360,
        speed: 0.2 + Math.random() * 0.8
      });
    }
    
    setFloatingItems(items);
    
    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    // Update interacting state
    const handleMouseDown = () => setInteracting(true);
    const handleMouseUp = () => setInteracting(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Animation loop for floating elements
    let animationId: number;
    let lastTime = 0;
    
    const animate = (time: number) => {
      if (lastTime === 0) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;
      
      setFloatingItems(prevItems => {
        return prevItems.map(item => {
          // Calculate new position based on time
          let newY = item.y - item.speed * 0.05 * deltaTime;
          if (newY < -10) newY = 110; // Loop back to bottom
          
          // Apply subtle x movement
          let newX = item.x + Math.sin(time * 0.001 * item.speed) * 0.1;
          
          // Apply interaction effect if mouse is close
          const element = document.getElementById(`floating-item-${item.id}`);
          if (element && interacting) {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(
              Math.pow(mousePosition.x - centerX, 2) +
              Math.pow(mousePosition.y - centerY, 2)
            );
            
            // Apply force if mouse is close
            if (distance < 100) {
              const force = (100 - distance) / 100 * 5;
              const angle = Math.atan2(centerY - mousePosition.y, centerX - mousePosition.x);
              newX += Math.cos(angle) * force;
              newY += Math.sin(angle) * force;
            }
          }
          
          return {
            ...item,
            x: newX,
            y: newY,
            rotation: item.rotation + item.speed * 0.2 * deltaTime
          };
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, [interacting]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center pb-16 pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.15),transparent)] bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.05),transparent)]"></div>
      
      <div className={`absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse mix-blend-multiply dark:mix-blend-soft-light`}></div>
      
      <div className={`absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-70 animate-pulse delay-1000 mix-blend-multiply dark:mix-blend-soft-light`}></div>
      
      {/* 3D Floating elements */}
      {floatingItems.map(item => (
        <div 
          key={item.id}
          id={`floating-item-${item.id}`}
          className="absolute z-10 cursor-grab active:cursor-grabbing transition-transform hover:scale-150"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `scale(${item.scale}) rotate(${item.rotation}deg)`,
            transition: 'transform 0.2s ease'
          }}
        >
          {item.icon}
        </div>
      ))}
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center max-w-3xl mx-auto z-20">
        <div className={`inline-block ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: "400ms" }}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-primary rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm shadow-glow-sm">
          👋 Hey, I Am <span className="font-bold text-primary">Atharva Bibave</span>
          </span>
        </div>
        
        <h1 className={`text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: "600ms" }}>
          <span className="bg-gradient-to-r from-primary via-accent to-primary/70 dark:from-primary dark:via-primary/90 dark:to-accent/90 bg-clip-text text-transparent">
            Creating Digital Experiences
          </span> with precision and purpose
        </h1>
        
        <p className={`text-lg md:text-xl text-muted-foreground mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ transitionDelay: "800ms" }}>
  As a <span className="font-semibold text-primary">Software & Cloud Engineer</span>, I 
  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold"> architect and develop </span> 
  scalable, secure digital solutions that seamlessly blend 
  <span className="text-accent font-semibold"> performance</span> with 
  <span className="text-primary font-semibold"> elegance</span> — solving real-world challenges with 
  <span className="font-semibold"> innovation</span> and 
  <span className="font-semibold"> precision</span>.
</p>

        <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: "1000ms" }}>
          <a 
            href="#projects" 
            className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent px-8 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:scale-105 hover:shadow-glow-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background/80 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-all hover:bg-accent/20 hover:text-accent-foreground hover:scale-105 hover:shadow-glow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
  <a 
    href="https://www.dropbox.com/scl/fi/8s84vxc2ggjwt4uljsjx5/Main_Resume.pdf?rlkey=m7liyeaed4vqb94230e7tp9ls&st=apllqhhr&dl=0" // Replace with your actual resume link
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center space-x-6 px-10 py-4 
               text-lg font-semibold text-white rounded-full 
               bg-gradient-to-r from-[#7C4DFF] to-[#42A5F5] 
               shadow-lg transition-all duration-300 
               hover:scale-105 hover:shadow-2xl 
               dark:shadow-blue-400/30 dark:hover:shadow-blue-500/50 
               border border-transparent hover:border-white/30"
  >
    <span className="relative z-10">Hire Me!</span>
    <span className="relative z-10 text-white font-semibold">|</span>
    <span className="relative z-10">Resume →</span>

    {/* Soft Mirrored Reflection Effect */}
    <span className="absolute top-full left-0 right-0 h-8 
                     bg-gradient-to-t from-[#7C4DFF]/20 to-transparent 
                     opacity-30 scale-y-[-1] blur-md rounded-full"></span>
  </a>
</div>



      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: "1200ms" }}>
        <a 
          href="#about" 
          className="inline-flex items-center justify-center p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-glow-sm hover:shadow-glow hover:scale-110 transition-all duration-300 animate-float"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={20} className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
