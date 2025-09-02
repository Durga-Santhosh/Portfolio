import React from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Freelancer Finder',
      description: 'A modern Freelancer finding platform with jobs finding, user authentication, application management.',
      image: '/freelancers.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: 'https://github.com/Durga-Santhosh/FreelancerFinder/blob/main/FreelancerFinder.mp4',
      githubLink: 'https://github.com/Durga-Santhosh/FreelancerFinder',
      icon: Globe
    },
    {
      title: 'Clock App',
      description: 'A responsive Clock application with Stop watch and timmer.',
      image: '/clock.jpg',
      technologies: ['React', 'Tailwind CSS'],
      liveLink: 'https://clock-eta-fawn.vercel.app/',
      githubLink: 'https://github.com/Durga-Santhosh/Clock',
      icon: Globe
    },
    {
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts and animated weather icons.',
      image: '/weather.jpg',
      technologies: ['JavaScript', 'API Integration', 'CSS3','HTML'],
      liveLink: 'https://durga-santhosh.github.io/Weather-App/',
      githubLink: 'https://github.com/Durga-Santhosh/Weather-App',
      icon: Globe
    },
    {
      title: 'Currency Converter',
      description: 'A Currency Converter that changes the rates of one country to another.',
      image: '/CurrencyConvector.jpg',
      technologies: ['HTML','JavaScript', 'API Integration', 'CSS3'],
      liveLink: 'https://durga-santhosh.github.io/currency-converter/',
      githubLink: 'https://github.com/Durga-Santhosh/currency-converter',
      icon: Globe
    },
    {
      title: 'OTT Streaming Mobile App',
      description: 'A custom OTT streaming app built with Java and XML, featuring smooth movie playback and an intuitive interface.',
      image: '/Ott.jpg',
      technologies: ['XML', 'Java', 'API Integration'],
      liveLink: '#',
      githubLink: '#',
      icon: Smartphone
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS, showcasing projects with a modern and responsive design.',
      image: '/portfolio.jpg',
      technologies: ['ReactJs', 'Tailwind CSS'],
      liveLink: 'https://portfolio-1o7o.vercel.app/',
      githubLink: 'https://github.com/Durga-Santhosh/Portfolio',
      icon: Globe
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on to showcase my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a href={project.liveLink} className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <ExternalLink size={16} />
                    </a>
                    <a href={project.githubLink} className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                    <project.icon className="text-white" size={20} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.liveLink} className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
