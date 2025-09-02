import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 60, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', level: 50, color: 'from-blue-500 to-cyan-500' },
    { name: 'Database', level: 40, color: 'from-blue-600 to-blue-800' },
    { name: 'Node.js', level: 40, color: 'from-green-500 to-green-700' },
    { name: 'Tailwind CSS', level: 60, color: 'from-teal-500 to-cyan-500' },
    { name: 'Git/GitHub', level: 80, color: 'from-gray-600 to-gray-800' },
    { name: 'Responsive Design', level: 90, color: 'from-purple-500 to-pink-500' }
  ];

  const technologies = [
    'Java','C++',,'React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
    'Node.js', 'Express', 'Git', 'GitHub', 'VS Code','Android developement', 'Figma',
    'Responsive Design', 'REST APIs', 'MongoDB', 'Firebase','MySQL'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div ref={skillsRef} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technical Proficiency</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: inView ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;