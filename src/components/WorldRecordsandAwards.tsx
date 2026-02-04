import { useState, useEffect, useCallback } from "react";
import {
  Trophy,
  Award,
  Mic,
  HeartHandshake,
  ExternalLink,
  Newspaper,
  Globe,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

// --- Types ---
interface GalleryImage {
  src: string;
  alt: string;
  category: "guinness" | "award" | "honor" | "initiative";
}

const WorldRecordsAndAwards = () => {
  // --- Data ---
  const galleryData: GalleryImage[] = [
    // Guinness
    { src: "/world-records/wr-1.jpg", alt: "Guinness Record Formation", category: "guinness" },
    { src: "/world-records/wr-2.jpg", alt: "Accessibility Symbol", category: "guinness" },
    { src: "/world-records/wr-3.jpg", alt: "Official Certificate", category: "guinness" },
    // Awards
    { src: "/awards/award-1.jpg", alt: "3M-CII Award Ceremony", category: "award" },
    { src: "/awards/award-2.jpg", alt: "Young Innovator Presentation", category: "award" },
    { src: "/awards/award-3.jpg", alt: "Receiving the Award", category: "award" },
    // Honors
    { src: "/honors/honor-1.jpg", alt: "Public Felicitation", category: "honor" },
    { src: "/honors/honor-2.jpg", alt: "Guest of Honor", category: "honor" },
    { src: "/honors/honor-3.jpg", alt: "Keynote Speech", category: "honor" },
    { src: "/honors/honor-4.jpg", alt: "Recognition Event", category: "honor" },
    // Initiatives
    { src: "/initiatives/initiative-1.jpg", alt: "Social Initiative Launch", category: "initiative" },
    { src: "/initiatives/initiative-2.jpg", alt: "Community Service", category: "initiative" },
    { src: "/initiatives/initiative-3.jpg", alt: "Impact Project", category: "initiative" },
  ];

  // Helper to filter images by category for sections
  const getImages = (cat: string) => galleryData.filter((img) => img.category === cat);

  // --- Lightbox State ---
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Navigation Handlers
  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % galleryData.length);
    }
  }, [lightboxIndex, galleryData.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + galleryData.length) % galleryData.length);
    }
  }, [lightboxIndex, galleryData.length]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [lightboxIndex]);


  return (
    <section
      id="world-records"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-2">
            <Trophy size={14} />
            Global Recognition
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            World Records & Awards
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          <p className="max-w-2xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed">
            Honored for pioneering contributions to social innovation, accessibility, and technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">

          {/* =========================================================
              1. GUINNESS WORLD RECORD (Hero Feature)
             ========================================================= */}
          <div className="relative group p-8 md:p-12 border border-accent/20 bg-surface-light dark:bg-surface-dark shadow-2xl overflow-hidden rounded-sm">
            {/* Watermark */}
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <Globe size={240} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark leading-tight">
                    Guinness World Record
                  </h3>
                  <p className="text-accent font-bold tracking-widest text-sm uppercase">
                    & Asia Book of Records
                  </p>
                </div>
                
                <p className="text-muted-light dark:text-muted-dark text-lg leading-relaxed">
                  Organized and formed the <strong className="text-text-light dark:text-text-dark">world’s largest human image of a wheelchair accessibility symbol</strong> on December 3, 2018. 
                  This initiative mobilized thousands to promote inclusivity for persons with disabilities.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent hover:text-text-light transition-colors">
                    <ExternalLink size={16} /> View Official Record
                  </a>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 gap-4">
                {getImages("guinness").map((img, i) => (
                  <div 
                    key={i} 
                    className={`relative overflow-hidden rounded-sm cursor-pointer group/img ${i === 0 ? 'col-span-2' : ''}`}
                    onClick={() => setLightboxIndex(galleryData.indexOf(img))}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="text-white drop-shadow-md" size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================
              2. YOUNG INNOVATORS AWARD
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {getImages("award").map((img, i) => (
                <div 
                  key={i} 
                  className={`relative overflow-hidden rounded-sm cursor-pointer group/img ${i === 0 ? 'col-span-2' : ''}`}
                  onClick={() => setLightboxIndex(galleryData.indexOf(img))}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                     <ZoomIn className="text-white drop-shadow-md" size={24} />
                  </div>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent mb-2">
                <Award size={28} />
                <span className="h-[1px] w-12 bg-accent"></span>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl text-text-light dark:text-text-dark">
                Young Innovators Award – 2019
              </h3>
              
              <p className="text-muted-light dark:text-muted-dark text-lg leading-relaxed">
                Honored by India’s <strong className="text-text-light dark:text-text-dark">3M–CII (Confederation of Indian Industry)</strong> for societal impact through technological innovation. This prestigious recognition highlights contributions to public welfare systems.
              </p>
              
              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2 text-muted-light dark:text-muted-dark text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Awarded at CII Innovation Summit, Bangalore
                </li>
              </ul>
            </div>
          </div>

          {/* =========================================================
              3. HONORS & MEDIA (Split Layout)
             ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border-light dark:border-border-dark pt-16">
            
            {/* Honors Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Mic className="text-accent" size={24} />
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark">Public Honors</h3>
              </div>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                Felicitation by <strong>Mr. Thalavai Sundaram Pillai</strong> (former MLA) and other dignitaries for excellence in social service.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {getImages("honor").map((img, i) => (
                  <div 
                    key={i} 
                    className="overflow-hidden rounded-sm cursor-pointer group"
                    onClick={() => setLightboxIndex(galleryData.indexOf(img))}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>

            {/* Media Section (Text Heavy) */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Newspaper className="text-accent" size={24} />
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark">Media Coverage</h3>
              </div>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                Featured as a <strong>Young Innovator of India</strong> across national newspapers and digital platforms on National Youth Day.
              </p>
              
              <div className="space-y-4">
                {[
                  "Eenadu Youth Special Feature",
                  "EDEX Live: Innovation Spotlight",
                  "Careers360: Record Breakers",
                  "The Hindu: City Teams Bag Awards"
                ].map((title, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm group hover:border-accent transition-colors cursor-pointer">
                    <span className="font-medium text-text-light dark:text-text-dark group-hover:text-accent transition-colors">{title}</span>
                    <ExternalLink size={16} className="text-muted-light group-hover:text-accent" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================
              4. INITIATIVES (Strip Layout)
             ========================================================= */}
          <div className="space-y-8 pt-8">
             <div className="flex items-center justify-center gap-2 mb-4">
                <HeartHandshake className="text-accent" size={20} />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-light dark:text-muted-dark">Social Initiatives</span>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {getImages("initiative").map((img, i) => (
                   <div 
                      key={i} 
                      className="aspect-square overflow-hidden rounded-sm relative group cursor-pointer"
                      onClick={() => setLightboxIndex(galleryData.indexOf(img))}
                   >
                     <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-xs font-bold uppercase tracking-wider">{img.alt}</span>
                     </div>
                   </div>
                ))}
                {/* View More Placeholder */}
                <div className="aspect-square flex items-center justify-center bg-surface-light dark:bg-surface-dark border border-dashed border-border-light dark:border-border-dark rounded-sm text-center p-4">
                  <span className="text-xs text-muted-light dark:text-muted-dark">More initiatives impacting lives across India</span>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          LIGHTBOX OVERLAY
         ========================================================= */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center">
          
          {/* Controls */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full"
            aria-label="Previous Image"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full"
            aria-label="Next Image"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image & Caption Container */}
          <div className="flex flex-col items-center max-w-5xl w-full px-4 animate-fade-in">
            <div className="relative w-full max-h-[80vh] flex justify-center">
               <img
                src={galleryData[lightboxIndex].src}
                alt={galleryData[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
              />
            </div>
            
            <div className="mt-6 text-center space-y-2">
              <h4 className="text-white text-xl font-serif tracking-wide">
                {galleryData[lightboxIndex].alt}
              </h4>
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                {lightboxIndex + 1} / {galleryData.length}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default WorldRecordsAndAwards;