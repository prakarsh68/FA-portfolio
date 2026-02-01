import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const words = [
  "Science",
  "Technology",
  "Innovation",
  "Research",
  "Society"
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Rotate words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#f7f4ef]/90 backdrop-blur border-b border-[#e0dbd1]">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="font-serif text-xl">
          VJ
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-xs tracking-[0.3em] uppercase text-[#6b645c]">
          <li><a href="#home" className="hover:text-black transition">Home</a></li>
          <li><a href="#about" className="hover:text-black transition">About</a></li>
          <li><a href="#publications" className="hover:text-black transition">Publications</a></li>
          <li><a href="#projects" className="hover:text-black transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-6">

          {/* Rotating Keyword */}
          <div className="hidden sm:block text-xs tracking-[0.3em] uppercase text-[#8b6b3d] font-medium min-w-[140px] text-center transition-opacity duration-500">
            {words[index]}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#f7f4ef] border-t border-[#e0dbd1]">
          <ul className="flex flex-col px-6 py-6 gap-6 text-xs tracking-[0.3em] uppercase text-[#6b645c]">
            <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#publications">Publications</a></li>
            <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
