import { Award } from "lucide-react";

const Education = () => {
  // Data array for cleaner rendering and easy updates
  const educationHistory = [
    {
      id: 1,
      period: "Dec 2018 – Jan 2024",
      degree: "Ph.D. in Computer Science and Engineering",
      institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai, India",
      grade: null,
      type: "Doctorate"
    },
    {
      id: 2,
      period: "Aug 2015 – May 2017",
      degree: "M.E. in Computer Science and Engineering",
      institution: "Sathyabama University, Chennai, India",
      grade: "CGPA: 7.23",
      type: "Postgraduate"
    },
    {
      id: 3,
      period: "Jun 2012 – Apr 2015",
      degree: "B.E. in Computer Science and Engineering",
      institution: "Sathyabama University, Chennai, India",
      grade: "CGPA: 6.57",
      type: "Undergraduate"
    },
    {
      id: 4,
      period: "Apr 2012",
      degree: "Diploma in Computer Science and Engineering",
      institution: "Morning Star Polytechnic College, Chunkankadai, India",
      grade: null,
      type: "Diploma"
    },
    {
      id: 5,
      period: "Mar 2007",
      degree: "Senior Secondary Education",
      institution: "St. Mary’s High School, Colachel, India",
      grade: null,
      type: "Schooling"
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-surface-light dark:bg-surface-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Education & Qualifications
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line (The Spine) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border-light dark:bg-border-dark md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationHistory.map((item, index) => {
              // Alternating layout for Desktop (Left/Right)
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* 1. Date / Period (Opposite Side) */}
                  <div className="w-full md:w-1/2 mb-2 md:mb-0 px-10 text-left md:text-center lg:text-right">
                     {/* Mobile Only Date */}
                    <div className={`md:hidden pl-8 mb-2 text-xs font-bold tracking-widest text-accent uppercase`}>
                      {item.period}
                    </div>
                    
                    {/* Desktop Date */}
                    <div className={`hidden md:block ${isEven ? 'text-left' : 'text-right'}`}>
                      <span className="text-xs font-bold tracking-widest text-accent uppercase bg-base-light dark:bg-base-dark px-3 py-1 rounded-full border border-accent/20">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* 2. Timeline Node (Center Dot) */}
                  <div className="absolute left-[11px] md:left-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center w-[18px] h-[18px] bg-base-light dark:bg-base-dark border-4 border-accent rounded-full z-10 shadow-sm"></div>

                  {/* 3. Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-10 ${!isEven ? 'md:pr-10 md:pl-0 md:text-right' : 'md:text-left'}`}>
                    <div className="group relative p-6 bg-base-light dark:bg-base-dark border border-border-light dark:border-border-dark hover:border-accent/40 transition-all duration-300 rounded-sm hover:shadow-lg hover:-translate-y-1">
                      
                      {/* Decorative Type Badge */}
                      <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-muted-light/40 dark:text-muted-dark/40 font-semibold group-hover:text-accent/60 transition-colors">
                        {item.type}
                      </span>

                      <h3 className="font-serif text-lg md:text-xl text-text-light dark:text-text-dark leading-tight group-hover:text-accent transition-colors">
                        {item.degree}
                      </h3>
                      
                      <p className="mt-3 text-sm md:text-base text-muted-light dark:text-muted-dark leading-relaxed">
                        {item.institution}
                      </p>

                      {item.grade && (
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-surface-light dark:bg-surface-dark rounded text-xs font-medium text-text-light dark:text-text-dark border border-border-light dark:border-border-dark">
                          <Award size={14} className="text-accent" />
                          {item.grade}
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom decorative cap for timeline line */}
          <div className="absolute bottom-0 left-[16px] md:left-1/2 w-2 h-2 bg-border-light dark:bg-border-dark rounded-full md:-translate-x-1/2"></div>
        
        </div>
      </div>
    </section>
  );
};

export default Education;