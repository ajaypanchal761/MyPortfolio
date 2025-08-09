import { useState } from "react";
import { certifications } from "../constants";
import Tilt from "react-parallax-tilt";
import CertificateModal from "./CertificateModal";
import { useMobileDetection } from "../utils/deviceUtils";

const Certification = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMobileDetection();

  const handleViewCertificate = (certification) => {
    setSelectedCertificate(certification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section
      id="certifications"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">CERTIFICATIONS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        Professional certifications and achievements that validate my skills and expertise
      </p>
    </div>

    {/* Certifications Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      {certifications.map((certification) => (
        isMobile ? (
          <div key={certification.id} className="bg-gray-900 backdrop-blur-md p-6 rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.5)] 
            transition-all duration-300 h-full flex flex-col">
            
            {/* Certification Icon */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
            </div>

            {/* Certification Title */}
            <h3 className="text-lg font-semibold text-white mb-2 text-center leading-tight">
              {certification.title}
            </h3>

            {/* Issuing Organization */}
            <p className="text-purple-400 text-sm font-medium mb-3 text-center">
              {certification.issuer}
            </p>

            {/* Platform */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                {certification.platform}
              </span>
            </div>

            {/* Skills/Tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {certification.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Year */}
            <div className="mt-auto text-center mb-4">
              <span className="text-xs text-gray-500">
                {certification.year}
              </span>
            </div>

            {/* View Certificate Button */}
            <button
              onClick={() => handleViewCertificate(certification)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-2 px-4 text-white font-semibold rounded-md hover:opacity-90 transition-all duration-300 text-sm relative z-10"
            >
              View Certificate
            </button>
          </div>
        ) : (
          <Tilt
            key={certification.id}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="bg-gray-900 backdrop-blur-md p-6 rounded-2xl border border-white 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.5)] 
              transition-all duration-300 h-full flex flex-col">
              
              {/* Certification Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
              </div>

              {/* Certification Title */}
              <h3 className="text-lg font-semibold text-white mb-2 text-center leading-tight">
                {certification.title}
              </h3>

              {/* Issuing Organization */}
              <p className="text-purple-400 text-sm font-medium mb-3 text-center">
                {certification.issuer}
              </p>

              {/* Platform */}
              <div className="flex items-center justify-center mb-4">
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  {certification.platform}
                </span>
              </div>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {certification.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Year */}
              <div className="mt-auto text-center mb-4">
                <span className="text-xs text-gray-500">
                  {certification.year}
                </span>
              </div>

              {/* View Certificate Button */}
              <button
                onClick={() => handleViewCertificate(certification)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-2 px-4 text-white font-semibold rounded-md hover:opacity-90 transition-all duration-300 text-sm relative z-10"
              >
                View Certificate
              </button>
            </div>
          </Tilt>
        )
      ))}
    </div>

    {/* Certificate Modal */}
    <CertificateModal
      isOpen={isModalOpen}
      onClose={closeModal}
      certificate={selectedCertificate}
    />
  </section>
  );
};

export default Certification;
