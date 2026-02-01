import { BrainCircuit, Cpu, Factory, Code2, Database, Terminal } from "lucide-react";

const Expertise = () => {
  // 1. High-Level Research Domains
  const domains = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      icon: <BrainCircuit size={32} />,
      desc: "Applied machine learning, intelligent systems, and real-world AI deployments focusing on computer vision and predictive analytics.",
      stack: ["Python", "TensorFlow", "PyTorch", "OpenCV"]
    },
    {
      id: "iot",
      title: "Embedded Systems & IoT",
      icon: <Cpu size={32} />,
      desc: "Design of scalable, low-power smart devices and sensor-driven platforms bridging the physical and digital worlds.",
      stack: ["C++", "Arduino", "Raspberry Pi", "ESP32"]
    },
    {
      id: "industry",
      title: "Industry 4.0",
      icon: <Factory size={32} />,
      desc: "Automation, cyber-physical systems, and intelligent manufacturing ecosystems that drive operational efficiency.",
      stack: ["PLC", "SCADA", "Industrial IoT", "Digital Twins"]
    }
  ];

  // 2. Granular Technical Skills
  const toolkits = [
    {
      category: "Programming",
      icon: <Code2 size={20} />,
      tools: "Python, C, C++, JavaScript (ES6+), MATLAB"
    },
    {
      category: "Web Technologies",
      icon: <Terminal size={20} />,
      tools: "React.js, Node.js, HTML5/CSS3, Tailwind CSS"
    },
    {
      category: "Data & Cloud",
      icon: <Database size={20} />,
      tools: "MySQL, MongoDB, Firebase, AWS (Basics)"
    }
  ];

  return (
    <section className="bg-surface-light dark:bg-surface-dark py-24 md:py-32 transition-colors duration-300">
      <div className="container px-6 mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Areas of Distinction
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          <p className="max-w-2xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed">
            Bridging the gap between theoretical computer science and practical industrial application.
          </p>
        </div>

        {/* --- PART 1: RESEARCH DOMAINS (CARDS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {domains.map((domain) => (
            <div 
              key={domain.id}
              className="group relative bg-base-light dark:bg-base-dark p-8 border border-border-light dark:border-border-dark hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Dynamic Accent Line */}
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full"></span>
              
              {/* Icon */}
              <div className="mb-6 text-muted-light dark:text-muted-dark group-hover:text-accent transition-colors duration-300">
                {domain.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="font-serif text-2xl mb-4 text-text-light dark:text-text-dark">
                {domain.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-light dark:text-muted-dark mb-8">
                {domain.desc}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {domain.stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded bg-surface-light dark:bg-surface-dark text-muted-light/80 dark:text-muted-dark/80 border border-border-light dark:border-border-dark group-hover:border-accent/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- PART 2: TECHNICAL PROFICIENCY (LISTS) --- */}
        <div className="border-t border-border-light dark:border-border-dark pt-16">
          <h4 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12">
            Technical Proficiency
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {toolkits.map((kit) => (
              <div key={kit.category} className="text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                  <div className="p-2 bg-base-light dark:bg-base-dark rounded-full text-accent">
                    {kit.icon}
                  </div>
                  <div>
                    <h5 className="font-serif text-lg text-text-light dark:text-text-dark mb-2">
                      {kit.category}
                    </h5>
                    <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                      {kit.tools}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;