import { CheckCircle, Video, Award, ExternalLink, PlayCircle } from "lucide-react";

// Placeholder for images (You can keep your local paths)
// Ensure these images exist in your public folder
const autoRescueImages = ["/auto-rescue-1.jpg", "/auto-rescue-2.jpg", "/auto-rescue-3.jpg"];
const panicImages = ["/panic-1.png", "/panic-2.png", "/panic-3.png"];

const SpecialAchievements = () => {
  return (
    <section
      id="special-achievements"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-2">
            <Award size={14} />
            Innovation Spotlight
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Special Achievements
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          <p className="max-w-3xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed">
            Pioneering indigenous innovations in emergency response systems,
            designed to save human lives through automation and rapid medical intervention.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-32">

          {/* =========================================================
              PROJECT 1: AUTO RESCUE SYSTEM
             ========================================================= */}
          <div className="space-y-12">
            
            {/* Header & Launch Info */}
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-serif text-3xl md:text-4xl text-text-light dark:text-text-dark mb-2">
                  Auto Rescue System
                </h3>
                <p className="text-accent font-bold tracking-widest text-sm uppercase">
                  Emergency Calling Device for 108 Service
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Description */}
                <div className="space-y-6 text-muted-light dark:text-muted-dark leading-relaxed text-lg">
                  <p>
                    I invented the <strong className="text-text-light dark:text-text-dark">Auto Rescue System</strong>, 
                    a first-of-its-kind emergency calling device that automatically transmits accident
                    location details to the 108 ambulance service without any human
                    intervention. The device is compact, indigenous, and cost-effective.
                  </p>
                </div>

                {/* Launch Highlight Box */}
                <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 rounded-sm relative overflow-hidden group hover:border-accent/40 transition-colors">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award size={80} />
                  </div>
                  <h4 className="font-serif text-lg text-text-light dark:text-text-dark mb-3">
                    Official Product Launch
                  </h4>
                  <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed mb-4">
                    Unveiled on <span className="font-semibold text-accent">25 February 2016</span> by:
                  </p>
                  <p className="font-serif text-xl text-text-light dark:text-text-dark">
                    Mr. Phillip A. Min
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-light/70 dark:text-muted-dark/70">
                    U.S. Consul General, Chennai
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {autoRescueImages.map((src, idx) => (
                <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-200 dark:bg-gray-800 shadow-md">
                  <img 
                    src={src} 
                    alt={`Auto Rescue System ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* Features & Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
              
              {/* Salient Features */}
              <div>
                <h4 className="font-serif text-2xl text-text-light dark:text-text-dark mb-6 flex items-center gap-3">
                  Salient Features
                </h4>
                <ul className="space-y-4">
                  {[
                    "First-of-its-kind two-way emergency communication",
                    "Automatic GPS-based location transmission",
                    "Cloud telephony integration with 108 infrastructure",
                    "Callback system for real-time victim status",
                    "Supports fire, SOS, industrial & railway emergencies",
                    "Cost-effective (₹1500–₹2000 production cost)"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-light dark:text-muted-dark">
                      <CheckCircle size={20} className="text-accent shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Media Links */}
              <div>
                <h4 className="font-serif text-2xl text-text-light dark:text-text-dark mb-6 flex items-center gap-3">
                  Media & Demonstrations
                </h4>
                <div className="space-y-4">
                  <a 
                    href="https://www.youtube.com/watch?v=xjUU-BycCw4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm hover:border-accent hover:shadow-md group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <PlayCircle className="text-accent group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-text-light dark:text-text-dark">Demonstration Video 1</span>
                    </div>
                    <ExternalLink size={16} className="text-muted-light dark:text-muted-dark" />
                  </a>

                  <a 
                    href="https://www.kanyakumarimemes.com/automatic-call-device-108-ambulance-service/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm hover:border-accent hover:shadow-md group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <ExternalLink className="text-accent group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-text-light dark:text-text-dark">Media Coverage Article</span>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-light dark:text-muted-dark">Read</span>
                  </a>
                  
                  {/* Additional links can go here following same pattern */}
                </div>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-border-light dark:bg-border-dark"></div>

          {/* =========================================================
              PROJECT 2: PANIC BUTTON SYSTEM
             ========================================================= */}
          <div className="space-y-12">
             <div className="border-l-4 border-accent pl-6">
                <h3 className="font-serif text-3xl md:text-4xl text-text-light dark:text-text-dark mb-2">
                  Panic Button System
                </h3>
                <p className="text-accent font-bold tracking-widest text-sm uppercase">
                  Cloud-Enabled Elderly Care Safety
                </p>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-10 items-center">
              <p className="text-muted-light dark:text-muted-dark text-lg leading-relaxed">
                A cloud-enabled panic device designed for elderly individuals.
                When activated, the device transmits satellite-based location data
                to hospitals and nearby contacts, enabling immediate assistance.
                This system bridges the gap between distress and response.
              </p>
              
              <a 
                href="https://www.youtube.com/watch?v=65eFv1vThnA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-surface-light dark:bg-surface-dark border-2 border-border-light dark:border-border-dark text-text-light dark:text-text-dark font-bold uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-colors"
              >
                <Video size={18} />
                Watch Launch
              </a>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {panicImages.map((src, idx) => (
                <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-200 dark:bg-gray-800 shadow-md">
                  <img 
                    src={src} 
                    alt={`Panic Button Device ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialAchievements;