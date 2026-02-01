import { useState } from "react";
import { BookOpen, ExternalLink, FileText, Search, ChevronDown, ChevronUp } from "lucide-react";

const Publications = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Data Structure
  const publications = [
    {
      id: 17,
      title: "Industrial Internet of Things (IIoT): Transforming Industrial Operations through Advanced Connectivity",
      authors: "S. Viveka et al.",
      venue: "IEEE I3CEET",
      year: "2024",
      doi: null
    },
    {
      id: 16,
      title: "Wireless Power Transfer Technologies: State-of-the-Art and Future Prospects",
      authors: "V. Justus et al.",
      venue: "IEEE I3CEET",
      year: "2024",
      doi: null
    },
    {
      id: 15,
      title: "Advanced Security Model for Cloud Infrastructure Using Cryptography and Steganography",
      authors: "T. Sujithra et al.",
      venue: "IEEE IIPEM",
      year: "2024",
      doi: null
    },
    {
      id: 14,
      title: "Dynamic Weather Prediction: Real-Time Analysis using Deep Learning Techniques and Live Data",
      authors: "M. N. K et al.",
      venue: "ICSSAS",
      year: "2024",
      doi: null
    },
    {
      id: 13,
      title: "Enhancing Liver Tumor Segmentation with UNet-ResNet: Leveraging ResNet’s Power",
      authors: "Sheela et al.",
      venue: "IOS Press",
      year: "2024",
      doi: null
    },
    {
      id: 12,
      title: "Energy-Efficient Routing Approach Based on Free Hold Participation and Acquisition Hierarchical Network",
      authors: "Dumka et al.",
      venue: "International Journal of Business Analytics",
      year: "2024",
      doi: null
    },
    {
      id: 11,
      title: "Machine Learning Based Fault-Oriented Predictive Maintenance in Industry 4.0",
      authors: "V. Justus and G. R. Kanagachidambaresan",
      venue: "Intl. Journal of System Assurance Engineering and Management",
      year: "2022",
      doi: null
    },
    {
      id: 10,
      title: "Intelligent Single-Board Computer for Industry 4.0: Efficient Real-Time Monitoring System",
      authors: "V. Justus and G. R. Kanagachidambaresan",
      venue: "Microprocessors and Microsystems",
      year: "2022",
      doi: null
    },
    {
      id: 9,
      title: "Context Awareness Technology Using Parallel Mining for Ambient Assisted Living System",
      authors: "J. Vivek et al.",
      venue: "IJET",
      year: "2018",
      doi: null
    },
    {
      id: 8,
      title: "Automated Extraterritorial Averting System",
      authors: "J. Vivek et al.",
      venue: "Journal of Computational and Theoretical Nanoscience",
      year: "2018",
      doi: null
    },
    {
      id: 7,
      title: "Descry and Divulge Hitch by Using Hitch Entrapment-Bug Catcher",
      authors: "J. Vivek et al.",
      venue: "IJET",
      year: "2018",
      doi: null
    },
    {
      id: 6,
      title: "Successive Duplicate Detection in Scalable Datasets in Cloud Database",
      authors: "N. Rajkumar et al.",
      venue: "IJET",
      year: "2018",
      doi: "10.14419/ijet.v7i2.4.11167"
    },
    {
      id: 5,
      title: "Emergency Detection and Rescue System Using Mobile Communication Technology",
      authors: "J. Vivek et al.",
      venue: "Conference Proceedings",
      year: "2017",
      doi: null
    },
    {
      id: 4,
      title: "An Enhanced Tourism Recommendation System with Relevancy Feedback Mechanism",
      authors: "C. Devasanthiya et al.",
      venue: "Springer",
      year: "2016",
      doi: "10.1007/978-81-322-2674-1_28"
    },
    {
      id: 3,
      title: "Trawler Ocean Care System",
      authors: "J. Vivek, M. Lakshmi, and D. Manuel",
      venue: "Pakistan Journal of Biotechnology",
      year: "2016",
      doi: null
    },
    {
      id: 2,
      title: "Analysis and prediction of natural disaster using spatial data mining",
      authors: "J. Refonaa, M. Lakshmi, and J. Vivek",
      venue: "ICCPCT",
      year: "2015",
      doi: "10.1109/ICCPCT.2015.7159379"
    },
    {
      id: 1,
      title: "Tracking of biomedical waste using GPS",
      authors: "Lakshmi, J. Refonaa, and J. Vivek",
      venue: "ICCPCT",
      year: "2015",
      doi: "10.1109/ICCPCT.2015.7159516"
    }
  ];

  // Logic: Show all if toggled, otherwise limit to top 3
  const displayedPublications = showAll ? publications : publications.slice(0, 3);

  return (
    <section
      id="publications"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Publications & Research
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          
          <p className="max-w-3xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed">
            Peer-reviewed journal articles, conference proceedings, and indexed
            publications reflecting sustained contributions in Embedded Systems, 
            Cloud Computing, and Industry 4.0.
          </p>

          {/* Research Profiles */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a 
              href="https://www.scopus.com/authid/detail.uri?authorId=57215221367" 
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 border border-border-light dark:border-border-dark rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              <FileText size={16} />
              <span>Scopus ID</span>
            </a>
            
            <a 
              href="https://orcid.org/0000-0003-3865-0386" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border-light dark:border-border-dark rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              <BookOpen size={16} />
              <span>ORCID Profile</span>
            </a>
          </div>
        </div>

        {/* --- PUBLICATIONS LIST --- */}
        <div className="max-w-5xl mx-auto relative">
           
           {/* Decorative search icon background */}
           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
             <Search size={100} className="text-accent" />
           </div>

           <div className="space-y-6">
             {displayedPublications.map((pub) => (
               <div 
                 key={pub.id}
                 className="group relative p-6 sm:p-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm hover:border-accent/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in"
               >
                 <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                   
                   {/* Left: Content */}
                   <div className="space-y-3 flex-1">
                     <h3 className="font-serif text-xl text-text-light dark:text-text-dark group-hover:text-accent transition-colors">
                       {pub.title}
                     </h3>
                     
                     <p className="text-sm text-muted-light dark:text-muted-dark italic">
                       {pub.authors}
                     </p>

                     <div className="flex flex-wrap items-center gap-3 pt-2">
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-sm">
                          {pub.year}
                        </span>
                        <span className="text-xs font-medium text-muted-light/80 dark:text-muted-dark/80 uppercase tracking-wide border-l pl-3 border-border-light dark:border-border-dark">
                          {pub.venue}
                        </span>
                        {pub.doi && (
                          <span className="hidden sm:inline-block text-[10px] text-muted-light/60 dark:text-muted-dark/60 font-mono border-l pl-3 border-border-light dark:border-border-dark truncate max-w-[200px]">
                            DOI: {pub.doi}
                          </span>
                        )}
                     </div>
                   </div>

                   {/* Right: Action Icon */}
                   <div className="shrink-0 pt-1">
                     <a 
                       href={pub.doi ? `https://doi.org/${pub.doi}` : "#"} 
                       target="_blank"
                       rel="noopener noreferrer"
                       className={`w-10 h-10 flex items-center justify-center rounded-full border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark transition-all duration-300 ${pub.doi ? 'hover:bg-accent hover:text-white hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent' : 'opacity-30 cursor-not-allowed'}`}
                       title={pub.doi ? "View Publisher Site" : "Link unavailable"}
                     >
                       <ExternalLink size={18} />
                     </a>
                   </div>

                 </div>
               </div>
             ))}
           </div>

           {/* --- VIEW MORE TOGGLE --- */}
           {publications.length > 3 && (
             <div className="mt-16 text-center">
               <button
                 onClick={() => setShowAll(!showAll)}
                 className="group inline-flex items-center gap-2 px-8 py-3 bg-base-light dark:bg-base-dark border border-accent/30 rounded-full text-xs font-bold uppercase tracking-widest text-text-light dark:text-text-dark hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
               >
                 <span>{showAll ? "View Less" : "View More Publications"}</span>
                 {showAll ? (
                   <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                 ) : (
                   <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                 )}
               </button>
             </div>
           )}

        </div>
      </div>
    </section>
  );
};

export default Publications;