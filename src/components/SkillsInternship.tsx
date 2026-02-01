const SkillsInternship = () => {
  return (
    <section
      id="skills"
      className="bg-[#f7f4ef] py-36 px-6"
    >
      <div className="max-w-5xl mx-auto space-y-24">

        {/* TECHNICAL SKILLS */}
        <div>
          <h3 className="font-serif text-3xl mb-8">
            Technical Skills
          </h3>
          <p className="text-[#6b645c] text-lg leading-relaxed">
            Cloud Technology, Operating Systems, Embedded Systems,
            Internet of Things (IoT), Machine Learning, and Industry 4.0
            Technologies.
          </p>
        </div>

        {/* INDUSTRIAL TRAINING */}
        <div>
          <h3 className="font-serif text-3xl mb-8">
            Internship
          </h3>
          <p className="text-[#6b645c] text-lg leading-relaxed">
            <strong>Vocational Training</strong> — Bharat Sanchar Nigam Limited (BSNL)
          </p>
          <p className="text-sm text-[#6b645c] mt-2">
            20 June 2016 – 1 July 2016
          </p>
        </div>

      </div>
    </section>
  );
};

export default SkillsInternship;
