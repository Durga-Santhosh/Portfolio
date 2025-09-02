import React from "react";
import { FaAward,FaGraduationCap,FaRegFolderOpen } from "react-icons/fa";
import { LuCircleCheckBig } from "react-icons/lu";

const Education = () => {
  const data = [
    {
      icon: <LuCircleCheckBig className="text-[#00C561] text-4xl" />,
      title: "2+ Internships Completed",
      desc: "Gained hands-on experience in web development roles across different companies",
    },
    {
      icon: <FaGraduationCap className="text-blue-500 text-4xl" />,
      title: "B.Tech CSE Student",
      desc: "Final-year student at Aditya College of Engineering with strong academic foundation.",
    },
    {
      icon: <FaRegFolderOpen className="text-[#E341B6] text-4xl" />,
      title: "5+ Full-Stack Projects",
      desc: "Built comprehensive applications with real-time functionality and modern architectures",
    },
    {
      icon: <FaAward className="text-purple-500 text-4xl" />,
      title: "Certifications",
      desc: "Earned certifications in React.js, Node.js, and full-stack web development.",
    },
  ];

  return (
    <section
      id="highlights"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 md:px-16 py-12"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My<span className="text-blue-600"> Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
A quick snapshot of my achievements and professional journey          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
