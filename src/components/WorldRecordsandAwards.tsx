const WorldRecordsAndAwards = () => {
  return (
    <section
      id="world-records"
      className="bg-[#f2efe9] py-40 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-36">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="font-serif text-5xl mb-8">
            World Records, Awards & Recognitions
          </h2>
          <p className="max-w-3xl mx-auto text-[#6b645c] text-lg leading-relaxed">
            Recognitions received for social innovation, inclusive technology,
            and impactful contributions to public welfare, disability awareness,
            and emergency response systems.
          </p>
        </div>

        {/* WORLD RECORD */}
        <div className="space-y-10">
          <h3 className="font-serif text-4xl">
            Guinness World Record & Asia Book of Records
          </h3>

          <p className="text-[#6b645c] text-lg leading-relaxed">
            I received the <strong>Guinness World Record</strong> and the
            <strong> Asia Book of Records</strong> for organizing and forming the
            world’s largest human image of a wheelchair accessibility symbol on
            <strong> December 3, 2018</strong>, in recognition of the
            International Day of Persons with Disabilities.
          </p>

          <p className="text-[#6b645c] text-lg leading-relaxed">
            This initiative aimed to promote inclusivity, accessibility, and
            awareness for persons with disabilities, emphasizing the importance
            of equal participation in society.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <img src="/world-records/wr-1.jpg" alt="Guinness World Record Formation" loading="lazy" className="shadow-md bg-white" />
            <img src="/world-records/wr-2.jpg" alt="Wheelchair Accessibility Symbol Formation" loading="lazy" className="shadow-md bg-white" />
            <img src="/world-records/wr-3.jpg" alt="World Record Certificate" loading="lazy" className="shadow-md bg-white" />
          </div>

          <ul className="list-disc list-inside text-[#6b645c] text-lg space-y-2">
            <li><a href="https://www.guinnessworldrecords.com/world-records/501162-largest-human-image-of-a-wheelchair-accessibility%c2%a0symbol" target="_blank" className="underline">Guinness World Records</a></li>
            <li><a href="http://www.asiabookofrecords.com/largest-human-formation-of-wheelchair-accessibility-symbol/" target="_blank" className="underline">Asia Book of Records</a></li>
            <li><a href="https://www.veltech.edu.in/cse-guinness-world-record/" target="_blank" className="underline">Vel Tech Official Coverage</a></li>
          </ul>
        </div>

        {/* YOUNG INNOVATOR AWARD */}
        <div className="space-y-10">
          <h3 className="font-serif text-4xl">
            Young Innovators Award – 2019
          </h3>

          <p className="text-[#6b645c] text-lg leading-relaxed">
            I was honored with the <strong>Young Innovators Award 2019</strong>
            by India’s <strong>3M–CII (Confederation of Indian Industry)</strong>,
            recognizing the societal impact of my innovation at the
            CII Innovation Summit, Bangalore.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <img src="/awards/award-1.jpg" alt="3M-CII Award Ceremony" loading="lazy" className="shadow-md bg-white" />
            <img src="/awards/award-2.jpg" alt="Receiving Young Innovator Award" loading="lazy" className="shadow-md bg-white" />
            <img src="/awards/award-3.jpg" alt="Award Recognition Moment" loading="lazy" className="shadow-md bg-white" />
          </div>

          <ul className="list-disc list-inside text-[#6b645c] text-lg space-y-2">
            <li><a href="http://www.3myounginnovatorschallenge.com/winners-of-the-2019-3m-cii-young-innovators-challenge-awards/" target="_blank" className="underline">3M–CII Official Page</a></li>
            <li><a href="https://www.youtube.com/watch?v=qIZ_ismvonk&t=1s" target="_blank" className="underline">Award Ceremony Video</a></li>
            <li><a href="https://www.thehindu.com/news/cities/chennai/city-teams-bag-awards-for-innovations/article29494250.ece" target="_blank" className="underline">The Hindu Coverage</a></li>
          </ul>
        </div>

        {/* HONOURS */}
        <div className="space-y-10">
          <h3 className="font-serif text-4xl">
            Honors & Public Recognition
          </h3>

          <p className="text-[#6b645c] text-lg leading-relaxed">
            I was honored by <strong>Thalavai Sundaram Pillai</strong>, former
            Member of the Legislative Assembly and Tamil Nadu Representative
            in Delhi, for contributions to innovation and social welfare.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img src="/honors/honor-1.jpg" alt="Public Felicitation" loading="lazy" className="shadow-md bg-white" />
            <img src="/honors/honor-2.jpg" alt="Honor Ceremony" loading="lazy" className="shadow-md bg-white" />
            <img src="/honors/honor-3.jpg" alt="Recognition Event" loading="lazy" className="shadow-md bg-white" />
            <img src="/honors/honor-4.jpg" alt="Stage Honor Moment" loading="lazy" className="shadow-md bg-white" />
          </div>
        </div>

        {/* MEDIA FEATURES */}
        <div className="space-y-10">
          <h3 className="font-serif text-4xl">
            Media Features & National Recognition
          </h3>

          <p className="text-[#6b645c] text-lg leading-relaxed">
            Featured as a <strong>Young Innovator of India</strong> across
            national newspapers, magazines, and digital media platforms on
            occasions such as National Youth Day and World Innovation events.
          </p>

          <ul className="list-disc list-inside text-[#6b645c] text-lg space-y-2">
            <li><a href="https://m.eenadu.net/sundaymagazine/article/320000041" target="_blank" className="underline">Eenadu Youth Special Feature</a></li>
            <li><a href="https://m.edexlive.com/article/people/this-device-can-send-automatic-signals-to-108-in-the-event-of-an-accident-in-just-under-three-minute/8362" target="_blank" className="underline">EDEX Live Feature</a></li>
            <li><a href="https://news.careers360.com/vel-tech-cse-students-create-guinness-world-record" target="_blank" className="underline">Careers360 Coverage</a></li>
          </ul>
        </div>

        {/* INITIATIVES */}
        <div className="space-y-10">
          <h3 className="font-serif text-4xl">
            Social & Technological Initiatives
          </h3>

          <p className="text-[#6b645c] text-lg leading-relaxed">
            I have developed multiple socially impactful systems including
            emergency rescue devices, blood donor applications, and automated
            hygiene solutions such as <strong>REFLEX with Sanitizer</strong>,
            designed to ensure touch-free sanitization during COVID-19.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <img src="/initiatives/initiative-1.jpg" alt="BRISK AID System" loading="lazy" className="shadow-md bg-white" />
            <img src="/initiatives/initiative-2.jpg" alt="Blood Donor App" loading="lazy" className="shadow-md bg-white" />
            <img src="/initiatives/initiative-3.jpg" alt="Reflex with Sanitizer Device" loading="lazy" className="shadow-md bg-white" />
            <img src="/initiatives/initiative-4.jpg" alt="Social Innovation Project" loading="lazy" className="shadow-md bg-white" />
            <img src="/initiatives/initiative-5.jpg" alt="Community Health Initiative" loading="lazy" className="shadow-md bg-white" />
            <img src="/initiatives/initiative-6.jpg" alt="Technology for Society" loading="lazy" className="shadow-md bg-white" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorldRecordsAndAwards;
