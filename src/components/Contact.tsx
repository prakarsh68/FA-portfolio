import linkedinQR from "../assets/linkedin-qr.png"; 
import { MapPin, Phone, Mail, Linkedin, Calendar, Globe, Languages, Heart, User, Briefcase, GraduationCap, Mic, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  
  // --- CONFIG: Pre-filled Email Details ---
  const emailAddress = "vivekjustus@gmail.com";
  const subject = encodeURIComponent("Professional Inquiry via Portfolio");
  const body = encodeURIComponent("Dear Dr. Vivek Justus,\n\nI am interested in discussing...");
  
  // Combine them into a mailto link
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

  return (
    <section
      id="contact"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-2">
            <User size={14} />
            Connect
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Contact & Profile
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          <p className="max-w-2xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed">
            I welcome professional inquiries regarding academic collaboration, research opportunities, and industrial consultancy.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">

          {/* =========================================================
              1. BIOGRAPHICAL SNAPSHOT
             ========================================================= */}
          <div className="p-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-sm shadow-sm">
            <h3 className="font-serif text-xl text-text-light dark:text-text-dark mb-6 flex items-center gap-3">
              Biographical Snapshot
              <span className="h-[1px] flex-grow bg-border-light dark:border-border-dark"></span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Date of Birth", val: "10th May 1991", icon: <Calendar size={18} /> },
                { label: "Nationality", val: "Indian", icon: <Globe size={18} /> },
                { label: "Languages", val: "English, Tamil", icon: <Languages size={18} /> },
                { label: "Marital Status", val: "Married", icon: <Heart size={18} /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="p-2.5 bg-base-light dark:bg-base-dark text-accent rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-light/60 dark:text-muted-dark/60 mb-0.5">{item.label}</h4>
                    <p className="text-text-light dark:text-text-dark font-medium text-sm">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              2. MAIN GRID: CONTACT INFO vs ENGAGEMENT SCOPE
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* --- LEFT COLUMN: Contact Coordinates --- */}
            <div className="space-y-10 flex flex-col h-full">
              
              {/* Address Block */}
              <div>
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark mb-6">Postal Address</h3>
                <div className="flex items-start gap-5 p-6 border-l-2 border-accent bg-surface-light dark:bg-surface-dark shadow-sm h-full">
                  <MapPin size={28} className="text-accent shrink-0 mt-1" />
                  <address className="not-italic text-muted-light dark:text-muted-dark leading-relaxed text-lg">
                    <strong className="block text-text-light dark:text-text-dark text-xl mb-2 font-serif">Dr. Vivek Justus <span className="text-sm font-sans font-normal text-muted-light/80">(M.E., Ph.D.)</span></strong>
                    11/31C, Princess Cottage,<br />
                    Arockiyapuram, Near Monday Market,<br />
                    Kanyakumari – 629802,<br />
                    Tamil Nadu, India
                  </address>
                </div>
              </div>

              {/* Digital Coordinates */}
              <div className="space-y-6 flex-grow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-light/60 dark:text-muted-dark/60">Phone</p>
                    <div className="flex flex-col sm:flex-row sm:gap-4 text-text-light dark:text-text-dark font-medium text-lg">
                      <a href="tel:+917708806374" className="hover:text-accent transition-colors">+91 77088 06374</a>
                      <span className="hidden sm:inline text-border-light">|</span>
                      <a href="tel:+919600060814" className="hover:text-accent transition-colors">+91 96000 60814</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-light/60 dark:text-muted-dark/60">Email</p>
                    <a href={mailtoLink} className="text-text-light dark:text-text-dark font-medium text-lg hover:text-accent transition-colors underline decoration-accent/30 underline-offset-4">
                      vivekjustus@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn Mini-Card */}
              <div className="flex items-center gap-6 pt-8 border-t border-border-light dark:border-border-dark">
                <div className="w-20 h-20 p-2 bg-white border border-border-light rounded-sm shrink-0">
                  <img src={linkedinQR} alt="LinkedIn QR" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Linkedin size={18} className="text-[#0077b5]" />
                    <span className="font-serif text-lg text-text-light dark:text-text-dark">Connect on LinkedIn</span>
                  </div>
                  <a 
                    href="https://linkedin.com/in/vivekjustus" 
                    target="_blank" rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-accent hover:text-text-light transition-colors"
                  >
                    View Full Profile &rarr;
                  </a>
                </div>
              </div>

            </div>

            {/* --- RIGHT COLUMN: Scope of Engagement --- */}
            <div className="bg-surface-light dark:bg-surface-dark p-8 md:p-10 border border-border-light dark:border-border-dark rounded-sm shadow-xl relative overflow-hidden flex flex-col justify-between">
              
              {/* Decorative Top Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-accent"></div>

              <div>
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark mb-6">Scope of Engagement</h3>
                <p className="text-muted-light dark:text-muted-dark leading-relaxed mb-8">
                  I am available for collaboration in the following capacities. Please ensure all correspondence is relevant to these domains.
                </p>

                <ul className="space-y-6">
                  {/* Item 1 */}
                  <li className="flex items-start gap-4 p-4 bg-base-light dark:bg-base-dark rounded-sm border border-transparent hover:border-accent/30 transition-colors">
                    <div className="mt-1 text-accent">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="text-text-light dark:text-text-dark font-bold text-sm uppercase tracking-wider mb-1">Research Collaboration</h4>
                      <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                        Joint research in AI, IoT, Embedded Systems, and funding proposal development.
                      </p>
                    </div>
                  </li>

                  {/* Item 2 */}
                  <li className="flex items-start gap-4 p-4 bg-base-light dark:bg-base-dark rounded-sm border border-transparent hover:border-accent/30 transition-colors">
                    <div className="mt-1 text-accent">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="text-text-light dark:text-text-dark font-bold text-sm uppercase tracking-wider mb-1">Industrial Consultancy</h4>
                      <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                        Technical advising for startups and industries regarding automation and smart systems.
                      </p>
                    </div>
                  </li>

                  {/* Item 3 */}
                  <li className="flex items-start gap-4 p-4 bg-base-light dark:bg-base-dark rounded-sm border border-transparent hover:border-accent/30 transition-colors">
                    <div className="mt-1 text-accent">
                      <Mic size={24} />
                    </div>
                    <div>
                      <h4 className="text-text-light dark:text-text-dark font-bold text-sm uppercase tracking-wider mb-1">Guest Lectures</h4>
                      <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                         Keynote sessions on Innovation, Entrepreneurship, and Emerging Technologies.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Bottom "Office Hours" or Response Note */}
              <div className="mt-10 pt-6 border-t border-border-light dark:border-border-dark flex items-center gap-4 text-muted-light dark:text-muted-dark">
                 <Clock size={20} className="text-accent" />
                 <p className="text-sm italic">
                   Typical response time: 24–48 hours for academic inquiries.
                 </p>
              </div>

              {/* Direct Mail Action Button (Updated) */}
              <div className="mt-8">
                <a 
                   href={mailtoLink}
                   className="flex items-center justify-center gap-3 w-full py-4 bg-text-light dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-accent dark:hover:bg-accent hover:text-white transition-colors"
                >
                  Initiate Correspondence <ArrowRight size={16} />
                </a>
              </div>

            </div>

          </div>

          {/* =========================================================
              3. SIGNATURE
             ========================================================= */}
          <div className="pt-20 mt-12 border-t border-border-light dark:border-border-dark flex flex-col md:flex-row justify-between items-end gap-8 text-muted-light dark:text-muted-dark">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-1 text-accent">Place</p>
              <p className="font-serif text-xl text-text-light dark:text-text-dark">Chennai, India</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="font-signature text-5xl text-text-light dark:text-text-dark opacity-90 -rotate-2 mb-2">
                Vivek Justus
              </div>
              <div className="h-[1px] w-32 bg-accent/40 mb-2"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Dr. Vivek Justus</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;