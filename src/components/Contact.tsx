import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import linkedinQR from "../assets/linkedin-qr.png"; 
import { MapPin, Phone, Mail, Linkedin, Calendar, Globe, Languages, Heart, User, Send, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/ to get these
    const SERVICE_ID = "YOUR_SERVICE_ID"; 
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
            setIsSubmitting(false);
            formRef.current?.reset(); // Clear the form
        }, (error) => {
            console.log(error.text);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again or email directly.' });
            setIsSubmitting(false);
        });
    }
  };

  return (
    <section
      id="contact"
      className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
    >
      <div className="container px-6 mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-2">
            <MessageSquare size={14} />
            Connect
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
            Contact & Profile
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
          <p className="max-w-2xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed">
            I welcome inquiries regarding academic collaboration, research opportunities, and guest lectures.
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
              2. MAIN GRID: INFO (Left) vs FORM (Right)
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* --- LEFT COLUMN: Contact Details --- */}
            <div className="space-y-10">
              
              {/* Address Block */}
              <div>
                <h3 className="font-serif text-2xl text-text-light dark:text-text-dark mb-6">Postal Address</h3>
                <div className="flex items-start gap-5 p-6 border-l-2 border-accent bg-surface-light dark:bg-surface-dark shadow-sm">
                  <MapPin size={28} className="text-accent shrink-0 mt-1" />
                  <address className="not-italic text-muted-light dark:text-muted-dark leading-relaxed">
                    <strong className="block text-text-light dark:text-text-dark text-lg mb-2 font-serif">Dr. Vivek Justus <span className="text-sm font-sans font-normal text-muted-light/80">(M.E., Ph.D.)</span></strong>
                    11/31C, Princess Cottage,<br />
                    Arockiyapuram, Near Monday Market,<br />
                    Kanyakumari – 629802,<br />
                    Tamil Nadu, India
                  </address>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-light/60 dark:text-muted-dark/60">Phone</p>
                    <div className="flex flex-col sm:flex-row sm:gap-4 text-text-light dark:text-text-dark font-medium">
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
                    <a href="mailto:vivekjustus@gmail.com" className="text-text-light dark:text-text-dark font-medium hover:text-accent transition-colors underline decoration-accent/30 underline-offset-4">
                      vivekjustus@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn Mini-Card */}
              <div className="flex items-center gap-6 pt-6 border-t border-border-light dark:border-border-dark">
                <div className="w-24 h-24 p-2 bg-white border border-border-light rounded-sm shrink-0">
                  <img src={linkedinQR} alt="LinkedIn QR" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Linkedin size={18} className="text-[#0077b5]" />
                    <span className="font-serif text-lg text-text-light dark:text-text-dark">LinkedIn Profile</span>
                  </div>
                  <p className="text-sm text-muted-light dark:text-muted-dark mb-3">
                    Connect for professional updates.
                  </p>
                  <a 
                    href="https://linkedin.com/in/vivekjustus" 
                    target="_blank" rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-accent hover:text-text-light transition-colors"
                  >
                    View Profile &rarr;
                  </a>
                </div>
              </div>

            </div>

            {/* --- RIGHT COLUMN: Contact Form (Active) --- */}
            <div className="bg-surface-light dark:bg-surface-dark p-8 md:p-10 border border-border-light dark:border-border-dark rounded-sm shadow-xl relative overflow-hidden">
              
              <div className="absolute top-0 inset-x-0 h-1 bg-accent"></div>

              <h3 className="font-serif text-2xl text-text-light dark:text-text-dark mb-6">Send a Message</h3>
              
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-xs font-bold uppercase tracking-widest text-muted-light/80 dark:text-muted-dark/80">Your Name</label>
                    <input 
                      type="text" 
                      name="user_name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-base-light dark:bg-base-dark border border-border-light dark:border-border-dark rounded-sm focus:outline-none focus:border-accent text-text-light dark:text-text-dark placeholder-muted-light/40 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-xs font-bold uppercase tracking-widest text-muted-light/80 dark:text-muted-dark/80">Email Address</label>
                    <input 
                      type="email" 
                      name="user_email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-base-light dark:bg-base-dark border border-border-light dark:border-border-dark rounded-sm focus:outline-none focus:border-accent text-text-light dark:text-text-dark placeholder-muted-light/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted-light/80 dark:text-muted-dark/80">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    placeholder="Research Collaboration / Inquiry"
                    className="w-full px-4 py-3 bg-base-light dark:bg-base-dark border border-border-light dark:border-border-dark rounded-sm focus:outline-none focus:border-accent text-text-light dark:text-text-dark placeholder-muted-light/40 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-light/80 dark:text-muted-dark/80">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-base-light dark:bg-base-dark border border-border-light dark:border-border-dark rounded-sm focus:outline-none focus:border-accent text-text-light dark:text-text-dark placeholder-muted-light/40 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Status Messages */}
                {status.message && (
                  <div className={`flex items-center gap-2 text-sm p-3 rounded-sm ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-[#705530] disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 transition-transform" />}
                </button>

              </form>
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