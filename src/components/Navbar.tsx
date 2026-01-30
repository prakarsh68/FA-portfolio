import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="font-serif text-xl">Justus.</h1>

      {/* Links */}
      <ul className="hidden md:flex gap-10 text-xs tracking-[0.3em] uppercase text-[#6b645c]">
        <li className="text-black border-b border-black pb-1">Home</li>
        <li>About</li>
        <li>Research</li>
        <li>Innovations</li>
        <li>Contact</li>
      </ul>

      {/* Search Button */}
      <button
        aria-label="Search"
        className="group border border-[#8b6b3d] p-2 hover:bg-[#8b6b3d] transition"
      >
        <Search
          size={16}
          className="text-[#8b6b3d] group-hover:text-white transition"
        />
      </button>
    </nav>
  );
};

export default Navbar;
