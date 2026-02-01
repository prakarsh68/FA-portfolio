import { Award, Mic, Cpu, Users, BookOpen, GraduationCap, Lightbulb, CheckCircle } from "lucide-react";

const AcademicEngagements = () => {
  
  // Data Structure for cleaner rendering
  const sections = [
    {
      id: "achievements",
      title: "Key Achievements",
      icon: <Award size={24} />,
      items: [
        "Launched 'Auto Rescue System' (108 Device) as a product by Sathyabama University.",
        "Recipient of the Best Project Award from Sathyabama University.",
        "Performed for All India Radio broadcast: “An Emergency Calling Device for 108”.",
        "Honored by Rev. Dr. Jerome Dhas SOB, Bishop of Kuzhithurai, for innovation.",
        "Convenor: “Computing Technologies in Space Exploration” (Feb 2025) with Dr. Srimathy Kesan.",
        "Coordinated Project Expo 2K18 at Vel Tech Rangarajan Dr. Sagunthala R&D Institute."
      ]
    },
    {
      id: "resource",
      title: "Resource Person & Reviewer",
      icon: <Mic size={24} />,
      items: [
        "Reviewer: Smart India Hackathon (SIH) – Dept of AI & Data Science (Sep 2024).",
        "Resource Person: “Navigating the Start-ups Ecosystem” — Udaya School of Eng. (Oct 2024).",
        "Speaker on Innovation & Start-ups: St. Xavier’s Catholic College of Engineering (Oct 2024)."
      ]
    },
    {
      id: "certifications",
      title: "Online Certifications",
      icon: <Cpu size={24} />,
      items: [
        "Neural Networks and Deep Learning — University of Michigan (Coursera).",
        "Structuring Machine Learning Projects — University of Michigan (Coursera).",
        "Programming for Everybody (Python) — University of Michigan (Coursera)."
      ]
    },
    {
      id: "memberships",
      title: "Professional Memberships",
      icon: <Users size={24} />,
      items: [
        "AICTE–MIC Innovation Ambassador (Expert: Entrepreneurship Dev) — ID: IC201810082.",
        "Student Member: Society for Engineering Education Enrichment (SEEE) — ID: IND TN 9999 9999 9256."
      ]
    },
    {
      id: "workshops",
      title: "Workshops & Training",
      icon: <BookOpen size={24} />,
      items: [
        "Pedagogical Practices & Tools for Effective Teaching — IEEE Computer Society (2024).",
        "Faculty Immersive Workshop on Experiential Learning — SRMIST (2024).",
        "International Webinar on “E-Business and Cyber Security” (2020).",
        "Cyber Security Expert Workshop — Sathyabama University.",
        "Remote Sensing Technology and Applications — ICTACT & Vel Tech."
      ]
    },
    {
      id: "faculty",
      title: "Faculty Induction",
      icon: <GraduationCap size={24} />,
      items: [
        "Innovation Ambassador (AI) Advanced Level Training — AICTE (2021–22).",
        "Faculty Induction Program 2018 — IIITDM Kancheepuram.",
        "National Level Workshop on SDG-4 (Quality Education) in HEIs under NEP."
      ]
    }
  ];

  return (
    <section
      id="academic-engagements"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-2">
            <Lightbulb size={14} />
            Continuous Development
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Academic Engagements
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          <p className="max-w-3xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed">
            A portfolio of professional service, continuous learning, and contributions 
            to the academic community through teaching, innovation, and leadership.
          </p>
        </div>

        {/* --- MASONRY GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {sections.map((section) => (
            <div 
              key={section.id}
              className="group p-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm hover:shadow-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full border border-border-light dark:border-border-dark group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {section.icon}
                </div>
                <h3 className="font-serif text-xl text-text-light dark:text-text-dark group-hover:text-accent transition-colors">
                  {section.title}
                </h3>
              </div>

              {/* List Items */}
              <ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                    <CheckCircle size={16} className="shrink-0 mt-1 text-accent/50 group-hover:text-accent transition-colors" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* --- SKILLS CARD (Span 1 or 2 cols depending on layout) --- */}
          <div className="group p-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm hover:shadow-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full border border-border-light dark:border-border-dark group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <Lightbulb size={24} />
              </div>
              <h3 className="font-serif text-xl text-text-light dark:text-text-dark group-hover:text-accent transition-colors">
                Soft Skills
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {[
                "Public Speaking", 
                "Time Management", 
                "Self-Motivation", 
                "Interpersonal Communication", 
                "Record Keeping", 
                "Leadership"
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-base-light dark:bg-base-dark text-xs font-bold uppercase tracking-wider text-muted-light dark:text-muted-dark rounded-full border border-border-light dark:border-border-dark group-hover:border-accent/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademicEngagements;