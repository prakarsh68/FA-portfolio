const AuthorshipPatentAwards = () => {
  return (
    <section
      id="achievements"
      className="bg-[#f2efe9] py-36 px-6"
    >
      <div className="max-w-5xl mx-auto space-y-28">

        {/* BOOK AUTHORSHIP */}
        <div>
          <h3 className="font-serif text-3xl mb-6">
            Book Authorship
          </h3>
          <p className="text-[#6b645c] text-lg leading-relaxed">
            <strong>Emerging Trends in AI and Machine Learning</strong><br />
            Scientific International Publishing House (SIPH)
          </p>
        </div>

        {/* PATENT */}
        <div>
          <h3 className="font-serif text-3xl mb-6">
            Patent
          </h3>
          <p className="text-[#6b645c] text-lg leading-relaxed">
            Design No: <strong>423159-001</strong><br />
            “Machine Learning Based Heart Health Monitoring Device”
          </p>
        </div>

        {/* JOURNAL REVIEWER */}
        <div>
          <h3 className="font-serif text-3xl mb-6">
            Journal Reviewer
          </h3>
          <p className="text-[#6b645c] text-lg leading-relaxed">
            International Journal of Systems Assurance Engineering and Management (IJSAEM)
          </p>
        </div>

        {/* AWARDS */}
        <div>
          <h3 className="font-serif text-3xl mb-6">
            Awards & Recognition
          </h3>
          <ul className="list-disc list-inside text-[#6b645c] text-lg space-y-3">
            <li>
              Young Innovators Award (2019) — 3M-CII, Confederation of Indian Industry
            </li>
            <li>
              Guinness World Record & Asian Book of Records — World’s Largest Wheelchair Image
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AuthorshipPatentAwards;
