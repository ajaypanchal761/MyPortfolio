import { useState, useEffect } from "react";
import { projects } from "../constants";
import ImageWithFallback from "./ImageWithFallback";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-18 pb-7 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <div className="relative overflow-hidden rounded-xl bg-gray-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4" 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={handleBackdropClick}
        >
          <div 
            className="bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden relative border border-gray-700" 
            style={{ 
              zIndex: 10000,
              width: '90%',
              maxWidth: '1200px',
              maxHeight: '90vh',
              margin: '0 auto'
            }}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 lg:p-6 border-b border-gray-700">
              <h2 className="text-lg lg:text-xl font-semibold text-white">Project Details</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-xl lg:text-2xl font-bold transition-colors duration-200 p-1 lg:p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row" style={{ maxHeight: 'calc(90vh - 120px)', overflow: 'hidden' }}>
              {/* Image Section */}
              <div className="lg:w-1/2 w-full p-4 lg:p-6" style={{ minWidth: 0 }}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative overflow-hidden rounded-xl bg-gray-800 shadow-2xl w-full" style={{ maxWidth: '100%' }}>
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: '400px', minHeight: '300px' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 w-full p-4 lg:p-6 overflow-y-auto" style={{ minWidth: 0 }}>
                <div className="space-y-4">
                  {/* Project Title */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 break-words">
                      {selectedProject.title}
                    </h3>
                    <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <h4 className="text-base font-semibold text-purple-400 mb-2">Description</h4>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed break-words">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Project Tags */}
                  <div>
                    <h4 className="text-base font-semibold text-purple-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1 lg:gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#251f38] text-xs lg:text-sm font-semibold text-purple-400 rounded-full px-2 lg:px-3 py-1 lg:py-2 border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  {selectedProject.link && (
                    <div className="pt-2 lg:pt-4">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 text-sm lg:text-base"
                      >
                        <span>View Project</span>
                        <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
