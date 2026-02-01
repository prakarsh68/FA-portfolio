import { Trophy, Award, Mic, HeartHandshake, ExternalLink, Newspaper, Globe } from "lucide-react";

const WorldRecordsAndAwards = () => {
  // Image placeholders (Ensure these match your actual file paths)
  const guinnessImages = ["/world-records/wr-1.jpg", "/world-records/wr-2.jpg", "/world-records/wr-3.jpg"];
  const awardImages = ["/awards/award-1.jpg", "/awards/award-2.jpg", "/awards/award-3.jpg"];
  const honorImages = ["/honors/honor-1.jpg", "/honors/honor-2.jpg", "/honors/honor-3.jpg", "/honors/honor-4.jpg"];
  const initiativeImages = ["/initiatives/initiative-1.jpg", "/initiatives/initiative-2.jpg", "/initiatives/initiative-3.jpg"];

  return (
    <section
      id="world-records"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">

        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-2">
            <Trophy size={14} />
            Global Recognition
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            World Records & Awards
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          <p className="max-w-3xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed">
            Recognitions received for social innovation, inclusive technology,
            and impactful contributions to public welfare and disability awareness.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-32">

          {/* =========================================================
              1. GUINNESS WORLD RECORD (HERO FEATURE)
             ========================================================= */}
          <div className="relative p-8 md:p-12 rounded-sm border border-accent/20 bg-surface-light dark:bg-surface-dark shadow-2xl overflow-hidden group">
            
            {/* Watermark Icon */}
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
              <Globe size={200} />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Text Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark leading-tight">
                    Guinness World Record
                  </h3>
                  <p className="text-accent font-bold tracking-widest text-sm uppercase">
                    & Asia Book of Records
                  </p>
                </div>

                <div className="space-y-4 text-muted-light dark:text-muted-dark text-lg leading-relaxed">
                  <p>
                    Organized and formed the <strong className="text-text-light dark:text-text-dark">world’s largest human image of a wheelchair accessibility symbol</strong> on 
                    December 3, 2018, marking the International Day of Persons with Disabilities.
                  </p>
                  <p>
                    This initiative mobilized thousands to promote inclusivity, accessibility, and equal participation in society.
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a 
                    href="https://www.guinnessworldrecords.com/world-records/501162-largest-human-image-of-a-wheelchair-accessibility%c2%a0symbol" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-sm font-bold uppercase tracking-wider text-xs hover:bg-accent-hover transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Official Record
                  </a>
                  <a 
                    href="https://www.veltech.edu.in/cse-guinness-world-record/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-border-light dark:border-border-dark text-text-light dark:text-text-dark rounded-sm font-bold uppercase tracking-wider text-xs hover:border-accent hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                    Institution Coverage
                  </a>
                </div>
              </div>

              {/* Image Grid (Masonry Style) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={guinnessImages[0]} alt="GWR 1" className="w-full h-48 object-cover rounded-sm shadow-md hover:scale-105 transition-transform duration-500" />
                  <img src={guinnessImages[1]} alt="GWR 2" className="w-full h-32 object-cover rounded-sm shadow-md hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="pt-8">
                  <img src={guinnessImages[2]} alt="Certificate" className="w-full h-64 object-cover rounded-sm shadow-md hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

            </div>
          </div>

          {/* =========================================================
              2. YOUNG INNOVATORS AWARD
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
            
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <img src={awardImages[0]} alt="Award 1" className="col-span-2 w-full h-48 object-cover rounded-sm shadow-md" />
              <img src={awardImages[1]} alt="Award 2" className="w-full h-40 object-cover rounded-sm shadow-md" />
              <img src={awardImages[2]} alt="Award 3" className="w-full h-40 object-cover rounded-sm shadow-md" />
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-accent mb-2">
                <Award size={28} />
                <span className="h-[1px] w-12 bg-accent"></span>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl text-text-light dark:text-text-dark">
                Young Innovators Award – 2019
              </h3>
              
              <p className="text-muted-light dark:text-muted-dark text-lg leading-relaxed">
                Honored by India’s <strong className="text-text-light dark:text-text-dark">3M–CII (Confederation of Indian Industry)</strong> for the societal impact of my innovation. This prestigious recognition was awarded at the CII Innovation Summit in Bangalore.
              </p>

              <div className="space-y-3">
                <a 
                  href="http://www.3myounginnovatorschallenge.com/winners-of-the-2019-3m-cii-young-innovators-challenge-awards/" 
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform"></span>
                  <span className="underline decoration-transparent group-hover:decoration-accent transition-all">3M–CII Official Winner's Page</span>
                </a>
                <a 
                  href="https://www.thehindu.com/news/cities/chennai/city-teams-bag-awards-for-innovations/article29494250.ece" 
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform"></span>
                  <span className="underline decoration-transparent group-hover:decoration-accent transition-all">Feature in The Hindu</span>
                </a>
              </div>
            </div>
          </div>

          {/* =========================================================
              3. HONORS & MEDIA (GRID LAYOUT)
             ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Honors */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Mic className="text-accent" size={24} />
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark">Public Honors</h3>
              </div>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                Felicitation by <strong>Mr. Thalavai Sundaram Pillai</strong>, former Member of Legislative Assembly, for contributions to social welfare innovation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {honorImages.map((img, i) => (
                  <img key={i} src={img} alt={`Honor ${i}`} className="w-full h-32 object-cover rounded-sm shadow-sm hover:opacity-90 transition-opacity" />
                ))}
              </div>
            </div>

            {/* Media Features */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Newspaper className="text-accent" size={24} />
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark">Media Coverage</h3>
              </div>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                Featured as a <strong>Young Innovator of India</strong> across national media platforms on National Youth Day.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Eenadu Youth Special Feature", link: "https://m.eenadu.net/sundaymagazine/article/320000041" },
                  { title: "EDEX Live: Innovation Feature", link: "https://m.edexlive.com/article/people/this-device-can-send-automatic-signals-to-108-in-the-event-of-an-accident-in-just-under-three-minute/8362" },
                  { title: "Careers360: Record Breakers", link: "https://news.careers360.com/vel-tech-cse-students-create-guinness-world-record" },
                ].map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm group hover:border-accent transition-colors"
                  >
                    <span className="font-medium text-text-light dark:text-text-dark group-hover:text-accent transition-colors">{item.title}</span>
                    <ExternalLink size={16} className="text-muted-light dark:text-muted-dark group-hover:text-accent" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================
              4. SOCIAL INITIATIVES (CAROUSEL / STRIP)
             ========================================================= */}
          <div className="pt-16 border-t border-border-light dark:border-border-dark">
             <div className="text-center mb-12">
               <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full text-accent mb-4">
                 <HeartHandshake size={24} />
               </div>
               <h3 className="font-serif text-3xl text-text-light dark:text-text-dark">Social Initiatives</h3>
               <p className="mt-4 text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
                  Developing systems for public good, from blood donor apps to the <strong>REFLEX</strong> touch-free sanitization units during COVID-19.
               </p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {initiativeImages.map((img, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-sm aspect-square">
                    <img 
                      src={img} 
                      alt={`Initiative ${i}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                ))}
                {/* Add a "More" block if needed */}
                <div className="flex items-center justify-center bg-surface-light dark:bg-surface-dark border border-dashed border-border-light dark:border-border-dark rounded-sm aspect-square">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-light dark:text-muted-dark text-center px-4">
                    Impact through<br/>Innovation
                  </span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorldRecordsAndAwards;