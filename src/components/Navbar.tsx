import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

// 1. Define the interface for the Typewriter props
interface TypewriterProps {
  words: string[];
}

const Typewriter = ({ words }: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blink effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index >= words.length) return;

    // Word finished typing
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    // Word finished deleting
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const randomSpeed = Math.floor(Math.random() * 350);
    const typingSpeed = reverse ? 75 : subIndex === words[index].length ? 1000 : 150;
    
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(typingSpeed, randomSpeed));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-w-[120px] text-left">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UPDATED: Added "Stats" between Projects and Contact
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Publications", href: "#publications" },
    { name: "Projects", href: "#projects" },
    { name: "Stats", href: "#stats" }, // New Link
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-light/80 dark:bg-base-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="group relative z-50">
          <div className="font-serif text-2xl font-bold text-muted-light dark:text-muted-dark border-2 border-muted-light dark:border-muted-dark h-10 w-10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
            VJ
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="group relative text-xs tracking-[0.25em] uppercase text-muted-light dark:text-muted-dark font-medium py-1 block"
              >
                <span className="group-hover:text-accent transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6 z-50">
          
          {/* Typewriter */}
          <div className="hidden lg:block text-xs tracking-[0.2em] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#d4af37] to-accent">
            <Typewriter words={["SCIENCE", "TECHNOLOGY", "INNOVATION", "RESEARCH"]} />
          </div>

          <div className="h-6 w-[1px] bg-border-light dark:bg-border-dark hidden lg:block"></div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:border-accent hover:text-accent dark:hover:text-accent transition-all duration-300"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-base-light dark:bg-base-dark z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-sm tracking-[0.3em] uppercase text-muted-light dark:text-muted-dark">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`transform transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <a
                onClick={() => setOpen(false)}
                href={link.href}
                className="hover:text-accent transition-colors text-lg"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;