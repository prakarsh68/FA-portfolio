const Expertise = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <h2 className="text-center font-serif text-4xl mb-20">
        Areas of Distinction
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {[
          ["Artificial Intelligence", "Applied machine learning, intelligent systems, and real-world AI deployments."],
          ["Embedded Systems & IoT", "Design of scalable, low-power smart devices and sensor-driven platforms."],
          ["Industry 4.0", "Automation, cyber-physical systems, and intelligent manufacturing ecosystems."]
        ].map(([title, desc]) => (
          <div key={title} className="relative pl-8">
            <span className="absolute left-0 top-1 w-[2px] h-12 bg-[#8b6b3d]" />
            <h3 className="font-serif text-xl mb-4">{title}</h3>
            <p className="text-sm text-[#6b645c] leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
