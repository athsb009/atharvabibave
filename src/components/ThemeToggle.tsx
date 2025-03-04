
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-secondary-foreground transition-all hover:scale-110 hover:rotate-12 focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={18} className="animate-slide-in" />
      ) : (
        <Sun size={18} className="animate-slide-in" />
      )}
    </button>
  );
};

export default ThemeToggle;
