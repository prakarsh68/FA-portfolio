const Stats = () => {
  return (
    <section
      id="stats"
      className="bg-[#0f0f0f] text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-16 text-center">

        <div>
          <h2 className="font-serif text-4xl">
            6.5+
          </h2>
          <p className="text-xs tracking-widest uppercase text-neutral-400 mt-3">
            Years of Experience
          </p>
        </div>

        <div>
          <h2 className="font-serif text-4xl">
            300+
          </h2>
          <p className="text-xs tracking-widest uppercase text-neutral-400 mt-3">
            Academic Contributions
          </p>
        </div>

        <div>
          <h2 className="font-serif text-4xl">
            GWR
          </h2>
          <p className="text-xs tracking-widest uppercase text-neutral-400 mt-3">
            World Record
          </p>
        </div>

        <div>
          <h2 className="font-serif text-4xl">
            Multi
          </h2>
          <p className="text-xs tracking-widest uppercase text-neutral-400 mt-3">
            Patents & Innovations
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
