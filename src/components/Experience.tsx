const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-36"
    >
      <h2 className="font-serif text-4xl text-center mb-28">
        Academic Experience
      </h2>

      <div className="space-y-24">

        {/* CURRENT POSITION */}
        <div className="relative pl-10 border-l-2 border-[#8b6b3d]">
          <p className="text-xs tracking-widest uppercase text-[#8b6b3d] mb-4">
            May 2024 – Present
          </p>

          <h3 className="font-serif text-2xl mb-2">
            Assistant Professor — Computing Technologies
          </h3>

          <p className="text-[#6b645c] leading-relaxed">
            SRM Institute of Science and Technology
          </p>

          <p className="mt-2 text-sm text-[#6b645c]">
            Chennai, India
          </p>
        </div>

        {/* PREVIOUS POSITION */}
        <div className="relative pl-10 border-l border-[#d8d3c8]">
          <p className="text-xs tracking-widest uppercase text-[#8b6b3d] mb-4">
            Oct 2017 – May 2024 · <span className="normal-case">6.5 Years</span>
          </p>

          <h3 className="font-serif text-2xl mb-2">
            Assistant Professor — Computer Science & Engineering
          </h3>

          <p className="text-[#6b645c] leading-relaxed">
            Vel Tech Rangarajan Dr. Sagunthala R&amp;D Institute of Science and Technology
          </p>

          <p className="mt-2 text-sm text-[#6b645c]">
            Chennai, India
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;
