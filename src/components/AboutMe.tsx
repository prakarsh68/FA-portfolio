import { GraduationCap, Code, Lightbulb, Users, Quote } from "lucide-react";

const AboutMe = () => {
  // Data for the right-side cards
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Focus",
      description: "Computer Science, Embedded Systems, Cloud Computing, Industry 4.0",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Role",
      description: "Assistant Professor, Researcher, and Academic Mentor.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Research Philosophy",
      description: "Translating theoretical knowledge into impactful, real-world solutions.",
    },
  ];

  // Data for the stats row
  const stats = [
    { label: "Years Experience", value: "08+" },
    { label: "Research Areas", value: "03+" },
    { label: "Projects Guided", value: "15+" }, 
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-surface-light dark:bg-surface-dark transition-colors duration-300"
    >
      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT COLUMN: Biography --- */}
          <div className="space-y-8">
            
            {/* Section Header */}
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-text-light dark:text-text-dark">
                About Me
              </h2>
              <div className="w-20 h-[2px] bg-accent"></div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6 text-lg text-muted-light dark:text-muted-dark leading-relaxed font-light">
              <p>
                I am an academician and researcher with over <strong className="text-text-light dark:text-text-dark font-medium">six years of experience</strong> in higher education, 
                specializing in Computer Science and Engineering. My academic journey is shaped by a strong 
                commitment to teaching, applied research, and the development of technology-driven solutions.
              </p>

              <p>
                My research interests include <span className="text-accent">Embedded Systems</span>, <span className="text-accent">Cloud Computing</span>, and <span className="text-accent">Applied Machine Learning</span>. 
                I actively engage in mentoring students, supervising academic projects, and contributing to 
                peer-reviewed research that emphasizes innovation, reliability, and societal impact.
              </p>

              <p>
                As an educator, I strive to foster analytical thinking, interdisciplinary learning, and 
                ethical responsibility, while continually evolving as a researcher.
              </p>
            </div>

            {/* Quick Stats Row */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-border-light dark:border-border-dark">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="text-3xl font-serif text-accent">{stat.value}</h4>
                  <p className="text-xs tracking-widest uppercase text-muted-light dark:text-muted-dark">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: Highlights Cards --- */}
          <div className="flex flex-col gap-6 pt-8 lg:pt-0">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-base-light dark:bg-base-dark border border-border-light dark:border-border-dark hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-transparent group-hover:border-r-accent transition-all duration-300"></div>

                <div className="flex items-start gap-6">
                  {/* Icon Box */}
                  <div className="shrink-0 p-3 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-accent rounded-sm group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-text-light dark:text-text-dark group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-light dark:text-muted-dark">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quote Box (Replaces Button) */}
            <div className="mt-4 p-8 bg-accent/5 border-l-4 border-accent relative">
              <Quote className="absolute top-4 right-4 text-accent/20 w-8 h-8" />
              <blockquote className="font-serif text-lg italic text-text-light dark:text-text-dark leading-relaxed">
                "The art of teaching is the art of assisting discovery."
              </blockquote>
              <cite className="block mt-4 text-xs font-bold tracking-widest uppercase text-accent not-italic">
                — Mark Van Doren
              </cite>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;