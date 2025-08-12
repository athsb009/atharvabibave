
import { Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/athsb009", label: "GitHub" },
    { icon: <Twitter size={20} />, url: "https://x.com/2Bibave35697", label: "Twitter" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/atharvabibave", label: "LinkedIn" },
    { icon: <Mail size={20} />, url: "mailto:abibave09@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a 
              href="#home" 
              className="text-2xl font-bold mb-4 inline-block hover:scale-110 transition-transform bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent"
            >
              Atharva Bibave
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Software & Cloud Engineer passionate about creating innovative digital solutions. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>abibave09@gmail.com</p>
              <p>Houston, TX, USA</p>
              <p>Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Atharva Bibave. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Crafted with <Heart className="inline h-3 w-3 text-red-500" /> and precision
            </p>
          </div>
          
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
