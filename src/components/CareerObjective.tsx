import { Quote, Star } from "lucide-react";

const CareerObjective = () => {
  // REFINED WORD LIST: More academic, less generic.
  const tickerWords = [
    "Pedagogy", "Discovery", "Mentorship", "Resilience", 
    "Inquiry", "Synthesis", "Impact", "Vision"
  ];

  return (
    <section className="relative bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300 overflow-hidden">
      
      {/* --- PART 1: The Main Vision Statement --- */}
      <div className="container px-6 mx-auto mb-24">
        
        <div className="max-w-4xl mx-auto relative">
          
          {/* Decorative Background Icon (Subtle) */}
          <div className="absolute -top-4 -left-4 text-accent/5 dark:text-accent/2 pointer-events-none">
            <Quote size={64} />
          </div>

          {/* Main Content Card */}
          <div className="relative z-10 text-center space-y-10 px-4 md:px-0">
            
            {/* Header */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-serif text-3xl md:text-4xl text-text-light dark:text-text-dark">
                Career Objective
              </h2>
              <div className="w-16 h-[2px] bg-accent"></div>
            </div>

            {/* The "Vision" Statement */}
            <blockquote className="relative">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-muted-light dark:text-muted-dark italic">
                "I am seeking an opportunity to secure a position as an <span className="text-accent not-italic font-medium">Assistant Professor</span>, 
                where I can leverage my academic expertise, teaching skills, and research abilities to contribute 
                meaningfully to the department. I am committed to fostering a dynamic learning environment and 
                enhancing academic excellence."
              </p>
            </blockquote>

            {/* Signature / Footer */}
            <div className="flex flex-col items-center gap-2 pt-6">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-text-light dark:text-text-dark">
                Dr. Vivek Justus
              </span>
              <span className="text-xs text-muted-light/60 dark:text-muted-dark/60 tracking-wider">
                Vision Statement
              </span>
            </div>

          </div>
          
          {/* Decorative Background Icon (Subtle) */}
          <div className="absolute -bottom-4 -right-4 text-accent/5 dark:text-accent/2 pointer-events-none rotate-180">
            <Quote size={64} />
          </div>

        </div>
      </div>

      {/* --- PART 2: The Bifurcation (Scrolling Ticker) --- */}
      <div className="absolute bottom-0 w-full py-6 border-t border-border-light/30 dark:border-border-dark/30 bg-base-light dark:bg-base-dark flex select-none">
        
        {/* We render the list twice for seamless looping */}
        <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
          
          {/* First Loop */}
          <div className="flex items-center gap-16 md:gap-32 px-8">
            {tickerWords.map((word, index) => (
              <div key={`a-${index}`} className="flex items-center gap-8 md:gap-16 shrink-0">
                {/* CHANGED: Opacity lowered to /5 for extreme subtlety */}
                <span className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-widest text-muted-light/5 dark:text-muted-dark/5 whitespace-nowrap">
                  {word}
                </span>
                <Star className="text-accent/20 w-3 h-3 md:w-5 md:h-5" fill="currentColor" />
              </div>
            ))}
          </div>

          {/* Second Loop (Duplicate) */}
          <div className="flex items-center gap-16 md:gap-32 px-8">
            {tickerWords.map((word, index) => (
              <div key={`b-${index}`} className="flex items-center gap-8 md:gap-16 shrink-0">
                <span className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-widest text-muted-light/5 dark:text-muted-dark/5 whitespace-nowrap">
                  {word}
                </span>
                <Star className="text-accent/20 w-3 h-3 md:w-5 md:h-5" fill="currentColor" />
              </div>
            ))}
          </div>

        </div>

        {/* Mist Effect (Left & Right Fades) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-base-light dark:from-base-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-base-light dark:from-base-dark to-transparent z-10 pointer-events-none" />

      </div>
    </section>
  );
};

export default CareerObjective;