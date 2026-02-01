import { useState, useEffect, useRef } from "react";
import { Quote as QuoteIcon } from "lucide-react";

const Quote = () => {
  const [displayText, setDisplayText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  
  // The full quote to type out
  const fullText = "True innovation lies not in complexity, but in clarity, purpose, and lasting impact.";
  
  // Typing speed (milliseconds)
  const typingSpeed = 50;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  // Helper to render text with specific words highlighted
  const renderStyledText = (text: string) => {
    // We split by specific keywords to wrap them in accent spans
    // Note: This is a simple visual hack for the typewriter effect
    const parts = text.split(/(innovation|impact)/gi);
    return parts.map((part, i) => {
      if (part.toLowerCase() === "innovation" || part.toLowerCase() === "impact") {
        return <span key={i} className="text-accent font-italic">{part}</span>;
      }
      return part;
    });
  };

  return (
    <section
      id="quote"
      className="relative w-full py-40 px-6 bg-base-dark overflow-hidden flex items-center justify-center min-h-[60vh]"
    >
      {/* --- BACKGROUND EFFECTS --- */}
      
      {/* 1. Spotlight Gradient (Animated) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>

      {/* 2. Giant Quote Icon Watermark */}
      <div className="absolute top-10 left-10 text-white/5 pointer-events-none select-none">
        <QuoteIcon size={200} />
      </div>
      <div className="absolute bottom-10 right-10 text-white/5 pointer-events-none select-none rotate-180">
        <QuoteIcon size={200} />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        
        {/* The Typewriter Text */}
        <div className="min-h-[120px] md:min-h-[160px] flex items-center justify-center">
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-white">
            “{renderStyledText(displayText)}
            {/* Blinking Cursor */}
            <span className={`inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle ${isFinished ? 'animate-pulse' : 'animate-bounce'}`}></span>
            ”
          </p>
        </div>

        {/* Bottom Tags (Fade in after typing finishes) */}
        <div className={`transition-all duration-1000 transform ${isFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="flex flex-col items-center gap-6">
            {/* Decorative Line */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            
            <p className="text-sm md:text-base tracking-[0.4em] uppercase text-accent font-medium">
              Research · Teaching · Social Contribution
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Quote;