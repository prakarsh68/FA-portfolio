const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-[#f2efe9] py-36 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

        {/* LEFT: TEXT */}
        <div>
          <h2 className="font-serif text-4xl mb-10">
            About Me
          </h2>

          <span className="block w-16 h-[1px] bg-[#8b6b3d] mb-10" />

          <p className="text-[#6b645c] leading-relaxed text-lg mb-7">
            I am an academician and researcher with over six years of experience
            in higher education, specializing in Computer Science and Engineering.
            My academic journey is shaped by a strong commitment to teaching,
            applied research, and the development of technology-driven solutions
            that address real-world challenges.
          </p>

          <p className="text-[#6b645c] leading-relaxed text-lg mb-7">
            My research interests include embedded systems, cloud computing,
            Industry 4.0 technologies, and applied machine learning. I actively
            engage in mentoring students, supervising academic projects, and
            contributing to peer-reviewed research that emphasizes innovation,
            reliability, and societal impact.
          </p>

          <p className="text-[#6b645c] leading-relaxed text-lg">
            As an educator, I strive to foster analytical thinking,
            interdisciplinary learning, and ethical responsibility, while
            continually evolving as a researcher and academic professional.
          </p>
        </div>

        {/* RIGHT: HIGHLIGHTS */}
        <div className="space-y-12">
          <div className="border-l-2 border-[#8b6b3d] pl-8">
            <h3 className="font-serif text-xl mb-3">
              Academic Focus
            </h3>
            <p className="text-[#6b645c] leading-relaxed">
              Computer Science · Embedded Systems · Cloud Computing · Industry 4.0
            </p>
          </div>

          <div className="border-l-2 border-[#8b6b3d] pl-8">
            <h3 className="font-serif text-xl mb-3">
              Professional Role
            </h3>
            <p className="text-[#6b645c] leading-relaxed">
              Assistant Professor · Researcher · Academic Mentor
            </p>
          </div>

          <div className="border-l-2 border-[#8b6b3d] pl-8">
            <h3 className="font-serif text-xl mb-3">
              Research Philosophy
            </h3>
            <p className="text-[#6b645c] leading-relaxed">
              Translating theoretical knowledge into impactful, real-world
              solutions through research and innovation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
