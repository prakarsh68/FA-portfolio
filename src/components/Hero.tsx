import portrait from "../assets/portrait.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 pt-28 pb-40"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.1]">
            Dr. Vivek <br /> Justus
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
            <span className="w-14 h-[1px] bg-[#8b6b3d]" />
            <p className="uppercase tracking-[0.35em] text-xs text-[#6b645c]">
              Assistant Professor · Researcher · Innovator
            </p>
          </div>

          <p className="mt-10 max-w-md mx-auto md:mx-0 text-[#6b645c] leading-relaxed text-lg">
            Advancing intelligent systems through applied research in artificial
            intelligence, embedded systems, and industrial automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-14 justify-center md:justify-start">
            <button className="bg-[#141414] text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-black transition">
              Explore Innovations
            </button>
            <button className="border border-[#141414] px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#141414] hover:text-white transition">
              Academic Profile
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src={portrait}
            alt="Dr. Vivek Justus Portrait"
            className="w-[260px] sm:w-[300px] md:w-[360px] shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
