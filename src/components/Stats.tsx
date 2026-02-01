import { useEffect, useState, useRef, JSX } from "react";
import { Trophy, BookOpen, Lightbulb, Clock } from "lucide-react";

// --- Types for TypeScript Safety ---
interface StatItem {
  id: number;
  label: string;
  value?: number; // Optional, can be undefined
  displayValue?: string; // Optional text like "GWR"
  suffix?: string;
  subText?: string;
  icon: JSX.Element;
  isNumber: boolean;
}

// --- Custom Hook for Counting Up Numbers ---
const useCounter = (end: number, duration: number = 2000, start: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // --- Data Definition ---
  const stats: StatItem[] = [
    {
      id: 1,
      label: "Years of Experience",
      value: 6.5,
      suffix: "+",
      icon: <Clock size={40} />,
      isNumber: true
    },
    {
      id: 2,
      label: "Academic Contributions",
      value: 300,
      suffix: "+",
      icon: <BookOpen size={40} />,
      isNumber: true
    },
    {
      id: 3,
      label: "World Record",
      displayValue: "GWR",
      subText: "Official Holder",
      icon: <Trophy size={40} />,
      isNumber: false
    },
    {
      id: 4,
      label: "Patents & Innovations",
      displayValue: "Multi",
      subText: "National Patents",
      icon: <Lightbulb size={40} />,
      isNumber: false
    }
  ];

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative bg-base-dark text-white py-32 overflow-hidden"
    >
      {/* --- Background Texture (Grid & Glow) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-base-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-dark to-transparent"></div>
      </div>
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          
          {stats.map((stat, index) => {
            // Safety: Ensure we have a number to work with, default to 0 if undefined
            const safeValue = stat.value || 0;

            return (
              <div 
                key={stat.id} 
                className={`relative group flex flex-col items-center text-center transition-all duration-500 transform ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                
                {/* Vertical Divider (Desktop Only) */}
                {index !== 0 && (
                  <div className="hidden md:block absolute left-0 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                )}

                {/* Background Icon (Faded Watermark) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 text-accent transition-opacity duration-700 scale-150 pointer-events-none">
                  {stat.icon}
                </div>

                {/* Number / Value */}
                <div className="relative mb-4">
                  <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 group-hover:to-accent transition-all duration-500">
                    {stat.isNumber ? (
                      // Logic for numbers
                      <span>
                        {safeValue % 1 !== 0 
                          ? (useCounter(Math.floor(safeValue), 2000, isInView) + (isInView ? 0.5 : 0)) 
                          : useCounter(safeValue, 2000, isInView)}
                        {stat.suffix}
                      </span>
                    ) : (
                      // Logic for Text (GWR, Multi)
                      <span>{stat.displayValue}</span>
                    )}
                  </h2>
                </div>

                {/* Label */}
                <div className="space-y-1">
                  <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-accent/80 group-hover:text-accent transition-colors duration-300">
                    {stat.label}
                  </p>
                  {stat.subText && (
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500 group-hover:text-neutral-400 transition-colors">
                      {stat.subText}
                    </p>
                  )}
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Stats;