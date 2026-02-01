import { ArrowRight, FileText } from "lucide-react";
import portrait from "../assets/portrait.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden bg-base-light dark:bg-base-dark transition-colors duration-300"
    >
      {/* Background Decor (Subtle Gradient) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT CONTENT (7 Columns) --- */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            
            {/* 1. Intro Label */}
            <div 
              className="flex items-center gap-4 animate-slide-up opacity-0" 
              style={{ animationDelay: "100ms" }}
            >
              <span className="h-[1px] w-12 bg-accent hidden lg:block"></span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent">
                Academic Portfolio
              </span>
            </div>

            {/* 2. Main Heading */}
            <h1 
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-text-light dark:text-text-dark animate-slide-up opacity-0"
              style={{ animationDelay: "200ms" }}
            >
              Dr. Vivek <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#d4af37]">
                Justus
              </span>
            </h1>

            {/* 3. Role & Bio */}
            <div 
              className="space-y-6 max-w-lg animate-slide-up opacity-0" 
              style={{ animationDelay: "300ms" }}
            >
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-light dark:text-muted-dark">
                Assistant Professor · Researcher · Innovator
              </p>
              
              <p className="text-lg leading-relaxed text-muted-light/90 dark:text-muted-dark/90 font-light">
                Advancing intelligent systems through applied research in 
                <span className="text-text-light dark:text-text-dark font-medium"> Artificial Intelligence</span>, 
                <span className="text-text-light dark:text-text-dark font-medium"> Embedded Systems</span>, and 
                <span className="text-text-light dark:text-text-dark font-medium"> Industrial Automation</span>.
              </p>
            </div>

            {/* 4. Action Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto animate-slide-up opacity-0"
              style={{ animationDelay: "400ms" }}
            >
              {/* Primary Button */}
              <a
                href="#innovations"
                className="group relative px-8 py-4 bg-text-light dark:bg-white text-white dark:text-black overflow-hidden transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 w-full h-full bg-accent translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
                <span className="relative flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-bold group-hover:text-white transition-colors">
                  Explore Innovations <ArrowRight size={16} />
                </span>
              </a>

              {/* Secondary Button */}
              <a
                href="#profile"
                className="group px-8 py-4 border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-base-light dark:hover:bg-surface-dark transition-all"
              >
                <span className="flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-bold">
                  Academic Profile <FileText size={16} className="text-accent" />
                </span>
              </a>
            </div>
          </div>

          {/* --- RIGHT IMAGE (5 Columns) --- */}
          <div 
            className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in opacity-0"
            style={{ animationDelay: "500ms" }}
          >
            <div className="relative group">
              
              {/* The "Frame" (Offset Border) */}
              <div className="absolute inset-0 border-2 border-accent/40 translate-x-5 translate-y-5 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              
              {/* The Image Wrapper */}
              <div className="relative w-[280px] sm:w-[350px] lg:w-[400px] h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden bg-surface-light dark:bg-surface-dark shadow-xl">
                 
                <img
                  src={portrait}
                  alt="Dr. Vivek Justus"
                  // UPDATED CLASSNAME: Removed grayscale and opacity filters
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                />
                
                {/* Subtle Overlay on Hover for depth */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;