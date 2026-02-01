import { Ambulance, Ship, Radio, Calendar, Users, Cpu } from "lucide-react";

const AcademicProjects = () => {
  // Data array for easy management
  const projects = [
    {
      id: 1,
      title: "Auto Rescue System",
      icon: <Ambulance size={28} />,
      period: "Mar 2014 – Feb 2016",
      team: "Individual Project",
      role: "Developer",
      tech: ["Embedded Systems", "Cloud Integration", "GPS/GSM"],
      desc: "In critical road accident scenarios, victims often depend on manual intervention by bystanders. This automated emergency response mechanism detects accident events and instantly transmits precise location data to ambulance services via cloud communication, significantly reducing response time."
    },
    {
      id: 2,
      title: "Trawler Ocean Care System",
      icon: <Ship size={28} />,
      period: "Mar 2016 – Jun 2017",
      team: "Individual Project",
      role: "Developer",
      tech: ["Embedded Systems", "Geo-Fencing", "Safety Alerts"],
      desc: "Addresses the increasing incidence of inadvertent international maritime border crossings by fishermen. This embedded safety solution provides real-time alerts when vessels approach restricted maritime boundaries, enhancing situational awareness and preventing legal and safety hazards."
    },
    {
      id: 3,
      title: "Panic Button System",
      icon: <Radio size={28} />,
      period: "Jun 2017",
      team: "Team Size: 2",
      role: "Developer",
      tech: ["Cloud Communication", "Satellite Tracking", "IoT"],
      desc: "Designed to assist elderly individuals during emergencies. Upon activation, the device captures real-time latitude and longitude data via satellite and transmits it to a centralized platform. The system alerts nearby hospitals and neighbors, enabling rapid intervention."
    }
  ];

  return (
    <section
      id="projects"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">

        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Academic & Applied Projects
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          <p className="max-w-2xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed">
            Selected projects demonstrating applied research, real-world problem
            solving, and the integration of embedded systems with strong societal relevance.
          </p>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 p-8 md:p-10 rounded-sm border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:shadow-xl hover:border-accent/30 transition-all duration-500 hover:-translate-y-1"
            >
              
              {/* Decorative Accent Line */}
              <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-accent/20 group-hover:bg-accent transition-colors duration-500 hidden md:block"></div>

              {/* --- LEFT: Metadata --- */}
              <div className="space-y-6">
                
                {/* Icon & Title Group */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-base-light dark:bg-base-dark rounded-full text-accent border border-border-light dark:border-border-dark group-hover:text-white group-hover:bg-accent transition-colors duration-300">
                    {project.icon}
                  </div>
                  <h3 className="md:hidden font-serif text-2xl text-text-light dark:text-text-dark">
                    {project.title}
                  </h3>
                </div>

                {/* Info Tags */}
                <div className="space-y-3 text-sm text-muted-light dark:text-muted-dark">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-accent" />
                    <span className="font-medium">{project.period}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={16} className="text-accent" />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu size={16} className="text-accent" />
                    <span>{project.role}</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-base-light dark:bg-base-dark border border-border-light dark:border-border-dark rounded text-muted-light dark:text-muted-dark group-hover:border-accent/50 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* --- RIGHT: Description --- */}
              <div className="space-y-4">
                <h3 className="hidden md:block font-serif text-3xl text-text-light dark:text-text-dark group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-light dark:text-muted-dark leading-relaxed text-lg font-light">
                  {project.desc}
                </p>

                {/* Interactive 'Read More' line (Purely visual) */}
                <div className="pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="h-[1px] w-12 bg-accent"></span>
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">Project Details</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;