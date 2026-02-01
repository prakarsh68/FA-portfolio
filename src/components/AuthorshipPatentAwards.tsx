import { Book, Lightbulb, FileSearch, Trophy, Award, PenTool } from "lucide-react";

const AuthorshipPatentAwards = () => {
  return (
    <section
      id="credentials"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-2">
            <Award size={14} />
            Professional Milestones
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Authorship & Credentials
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1. BOOK AUTHORSHIP */}
          <div className="group p-8 md:p-10 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm hover:border-accent/40 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full border border-border-light dark:border-border-dark">
                <Book size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-light/50 dark:text-muted-dark/50">
                Publication
              </span>
            </div>
            
            <h3 className="font-serif text-2xl text-text-light dark:text-text-dark mb-3 group-hover:text-accent transition-colors">
              Book Authorship
            </h3>
            
            <div className="space-y-2">
              <p className="font-medium text-lg text-text-light dark:text-text-dark leading-snug">
                "Emerging Trends in AI and Machine Learning"
              </p>
              <p className="text-sm text-muted-light dark:text-muted-dark font-serif italic">
                Scientific International Publishing House (SIPH)
              </p>
            </div>
          </div>

          {/* 2. PATENT */}
          <div className="group p-8 md:p-10 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm hover:border-accent/40 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full border border-border-light dark:border-border-dark">
                <Lightbulb size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-light/50 dark:text-muted-dark/50">
                Intellectual Property
              </span>
            </div>
            
            <h3 className="font-serif text-2xl text-text-light dark:text-text-dark mb-3 group-hover:text-accent transition-colors">
              Patent Granted
            </h3>
            
            <div className="space-y-4">
              <p className="font-medium text-lg text-text-light dark:text-text-dark leading-snug">
                “Machine Learning Based Heart Health Monitoring Device”
              </p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/20 rounded text-accent text-xs font-mono tracking-wider">
                <PenTool size={12} />
                Design No: 423159-001
              </div>
            </div>
          </div>

          {/* 3. JOURNAL REVIEWER */}
          <div className="group p-8 md:p-10 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm hover:border-accent/40 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full border border-border-light dark:border-border-dark">
                <FileSearch size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-light/50 dark:text-muted-dark/50">
                Peer Review
              </span>
            </div>
            
            <h3 className="font-serif text-2xl text-text-light dark:text-text-dark mb-3 group-hover:text-accent transition-colors">
              Journal Reviewer
            </h3>
            
            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
              International Journal of Systems Assurance Engineering and Management (IJSAEM)
            </p>
          </div>

          {/* 4. AWARDS SUMMARY */}
          <div className="group p-8 md:p-10 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm hover:border-accent/40 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-base-light dark:bg-base-dark text-accent rounded-full border border-border-light dark:border-border-dark">
                <Trophy size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-light/50 dark:text-muted-dark/50">
                Recognition
              </span>
            </div>
            
            <h3 className="font-serif text-2xl text-text-light dark:text-text-dark mb-4 group-hover:text-accent transition-colors">
              Key Awards
            </h3>
            
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-light dark:text-muted-dark">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                <span>
                  <strong className="text-text-light dark:text-text-dark font-medium block">Young Innovators Award (2019)</strong>
                  <span className="text-sm">3M-CII, Confederation of Indian Industry</span>
                </span>
              </li>
              <li className="flex gap-3 text-muted-light dark:text-muted-dark">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                <span>
                  <strong className="text-text-light dark:text-text-dark font-medium block">Guinness & Asian Book of Records</strong>
                  <span className="text-sm">World’s Largest Wheelchair Image</span>
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthorshipPatentAwards;