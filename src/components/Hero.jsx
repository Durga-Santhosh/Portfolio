import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import myImage from '../assets/person.jpg';
import Resume from '../assets/Santhosh.pdf';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const technologies = [
    'Frontend Developer',
    'React Developer',
    'UI/UX Designer',
    'JavaScript Expert',
    'Web Developer'
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentTech = technologies[currentTechIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentTech) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
      } else {
        setCurrentText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentTech.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTechIndex, technologies]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const onButtonClick = () => {
        const pdfUrl = Resume;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Durga Santhosh Donga.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-evenly flex-wrap-reverse">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-6">
              <p className="text-base sm:text-lg text-gray-600 mb-2">Hello, I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Durga Santhosh Donga
                </span>
              </h1>
              
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6 h-8 sm:h-10 md:h-12 flex items-center">
                <span>I'm a </span>
                <span className="ml-2 text-blue-600 border-r-2 border-blue-600 animate-pulse">
                  {currentText}
                </span>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              Passionate about creating beautiful, functional, and user-friendly web applications. 
              I love turning ideas into reality through clean code and innovative design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button onClick={onButtonClick}  className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download CV
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className={`transition-all duration-1000 delay-300 mt-8 lg:mt-0 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full transform rotate-6 scale-105 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full transform -rotate-6 scale-95 opacity-20"></div>
                
                {/* Main photo container */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-teal-600 rounded-full p-2 shadow-2xl">
                  <img
                    src={myImage}
                    alt="John Smith"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Floating tech icons */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce delay-1000">
                  <span className="text-lg sm:text-2xl">⚛️</span>
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce delay-500">
                  <span className="text-lg sm:text-2xl">💻</span>
                </div>
                <div className="absolute top-1/2 -right-4 sm:-right-8 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce delay-700">
                  <span className="text-base sm:text-xl">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={24} className="sm:w-8 sm:h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;