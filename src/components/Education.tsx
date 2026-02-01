const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#f2efe9] py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-28">
          Education & Qualifications
        </h2>

        <div className="space-y-20">

          {/* PhD */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
            <p className="text-sm uppercase tracking-widest text-[#8b6b3d]">
              Dec 2018 – Jan 2024
            </p>
            <div>
              <h3 className="font-serif text-xl">
                Ph.D. in Computer Science and Engineering
              </h3>
              <p className="text-[#6b645c] mt-3 leading-relaxed">
                Vel Tech Rangarajan Dr. Sagunthala R&amp;D Institute of Science and Technology,
                Chennai, India
              </p>
            </div>
          </div>

          {/* ME */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
            <p className="text-sm uppercase tracking-widest text-[#8b6b3d]">
              Aug 2015 – May 2017
            </p>
            <div>
              <h3 className="font-serif text-xl">
                M.E. in Computer Science and Engineering
              </h3>
              <p className="text-[#6b645c] mt-3 leading-relaxed">
                Sathyabama University, Chennai, India
              </p>
              <p className="text-sm text-[#6b645c] mt-2">
                CGPA: 7.23
              </p>
            </div>
          </div>

          {/* BE */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
            <p className="text-sm uppercase tracking-widest text-[#8b6b3d]">
              Jun 2012 – Apr 2015
            </p>
            <div>
              <h3 className="font-serif text-xl">
                B.E. in Computer Science and Engineering
              </h3>
              <p className="text-[#6b645c] mt-3 leading-relaxed">
                Sathyabama University, Chennai, India
              </p>
              <p className="text-sm text-[#6b645c] mt-2">
                CGPA: 6.57
              </p>
            </div>
          </div>

          {/* Senior Secondary */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
            <p className="text-sm uppercase tracking-widest text-[#8b6b3d]">
              Mar 2007
            </p>
            <div>
              <h3 className="font-serif text-xl">
                Senior Secondary Education
              </h3>
              <p className="text-[#6b645c] mt-3 leading-relaxed">
                St. Mary’s High School, Colachel, India
              </p>
            </div>
          </div>

          {/* Additional Qualification */}
          <div className="mt-28 pt-14 border-t border-[#d8d3c8]">
            <h3 className="font-serif text-2xl mb-10 text-center">
              Additional Qualification
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-[#8b6b3d]">
                Apr 2012
              </p>
              <div>
                <h4 className="font-medium text-lg">
                  Diploma in Computer Science and Engineering
                </h4>
                <p className="text-[#6b645c] mt-3 leading-relaxed">
                  Morning Star Polytechnic College, Chunkankadai, India
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
