
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 dark:bg-background/80 bg-white/80 backdrop-blur-md shadow-sm border-b border-border/50" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-display font-bold relative group overflow-hidden"
        >
          <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            ~/Atharva
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="link-underline text-sm font-medium relative hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile navigation trigger */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="p-2 rounded-full bg-secondary/80"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 dark:bg-background/95 bg-white/95 backdrop-blur-lg shadow-lg border-b border-border animate-slide-in">
            <div className="flex flex-col space-y-6 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
