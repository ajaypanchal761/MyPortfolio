import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { useState, useEffect } from 'react';
// Import your profile image here - replace 'profile2.png' with your image filename
import profileImage from '../assets/myprofile.jpeg';
import resumePDF from '../assets/AjayPanchalResu.pdf';
import { useMobileDetection } from '../utils/deviceUtils';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const isMobile = useMobileDetection();

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = profileImage;
  }, []);

  return (
    <section id="about" className="py-16 px-[7vw] md:px-[8vw] lg:px-[10vw] xl:px-[15vw] font-sans -mt-16 md:mt-16 lg:mt-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-2 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ajay Panchal
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Java Developer',
                'Frontend Developer',
                'Backend Developer',
                'Fullstack Developer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Full-Stack Developer with 3 months of experience in
            building scalable web applications. Skilled in both Frontend and
            Backend Development, I specialize in the Java and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href={resumePDF}
            download="AjayPanchalResume.pdf"
            className="inline-block text-white py-3 px-8 rounded-full -mt-6 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:pl-10">
          {isMobile ? (
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full relative">
              <img
                src={profileImage}
                alt="Ajay Panchal"
                className={`w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                </div>
              )}
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-full">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">👤</div>
                    <div className="text-sm">Image not available</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Ajay Panchal"
                className={`w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                </div>
              )}
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-full">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">👤</div>
                    <div className="text-sm">Image not available</div>
                  </div>
                </div>
              )}
            </Tilt>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
