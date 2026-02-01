const SpecialAchievements = () => {
  return (
    <section
      id="special-achievements"
      className="bg-[#f7f4ef] py-40 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-36">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="font-serif text-5xl mb-8">
            Special Achievement
          </h2>
          <p className="max-w-3xl mx-auto text-[#6b645c] text-lg leading-relaxed">
            A pioneering indigenous innovation in emergency response systems,
            designed to save human lives through automation and rapid medical
            intervention.
          </p>
        </div>

        {/* AUTO RESCUE SYSTEM */}
        <div className="space-y-12">
          <h3 className="font-serif text-4xl">
            Auto Rescue System – Emergency Calling Device for 108
          </h3>

          <p className="text-[#6b645c] text-lg leading-relaxed">
            I invented the <strong>Auto Rescue System</strong>, a first-of-its-kind
            emergency calling device that automatically transmits accident
            location details to the 108 ambulance service without any human
            intervention. The device is compact, indigenous, and cost-effective.
          </p>

          <p className="text-[#6b645c] text-lg leading-relaxed">
            The product was officially launched on <strong>25 February 2016</strong>
            by <strong> Mr. Phillip A. Min</strong>, U.S. Consul General in Chennai,
            in the presence of eminent dignitaries from ISRO and international
            institutions.
          </p>

          {/* AUTO RESCUE IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <img src="/auto-rescue-1.jpg" alt="Auto Rescue System" className="shadow-md bg-white" />
            <img src="/auto-rescue-2.jpg" alt="Auto Rescue System" className="shadow-md bg-white" />
            <img src="/auto-rescue-3.jpg" alt="Auto Rescue System" className="shadow-md bg-white" />
          </div>

          {/* FEATURES */}
          <div>
            <h4 className="font-serif text-2xl mb-6">
              Salient Features
            </h4>
            <ul className="list-disc list-inside space-y-3 text-[#6b645c] text-lg">
              <li>First-of-its-kind two-way emergency communication</li>
              <li>Automatic GPS-based location transmission</li>
              <li>Cloud telephony integration with existing 108 infrastructure</li>
              <li>Callback system for real-time victim status assessment</li>
              <li>Supports accidents, fire, SOS, industrial and railway emergencies</li>
              <li>Cost-effective (₹1500–₹2000 in bulk production)</li>
            </ul>
          </div>

          {/* MEDIA LINKS */}
          <div>
            <h4 className="font-serif text-2xl mb-4">
              Media & Demonstrations
            </h4>
            <ul className="list-disc list-inside text-[#6b645c] text-lg space-y-2">
              <li><a href="https://www.youtube.com/watch?v=xjUU-BycCw4" target="_blank" className="underline">Demonstration Video 1</a></li>
              <li><a href="https://www.youtube.com/watch?v=oarnZQN1r_c" target="_blank" className="underline">Demonstration Video 2</a></li>
              <li><a href="https://www.youtube.com/watch?v=w0mdn4bfqa4" target="_blank" className="underline">Overview Video</a></li>
              <li><a href="https://www.kanyakumarimemes.com/automatic-call-device-108-ambulance-service/" target="_blank" className="underline">Media Coverage Article</a></li>
            </ul>
          </div>
        </div>

        {/* PANIC BUTTON SYSTEM */}
        <div className="space-y-12">
          <h3 className="font-serif text-4xl">
            Panic Button System for Elderly Care
          </h3>

          <p className="text-[#6b645c] text-lg leading-relaxed">
            A cloud-enabled panic device designed for elderly individuals.
            When activated, the device transmits satellite-based location data
            to hospitals and nearby contacts, enabling immediate assistance.
          </p>

          {/* PANIC IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <img src="/panic-1.png" alt="Panic Button Device" className="shadow-md bg-white" />
            <img src="/panic-2.png" alt="Panic Button Device" className="shadow-md bg-white" />
            <img src="/panic-3.png" alt="Panic Button Device" className="shadow-md bg-white" />
          </div>

          <p className="text-[#6b645c] text-lg">
            <a
              href="https://www.youtube.com/watch?v=65eFv1vThnA"
              target="_blank"
              className="underline"
            >
              Panic Device Launch Video
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default SpecialAchievements;
