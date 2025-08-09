import { useState } from "react";
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-4xl overflow-hidden relative max-h-[90vh]">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500 transition-colors duration-200"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 w-full flex justify-center bg-gray-900 px-4 lg:px-6">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="relative overflow-hidden rounded-xl bg-gray-800 shadow-2xl">
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto max-h-[400px] min-h-[300px] object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:p-8 p-6 overflow-y-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm lg:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
