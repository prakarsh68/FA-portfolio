import linkedinQR from "../assets/linkedin-qr.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#f2efe9] py-36 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-36">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="font-serif text-4xl mb-6">
            Contact Information
          </h2>
          <p className="text-[#6b645c] max-w-2xl mx-auto leading-relaxed">
            For academic collaboration, research discussions, and professional
            correspondence, the details are provided below.
          </p>
        </div>

        {/* CONTACT + QR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* LEFT: ADDRESS & CONTACT */}
          <div>
            <h3 className="font-serif text-2xl mb-6">
              Postal Address (India)
            </h3>

            <p className="text-[#6b645c] leading-relaxed text-lg">
              Dr. Vivek Justus, M.E., Ph.D.<br />
              11/31C, Princess Cottage,<br />
              Arockiyapuram,<br />
              Near Monday Market,<br />
              Kanyakumari – 629802,<br />
              Tamil Nadu, India
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <h4 className="font-serif text-xl mb-2">Mobile</h4>
                <p className="text-[#6b645c] text-lg">
                  +91 77088 06374<br />
                  +91 96000 60814
                </p>
              </div>

              <div>
                <h4 className="font-serif text-xl mb-2">Email</h4>
                <p className="text-[#6b645c] text-lg">
                  <a
                    href="mailto:vivekjustus@gmail.com"
                    className="hover:text-black transition"
                  >
                    vivekjustus@gmail.com
                  </a>
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT: LINKEDIN QR */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-2xl mb-6">
              Professional Profile
            </h3>

            <div className="w-48 h-48 border border-[#d8d3c8] bg-white flex items-center justify-center">
              <img
                src={linkedinQR}
                alt="LinkedIn QR Code"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="mt-6 text-sm text-[#6b645c] leading-relaxed text-center md:text-left">
              Scan to view LinkedIn profile and professional updates
            </p>
          </div>
        </div>

        {/* PERSONAL DETAILS */}
        <div className="border-t border-[#d8d3c8] pt-24">
          <h3 className="font-serif text-3xl mb-12 text-center">
            Personal Details
          </h3>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-[#6b645c] text-lg">
            <p><strong>Date of Birth:</strong> 10th May 1991</p>
            <p><strong>Marital Status:</strong> Married</p>
            <p><strong>Nationality:</strong> Indian</p>
            <p><strong>Languages Known:</strong> English, Tamil</p>
          </div>

          {/* SIGNATURE */}
          <div className="max-w-4xl mx-auto mt-20 flex justify-between items-end text-[#6b645c]">
            <p>
              <strong>Place:</strong> Chennai
            </p>
            <div className="text-right">
              <p className="font-serif text-lg">(Vivek Justus)</p>
              <p className="text-sm">Signature</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
