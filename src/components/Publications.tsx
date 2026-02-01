const Publications = () => {
  return (
    <section
      id="publications"
      className="bg-[#f7f4ef] py-44 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-36">
          <h2 className="font-serif text-5xl mb-8">
            Publications & Research Contributions
          </h2>
          <p className="text-[#6b645c] max-w-3xl mx-auto text-lg leading-relaxed">
            Peer-reviewed journal articles, conference proceedings, and indexed
            publications reflecting sustained research contributions in embedded
            systems, cloud computing, Industry 4.0, and applied machine learning.
          </p>
        </div>

        {/* RESEARCH IDs */}
        <div className="flex flex-col sm:flex-row justify-center gap-12 mb-32 text-sm tracking-widest uppercase text-[#8b6b3d]">
          <span>Scopus ID: 57215221367</span>
          <span>ORCID: 0000-0003-3865-0386</span>
        </div>

        {/* PUBLICATION LIST */}
        <ol className="space-y-12 list-decimal list-inside text-[#6b645c] leading-relaxed text-base max-w-5xl mx-auto">
          <li>Lakshmi, J. Refonaa, and J. Vivek, “Tracking of biomedical waste using GPS,” ICCPCT-2015, India. DOI: 10.1109/ICCPCT.2015.7159516.</li>
          <li>J. Refonaa, M. Lakshmi, and J. Vivek, “Analysis and prediction of natural disaster using spatial data mining,” ICCPCT-2015. DOI: 10.1109/ICCPCT.2015.7159379.</li>
          <li>J. Vivek, M. Lakshmi, and D. Manuel, “Trawler Ocean Care System,” Pakistan Journal of Biotechnology, 2016.</li>
          <li>C. Devasanthiya et al., “An Enhanced Tourism Recommendation System with Relevancy Feedback Mechanism and Ontological Specifications,” Springer, 2016. DOI: 10.1007/978-81-322-2674-1_28.</li>
          <li>J. Vivek et al., “Emergency Detection and Rescue System Using Mobile Communication Technology,” 2017.</li>
          <li>N. Rajkumar et al., “Successive Duplicate Detection in Scalable Datasets in Cloud Database,” IJET, 2018. DOI: 10.14419/ijet.v7i2.4.11167.</li>
          <li>J. Vivek et al., “Descry and Divulge Hitch by Using Hitch Entrapment-Bug Catcher,” IJET, 2018.</li>
          <li>J. Vivek et al., “Automated Extraterritorial Averting System,” Journal of Computational and Theoretical Nanoscience, 2018.</li>
          <li>J. Vivek et al., “Context Awareness Technology Using Parallel Mining for Ambient Assisted Living System,” IJET, 2018.</li>
          <li>V. Justus and G. R. Kanagachidambaresan, “Intelligent Single-Board Computer for Industry 4.0: Efficient Real-Time Monitoring System for Anomaly Detection in CNC Machines,” Microprocessors and Microsystems, 2022.</li>
          <li>V. Justus and G. R. Kanagachidambaresan, “Machine Learning Based Fault-Oriented Predictive Maintenance in Industry 4.0,” International Journal of System Assurance Engineering and Management, 2022.</li>
          <li>Dumka et al., “Energy-Efficient Routing Approach Based on Free Hold Participation and Acquisition Hierarchical Network of Forwarder Nodes in WSNs,” International Journal of Business Analytics, 2024.</li>
          <li>Sheela et al., “Enhancing Liver Tumor Segmentation with UNet-ResNet: Leveraging ResNet’s Power,” IOS Press, 2024.</li>
          <li>M. N. K et al., “Dynamic Weather Prediction: Real-Time Analysis using Deep Learning Techniques and Live Data,” ICSSAS, 2024.</li>
          <li>T. Sujithra et al., “Advanced Security Model for Cloud Infrastructure Using Cryptography and Steganography,” IEEE IIPEM, 2024.</li>
          <li>V. Justus et al., “Wireless Power Transfer Technologies: State-of-the-Art and Future Prospects,” IEEE I3CEET, 2024.</li>
          <li>S. Viveka et al., “Industrial Internet of Things (IIoT): Transforming Industrial Operations through Advanced Connectivity,” IEEE I3CEET, 2024.</li>
        </ol>

      </div>
    </section>
  );
};

export default Publications;
