import React from 'react';
import { User, Heart, Code, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Passionate About Creating Digital Experiences
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                I'm pursuing computer science  with a strong passion for frontend development 
                and user experience design. I believe in writing clean, efficient code and creating 
                interfaces that are both beautiful and functional.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                My journey in web development started during my college years, and I've been constantly 
                learning and improving my skills. I'm excited to contribute to innovative projects and 
                work with experienced teams to build amazing digital products.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Quick Learner</span>
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">Team Player</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Problem Solver</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: User, title: 'Personal Growth', desc: 'Constantly learning new technologies' },
                { icon: Heart, title: 'User-Centric', desc: 'Designing with users in mind' },
                { icon: Code, title: 'Clean Code', desc: 'Writing maintainable solutions' },
                { icon: Lightbulb, title: 'Innovation', desc: 'Bringing creative ideas to life' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;