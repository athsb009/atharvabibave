import { useEffect, useRef, useState } from 'react';

interface TechItem {
  name: string;
  category: string;
  color: string;
}

const TechSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const techItems: TechItem[] = [
    // Languages
    { name: "TypeScript", category: "Language", color: "#3178C6" },
    { name: "JavaScript", category: "Language", color: "#F7DF1E" },
    { name: "Python", category: "Language", color: "#3776AB" },
    { name: "Java", category: "Language", color: "#ED8B00" },
    
    // Frontend
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "Next.js", category: "Frontend", color: "#000000" },
    { name: "Tailwind", category: "Frontend", color: "#06B6D4" },
    
    // Backend
    { name: "Node.js", category: "Backend", color: "#339933" },
    { name: "Flask", category: "Backend", color: "#000000" },
    { name: "Express", category: "Backend", color: "#000000" },
    
    // Cloud & DevOps
    { name: "AWS", category: "Cloud", color: "#FF9900" },
    { name: "Docker", category: "DevOps", color: "#2496ED" },
    { name: "Kubernetes", category: "DevOps", color: "#326CE5" },
    { name: "Terraform", category: "DevOps", color: "#7C3AED" },
    
    // Databases
    { name: "PostgreSQL", category: "Database", color: "#336791" },
    { name: "MongoDB", category: "Database", color: "#47A248" },
    { name: "Redis", category: "Database", color: "#DC382D" },
    
    // Tools
    { name: "Git", category: "Tools", color: "#F05032" },
    { name: "GitHub", category: "Tools", color: "#181717" },
    { name: "Jenkins", category: "Tools", color: "#D24939" },
    { name: "Kafka", category: "Tools", color: "#231F20" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('tech-sphere');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const visible = sectionTop < window.innerHeight * 0.75;
        setIsVisible(visible);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D sphere parameters
    const radius = Math.min(canvas.width, canvas.height) / 4;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    let time = 0;
    let rotationX = 0;
    let rotationY = 0;

    // Create 3D points for tech items
    const points = techItems.map((_, index) => {
      const phi = Math.acos(-1 + (2 * index) / techItems.length);
      const theta = Math.sqrt(techItems.length * Math.PI) * phi;
      
      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        tech: techItems[index]
      };
    });

    // Animation loop
    const animate = () => {
      if (!isVisible) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update rotation
      rotationX += 0.005;
      rotationY += 0.003;
      
      // Sort points by Z for proper depth
      const sortedPoints = [...points].sort((a, b) => {
        const aZ = a.z * Math.cos(rotationX) - a.x * Math.sin(rotationX);
        const bZ = b.z * Math.cos(rotationX) - b.x * Math.sin(rotationX);
        return bZ - aZ;
      });

      // Draw each tech item
      sortedPoints.forEach((point) => {
        // Apply 3D rotation
        const x = point.x * Math.cos(rotationX) - point.z * Math.sin(rotationX);
        const y = point.y * Math.cos(rotationY) - point.z * Math.sin(rotationY);
        const z = point.z * Math.cos(rotationX) + point.x * Math.sin(rotationX);

        // Project 3D to 2D
        const scale = 1 / (z + radius + 2);
        const projectedX = centerX + x * scale;
        const projectedY = centerY + y * scale;

        // Draw tech item
        if (scale > 0.1) {
          ctx.save();
          
          // Draw background circle
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, 20 * scale, 0, Math.PI * 2);
          ctx.fillStyle = point.tech.color + '20';
          ctx.fill();
          ctx.strokeStyle = point.tech.color;
          ctx.lineWidth = 2 * scale;
          ctx.stroke();

          // Draw text
          ctx.fillStyle = '#000000';
          ctx.font = `${12 * scale}px system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(point.tech.name, projectedX, projectedY);
          
          ctx.restore();
        }
      });

      time += 0.016;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isVisible]);

  return (
    <div id="tech-sphere" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider text-primary rounded-full bg-primary/10 border border-primary/20">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies I Work With</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of the technologies and tools I use to build innovative solutions.
          </p>
        </div>

        {/* 3D Tech Sphere */}
        <div className="flex justify-center mb-12">
          <div className="relative w-96 h-96">
            <canvas
              ref={canvasRef}
              className="w-full h-full rounded-2xl border border-border/50 shadow-lg bg-background/80 backdrop-blur-sm"
            />
            
            {/* Center Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-50"></div>
          </div>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {['Language', 'Frontend', 'Backend', 'Cloud', 'DevOps'].map((category) => (
            <div key={category} className="text-center">
              <h3 className="font-semibold text-foreground mb-3">{category}</h3>
              <div className="space-y-2">
                {techItems
                  .filter(item => item.category === category)
                  .map((item, index) => (
                    <div
                      key={item.name}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {item.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSphere;
