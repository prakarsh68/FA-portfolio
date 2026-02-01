import { Cloud, Cpu, Brain, Wifi, Layers, Settings, Briefcase, Calendar } from "lucide-react";

const SkillsInternship = () => {
  
  // 1. Structured Skills Data
  const skillSet = [
    { name: "Cloud Technology", icon: <Cloud size={20} /> },
    { name: "Embedded Systems", icon: <Cpu size={20} /> },
    { name: "Internet of Things (IoT)", icon: <Wifi size={20} /> },
    { name: "Machine Learning", icon: <Brain size={20} /> },
    { name: "Operating Systems", icon: <Layers size={20} /> },
    { name: "Industry 4.0", icon: <Settings size={20} /> },
  ];

  return (
    <section
      id="skills"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-2">
            <Cpu size={14} />
            Competencies
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Skills & Industrial Exposure
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* =========================================================
              LEFT COL: TECHNICAL SKILLS (GRID)
             ========================================================= */}
          <div>
            <h3 className="font-serif text-2xl text-text-light dark:text-text-dark mb-8 flex items-center gap-3">
              Technical Proficiency
              <span className="h-[1px] flex-grow bg-border-light dark:border-border-dark"></span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillSet.map((skill, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm hover:border-accent/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 bg-base-light dark:bg-base-dark text-muted-light dark:text-muted-dark rounded-full group-hover:text-accent transition-colors">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-text-light dark:text-text-dark group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              RIGHT COL: INTERNSHIP (FEATURED CARD)
             ========================================================= */}
          <div>
            <h3 className="font-serif text-2xl text-text-light dark:text-text-dark mb-8 flex items-center gap-3">
              Industrial Training
              <span className="h-[1px] flex-grow bg-border-light dark:border-border-dark"></span>
            </h3>

            <div className="relative group p-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300">
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full -mr-px -mt-px group-hover:bg-accent/10 transition-colors"></div>

              <div className="flex items-start gap-5">
                <div className="shrink-0 p-4 bg-base-light dark:bg-base-dark text-accent border border-border-light dark:border-border-dark rounded-sm">
                  <Briefcase size={28} />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-serif text-xl text-text-light dark:text-text-dark group-hover:text-accent transition-colors">
                      Bharat Sanchar Nigam Limited (BSNL)
                    </h4>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-light/60 dark:text-muted-dark/60 mt-1">
                      Vocational Training
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-base-light dark:bg-base-dark rounded text-xs font-medium text-muted-light dark:text-muted-dark border border-border-light dark:border-border-dark">
                    <Calendar size={14} className="text-accent" />
                    <span>20 June 2016 – 1 July 2016</span>
                  </div>

                  <p className="text-muted-light dark:text-muted-dark leading-relaxed text-sm pt-2">
                    Gained hands-on exposure to telecommunication infrastructure, switching systems, and network operations during this intensive industrial training program.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsInternship;