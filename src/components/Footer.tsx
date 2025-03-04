
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/athsb009", label: "GitHub" },
    { icon: <Twitter size={20} />, url: "https://x.com/2Bibave35697", label: "Twitter" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/atharvabibave", label: "LinkedIn" },
    { icon: <Mail size={20} />, url: "abibave09@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <a 
            href="#home" 
            className="text-xl font-display font-bold mb-6 hover:scale-110 transition-transform bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent"
          >
            Atharva's Portfolio
          </a>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-125"
                aria-label={link.label}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Crafted with precision and purpose
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
