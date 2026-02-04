import { Rocket, Users, Utensils, HeartPulse, Waves, Quote, Calendar, ArrowUpRight } from "lucide-react";

const EventLeadershipAndSocialService = () => {
  
  // --- Data Structure for Service Initiatives ---
  const initiatives = [
    {
      title: "Community Food Service",
      icon: <Utensils size={24} />,
      description: (
        <>
          Organized the <strong>“Free Food Truck”</strong> initiative (“Virunthali – Feed the Needy”) on World Food Day.
          <span className="block mt-2 text-xs border-l-2 border-accent pl-3 italic text-muted-light/80 dark:text-muted-dark/80">
            Launched by Music Director A.R. Raihanah & Lyricist Snehan.
          </span>
        </>
      ),
      images: ["/social-impact/food-1.jpg", "/social-impact/food-2.jpg"], // Ensure paths are correct
      gridCols: 2
    },
    {
      title: "Medical & Blood Support",
      icon: <HeartPulse size={24} />,
      description: (
        <>
          Serving as <strong>Project Lead</strong> for Raindrops Charity Foundation’s Medical Wing.
          <ul className="mt-2 space-y-1 text-sm list-disc list-inside marker:text-accent">
            <li>Providing <strong>24×7 blood support</strong>.</li>
            <li>Facilitated <strong>300+ units</strong> for emergency cases.</li>
          </ul>
        </>
      ),
      images: ["/social-impact/blood-1.jpg", "/social-impact/blood-2.jpg", "/social-impact/blood-3.jpg", "/social-impact/blood-4.jpg"],
      gridCols: 4
    },
    {
      title: "Differently-Abled Welfare",
      icon: <Users size={24} />,
      description: (
        <>
          Volunteered with the <strong>Tamil Nadu Udavikaram Differently Welfare Association</strong> to support the State Conference at Dr. MGR Janaki College.
        </>
      ),
      images: ["/social-impact/welfare-1.jpg", "/social-impact/welfare-2.jpg"],
      gridCols: 2
    },
    {
      title: "Inclusive Beach Access",
      icon: <Waves size={24} />,
      description: (
        <>
          Initiated steps to enable <strong>safe and dignified beach access</strong> for persons with disabilities, ensuring the joy of the ocean is accessible to all.
        </>
      ),
      images: ["/social-impact/beach-1.jpg", "/social-impact/beach-2.jpg", "/social-impact/beach-3.jpg"],
      gridCols: 3
    },
  ];

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
            Leadership & Social Impact
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          <p className="max-w-3xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed text-lg">
            Bridging the gap between academic excellence and social responsibility through sustained community initiatives and humanitarian support.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">

          {/* =========================================================
              1. FEATURED LEADERSHIP (HERO CARD)
             ========================================================= */}
          <div className="relative group p-8 md:p-12 rounded-sm border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-xl overflow-hidden hover:border-accent/30 transition-all duration-500">
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-700"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 text-accent mb-3">
                    <Rocket size={24} />
                    <span className="text-xs font-bold uppercase tracking-widest">Highlight Event</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-text-light dark:text-text-dark leading-tight">
                    Computing Technologies for Space Exploration
                  </h3>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-muted-light dark:text-muted-dark border-y border-border-light dark:border-border-dark py-4">
                   <div className="flex items-center gap-2">
                     <Calendar size={16} className="text-accent" />
                     <span className="font-medium">Feb 17, 2025</span>
                   </div>
                   <div className="w-[1px] h-4 bg-border-light dark:border-border-dark"></div>
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-text-light dark:text-text-dark">Role:</span>
                     <span>Convenor</span>
                   </div>
                </div>

                <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                  Organized a landmark session featuring <strong>Dr. Srimathy Kesan</strong> (CEO, Space Kidz India). The event focused on the intersection of computing and rocketry, while strongly advocating for <strong>gender inclusivity in STEM fields</strong>.
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group-hover:translate-x-1 transition-transform cursor-default">
                    View Event Details <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Image Grid (Masonry Style) */}
              <div className="grid grid-cols-2 gap-3">
                 <div className="col-span-2 h-48 overflow-hidden rounded-sm">
                   <img src="/social-impact/event-1.jpg" alt="Space Event Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="h-32 overflow-hidden rounded-sm">
                   <img src="/social-impact/event-2.jpg" alt="Space Event Side" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-75" />
                 </div>
                 <div className="h-32 overflow-hidden rounded-sm">
                   <img src="/social-impact/event-3.jpg" alt="Space Event Side" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-100" />
                 </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              2. COMMUNITY INITIATIVES GRID (Dynamic Rendering)
             ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            {initiatives.map((item, index) => (
              <article key={index} className="group flex flex-col h-full space-y-6">
                
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full border border-border-light dark:border-border-dark group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-text-light dark:text-text-dark group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="text-muted-light dark:text-muted-dark leading-relaxed flex-grow">
                  {item.description}
                </div>

                {/* Images */}
                <div className={`grid gap-2 ${item.gridCols === 4 ? 'grid-cols-4' : item.gridCols === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                  {item.images.map((src, imgIndex) => (
                    <div key={imgIndex} className="overflow-hidden rounded-sm aspect-video bg-surface-light dark:bg-surface-dark shadow-sm">
                      <img 
                        src={src} 
                        alt={`${item.title} ${imgIndex + 1}`} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out" 
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}

          </div>

          {/* =========================================================
              3. CLOSING QUOTE (Refined Typewriter)
             ========================================================= */}
          <div className="pt-12 md:pt-24 pb-12">
            <div className="relative max-w-5xl mx-auto p-12 md:p-20 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm shadow-2xl overflow-hidden">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60"></div>

              {/* Background Watermark */}
              <div className="absolute top-8 left-8 text-accent/5 dark:text-accent/5 pointer-events-none">
                <Quote size={160} />
              </div>

              <div className="relative z-10 text-center space-y-10">
                
                <blockquote className="font-mono text-lg md:text-xl text-muted-light dark:text-muted-dark leading-loose tracking-wide max-w-4xl mx-auto">
                  "As young individuals, we bear a <span className="text-text-light dark:text-text-dark font-bold border-b border-accent/40">social responsibility</span>, 
                  a constitutional opportunity, and a <span className="text-text-light dark:text-text-dark font-bold border-b border-accent/40">moral obligation</span> to assist others. 
                  I hope that my inventions and services to the nation are deserving of recognition."
                </blockquote>

                {/* Signature Block */}
                <div className="flex flex-col items-center justify-center pt-4">
                  
                  {/* Digital Signature */}
                  <div className="font-signature text-6xl md:text-7xl text-text-light dark:text-text-dark opacity-90 -rotate-2 transform pb-2">
                    Dr. Vivek Justus
                  </div>

                  {/* Underline */}
                  <div className="h-[2px] w-40 bg-accent/40 rounded-full"></div>
                  
                  <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                    Founder & Visionary
                  </div>

                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-accent/20"></div>
              <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-accent/20"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventLeadershipAndSocialService;