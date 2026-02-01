const AcademicProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[#f7f4ef] py-44 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-36">
          <h2 className="font-serif text-5xl mb-8">
            Academic & Applied Projects
          </h2>
          <p className="max-w-2xl mx-auto text-[#6b645c] text-lg leading-relaxed">
            Selected projects demonstrating applied research, real-world problem
            solving, and the integration of embedded systems and cloud-based
            technologies with strong societal relevance.
          </p>
        </div>

        <div className="space-y-36">

          {/* PROJECT 1 */}
          <div className="relative pl-10">
            <span className="absolute left-0 top-3 w-[2px] h-28 bg-[#8b6b3d]" />

            <h3 className="font-serif text-3xl mb-7">
              Auto Rescue System
            </h3>

            <div className="flex flex-wrap gap-x-12 gap-y-3 text-xs tracking-widest uppercase text-[#8b6b3d] mb-9">
              <span>Mar 2014 – Feb 2016</span>
              <span>Individual Project</span>
              <span>Role: Developer</span>
              <span>Embedded · Cloud</span>
            </div>

            <p className="text-[#6b645c] leading-relaxed text-lg max-w-4xl">
              In critical road accident scenarios, victims often depend on manual
              intervention by bystanders to contact emergency services, resulting
              in life-threatening delays—particularly in isolated locations or
              during late hours. The Auto Rescue System was developed as an
              automated emergency response mechanism capable of detecting accident
              events and instantly transmitting precise location data to
              ambulance services via cloud communication. The system significantly
              reduces response time and enhances the likelihood of saving human
              lives.
            </p>
          </div>

          {/* PROJECT 2 */}
          <div className="relative pl-10">
            <span className="absolute left-0 top-3 w-[2px] h-28 bg-[#8b6b3d]" />

            <h3 className="font-serif text-3xl mb-7">
              Trawler Ocean Care System
            </h3>

            <div className="flex flex-wrap gap-x-12 gap-y-3 text-xs tracking-widest uppercase text-[#8b6b3d] mb-9">
              <span>Mar 2016 – Jun 2017</span>
              <span>Individual Project</span>
              <span>Role: Developer</span>
              <span>Embedded Systems</span>
            </div>

            <p className="text-[#6b645c] leading-relaxed text-lg max-w-4xl">
              The increasing incidence of inadvertent international maritime
              border crossings by fishermen presents serious safety, legal, and
              livelihood challenges. The Trawler Ocean Care System was proposed
              as an embedded safety solution that provides real-time alerts when
              vessels approach restricted maritime boundaries. By enhancing
              situational awareness and navigational safety, the system helps
              prevent unintentional border violations and supports safer fishing
              operations.
            </p>
          </div>

          {/* PROJECT 3 */}
          <div className="relative pl-10">
            <span className="absolute left-0 top-3 w-[2px] h-28 bg-[#8b6b3d]" />

            <h3 className="font-serif text-3xl mb-7">
              Panic Button System
            </h3>

            <div className="flex flex-wrap gap-x-12 gap-y-3 text-xs tracking-widest uppercase text-[#8b6b3d] mb-9">
              <span>Jun 2017</span>
              <span>Team Size: 2</span>
              <span>Role: Developer</span>
              <span>Cloud Communication</span>
            </div>

            <p className="text-[#6b645c] leading-relaxed text-lg max-w-4xl">
              Designed to assist elderly individuals during emergency situations,
              the Panic Button System enables instant distress signaling through
              cloud-based communication. Upon activation, the device captures
              real-time latitude and longitude data via satellite and transmits
              the information to a centralized platform. The system promptly
              alerts nearby hospitals and neighbors, enabling rapid response and
              timely intervention during critical situations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;
