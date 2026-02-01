import { Rocket, Users, Utensils, HeartPulse, Waves, Quote, Calendar } from "lucide-react";

const EventLeadershipAndSocialService = () => {
  // Image placeholders
  const eventImages = ["/social-impact/event-1.jpg", "/social-impact/event-2.jpg", "/social-impact/event-3.jpg"];
  const welfareImages = ["/social-impact/welfare-1.jpg", "/social-impact/welfare-2.jpg"];
  const foodImages = ["/social-impact/food-1.jpg", "/social-impact/food-2.jpg"];
  const bloodImages = ["/social-impact/blood-1.jpg", "/social-impact/blood-2.jpg", "/social-impact/blood-3.jpg", "/social-impact/blood-4.jpg"];
  const beachImages = ["/social-impact/beach-1.jpg", "/social-impact/beach-2.jpg", "/social-impact/beach-3.jpg"];

  return (
    <section
      id="social-impact"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-2">
            <Users size={14} />
            Community & Leadership
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Event Leadership & Social Service
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          <p className="max-w-3xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed">
            Academic leadership and sustained community service initiatives
            focused on inclusivity, humanitarian support, and social responsibility.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">

          {/* =========================================================
              1. FEATURED LEADERSHIP (HERO CARD)
             ========================================================= */}
          <div className="relative p-8 md:p-12 rounded-sm border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-xl hover:border-accent/30 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-accent mb-2">
                  <Rocket size={24} />
                  <span className="text-xs font-bold uppercase tracking-widest">Recent Leadership</span>
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl text-text-light dark:text-text-dark leading-tight">
                  Computing Technologies for Space Exploration
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-light dark:text-muted-dark border-y border-border-light dark:border-border-dark py-4">
                   <div className="flex items-center gap-2">
                     <Calendar size={16} className="text-accent" />
                     <span>Feb 17, 2025</span>
                   </div>
                   <div className="w-[1px] h-4 bg-border-light dark:border-border-dark"></div>
                   <span>Role: <strong>Convenor</strong></span>
                </div>

                <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                  Organized and led a session featuring <strong>Dr. Srimathy Kesan</strong> (CEO, Space Kidz India) at SRM Institute. 
                  The event highlighted computing in rocket simulations and emphasized <strong>gender inclusivity in STEM</strong>.
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-3">
                 <img src={eventImages[0]} alt="Space Event 1" className="col-span-2 w-full h-48 object-cover rounded-sm shadow-md hover:opacity-90 transition-opacity" />
                 <img src={eventImages[1]} alt="Space Event 2" className="w-full h-32 object-cover rounded-sm shadow-sm hover:opacity-90 transition-opacity" />
                 <img src={eventImages[2]} alt="Space Event 3" className="w-full h-32 object-cover rounded-sm shadow-sm hover:opacity-90 transition-opacity" />
              </div>
            </div>
          </div>

          {/* =========================================================
              2. COMMUNITY INITIATIVES GRID
             ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* --- CARD: FOOD SERVICE --- */}
            <div className="group space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full">
                  <Utensils size={24} />
                </div>
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark">Community Food Service</h3>
              </div>
              
              <div className="space-y-4 text-muted-light dark:text-muted-dark leading-relaxed">
                <p>
                  Organized the <strong>“Free Food Truck”</strong> initiative (“Virunthali – Feed the Needy”) on World Food Day in association with Biriyani Brothers.
                </p>
                <p className="text-sm border-l-2 border-accent pl-4 italic">
                  Launched by Music Director A.R. Raihanah and Lyricist Snehan.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {foodImages.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-sm aspect-video">
                    <img src={src} alt="Food Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* --- CARD: MEDICAL WING --- */}
            <div className="group space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full">
                  <HeartPulse size={24} />
                </div>
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark">Medical & Blood Support</h3>
              </div>
              
              <div className="space-y-4 text-muted-light dark:text-muted-dark leading-relaxed">
                <p>
                  Serving as <strong>Project Lead</strong> for Raindrops Charity Foundation’s Medical Wing.
                </p>
                <ul className="text-sm space-y-1 pl-4 list-disc marker:text-accent">
                   <li>Providing <strong>24×7 blood support</strong>.</li>
                   <li>Delivered <strong>over 300 units</strong> to emergency victims.</li>
                </ul>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {bloodImages.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-sm aspect-square">
                    <img src={src} alt="Blood Donation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* --- CARD: WELFARE --- */}
            <div className="group space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full">
                  <Users size={24} />
                </div>
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark">Differently-Abled Welfare</h3>
              </div>
              
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                Volunteered with the <strong>Tamil Nadu Udavikaram Differently Welfare Association</strong> to support the State Conference at Dr. MGR Janaki College.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {welfareImages.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-sm aspect-video">
                    <img src={src} alt="Welfare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* --- CARD: BEACH ACCESS --- */}
            <div className="group space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full">
                  <Waves size={24} />
                </div>
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark">Inclusive Beach Access</h3>
              </div>
              
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                Initiated steps to enable safe and dignified beach access for persons with disabilities, ensuring the joy of the ocean is accessible to all.
              </p>

              <div className="grid grid-cols-3 gap-2">
                {beachImages.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-sm aspect-square">
                    <img src={src} alt="Beach Access" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* =========================================================
              3. CLOSING QUOTE (TYPEWRITER STYLE)
             ========================================================= */}
          <div className="pt-24 pb-12">
            <div className="relative max-w-5xl mx-auto p-12 md:p-16 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm shadow-2xl overflow-hidden">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

              {/* Huge Background Quote Mark */}
              <div className="absolute top-8 left-8 text-accent/5 dark:text-accent/5 pointer-events-none">
                <Quote size={140} />
              </div>

              <div className="relative z-10 text-center space-y-12">
                
                {/* TYPEWRITER STYLE UPDATE:
                   - font-mono: Typewriter font
                   - text-lg/xl: Subtle sizing
                   - leading-loose: airy feeling
                   - text-muted: Not pitch black, softer reading
                */}
                <blockquote className="font-mono text-lg md:text-xl text-muted-light dark:text-muted-dark leading-loose tracking-wide max-w-4xl mx-auto">
                  "As young individuals, we bear a <span className="text-text-light dark:text-text-dark font-bold">social responsibility</span>, 
                  a constitutional opportunity, and a <span className="text-text-light dark:text-text-dark font-bold">moral obligation</span> to assist others. 
                  I hope that my inventions and services to the nation are deserving of recognition."
                </blockquote>

                {/* Signature Block */}
                <div className="flex flex-col items-center justify-center gap-2">
                  
                  {/* Digital Signature */}
                  <div className="font-signature text-6xl text-text-light dark:text-text-dark opacity-90 -rotate-2 transform pb-2">
                    Dr. Vivek Justus
                  </div>

                  {/* Underline */}
                  <div className="h-[2px] w-32 bg-accent/30"></div>

                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-accent/20"></div>
              <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-accent/20"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventLeadershipAndSocialService;