import { useEffect, useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ImageWithFallback from "./ImageWithFallback";

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentCertificateIndex(0);
    }
  }, [isOpen]);
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  // Check if this certificate has multiple certificates
  const hasMultipleCertificates = certificate.multipleCertificates && certificate.multipleCertificates.length > 0;
  const currentCert = hasMultipleCertificates 
    ? certificate.multipleCertificates[currentCertificateIndex] 
    : certificate;

  const handlePrevious = () => {
    setCurrentCertificateIndex(prev => 
      prev === 0 ? certificate.multipleCertificates.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentCertificateIndex(prev => 
      prev === certificate.multipleCertificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden shadow-2xl border border-gray-700 z-[10000]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {hasMultipleCertificates ? currentCert.title : certificate.title}
            </h3>
            <p className="text-purple-400 text-sm">
              {certificate.issuer} • {certificate.platform}
            </p>
            {hasMultipleCertificates && (
              <p className="text-gray-400 text-xs mt-1">
                {currentCertificateIndex + 1} of {certificate.multipleCertificates.length}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Certificate Image */}
        <div className="p-6 flex justify-center relative">
          {hasMultipleCertificates && certificate.multipleCertificates.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors z-10"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors z-10"
              >
                <FiChevronRight size={20} />
              </button>
            </>
          )}
          
          <div className="max-w-full max-h-[70vh] overflow-auto">
            {hasMultipleCertificates ? (
              <div className="text-center">
                <ImageWithFallback
                  src={currentCert.imageUrl}
                  alt={`${currentCert.title} Certificate`}
                  className="w-full h-auto rounded-lg shadow-lg"
                  style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain" }}
                />
                <p className="text-gray-300 mt-4 text-sm">
                  {currentCert.description}
                </p>
              </div>
            ) : (
              <ImageWithFallback
                src={certificate.imageUrl}
                alt={`${certificate.title} Certificate`}
                className="w-full h-auto rounded-lg shadow-lg"
                style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain" }}
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700 bg-gray-800">
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-3">
            Issued in {certificate.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
