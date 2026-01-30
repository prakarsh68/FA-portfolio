const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
      <h1 className="font-serif text-xl">Justus.</h1>

      <ul className="hidden md:flex gap-10 text-xs tracking-[0.3em] uppercase text-[#6b645c]">
        <li className="text-black border-b border-black pb-1">Home</li>
        <li>About</li>
        <li>Research</li>
        <li>Innovations</li>
        <li>Contact</li>
      </ul>

      <span className="text-lg">🔍</span>
    </nav>
  );
};

export default Navbar;
