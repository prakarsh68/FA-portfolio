import { Briefcase, MapPin, ArrowUpRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Assistant Professor",
      department: "Computing Technologies",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      period: "May 2024 – Present",
      isCurrent: true,
      focus: ["Research", "Teaching", "Curriculum Dev"]
    },
    {
      id: 2,
      role: "Assistant Professor",
      department: "Computer Science & Engineering",
      institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
      location: "Chennai, India",
      period: "Oct 2017 – May 2024",
      duration: "6.5 Years",
      isCurrent: false,
      focus: ["Academic Mentoring", "Project Supervision"]
    }
  ];

  return (
    <section
      id="experience"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Academic Experience
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        {/* --- Experience Grid --- */}
        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className={`group relative grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 md:gap-12 items-start transition-all duration-500 hover:-translate-y-1 ${
                exp.isCurrent ? 'opacity-100' : 'opacity-85 hover:opacity-100'
              }`}
            >
              
              {/* --- LEFT COLUMN: Date & Duration --- */}
              <div className="text-left md:text-right space-y-2 pt-2">
                <div className="inline-flex md:flex md:flex-col items-center md:items-end gap-2">
                  
                  {/* Date Badge */}
                  <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border transition-colors duration-300 ${
                    exp.isCurrent 
                      ? "bg-accent text-white border-accent shadow-lg shadow-accent/20" 
                      : "bg-transparent text-muted-light dark:text-muted-dark border-border-light dark:border-border-dark group-hover:border-accent/50 group-hover:text-accent"
                  }`}>
                    {exp.period}
                  </span>

                  {/* Duration Label */}
                  {exp.duration && (
                    <span className="hidden md:block text-xs text-muted-light/60 dark:text-muted-dark/60 font-medium tracking-wider">
                      {exp.duration}
                    </span>
                  )}
                </div>
              </div>

              {/* --- RIGHT COLUMN: Content Card --- */}
              <div className={`relative p-8 rounded-sm border transition-all duration-300 bg-surface-light dark:bg-surface-dark ${
                exp.isCurrent 
                  ? "border-accent/50 shadow-xl shadow-accent/5" 
                  : "border-border-light dark:border-border-dark hover:border-accent/30 hover:shadow-lg"
              }`}>
                
                {/* Active Role Indicator (Pulsing Dot) */}
                {exp.isCurrent && (
                  <div className="absolute top-6 right-6 flex h-3 w-3" title="Current Position">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </div>
                )}

                {/* Role & Department */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-text-light dark:text-text-dark group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-medium tracking-wide text-xs md:text-sm mt-2 uppercase">
                      {exp.department}
                    </p>
                  </div>

                  {/* Institution & Location */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-muted-light dark:text-muted-dark">
                      <Briefcase size={18} className="mt-1 shrink-0 text-accent/70" />
                      <p className="text-lg leading-snug font-light">
                        {exp.institution}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-muted-light/70 dark:text-muted-dark/70">
                      <MapPin size={16} className="shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Focus Area Tags */}
                  <div className="pt-6 flex flex-wrap gap-2">
                    {exp.focus.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-base-light dark:bg-base-dark text-muted-light dark:text-muted-dark rounded border border-transparent hover:border-accent/30 hover:text-accent transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Action Icon */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight size={24} className="text-accent" />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;