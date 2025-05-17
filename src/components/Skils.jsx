import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiNetlify } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Skils() {
  // Importing required icons from react-icons

  const skills = [
    { icon: <FaHtml5 color="#e34c26" />, name: "HTML5" },
    { icon: <FaCss3Alt color="#264de4" />, name: "CSS3" },
    { icon: <FaJs color="#f0db4f" />, name: "JavaScript" },
    { icon: <FaBootstrap color="#457b9d" />, name: "Bootstrap" },
    { icon: <SiTailwindcss color="#38bdf8" />, name: "Tailwind CSS" },
    { icon: <SiExpress color="#000000" />, name: "Express" },
    { icon: <FaNodeJs color="#68a063" />, name: "Node.js" },
    { icon: <SiMongodb color="#4db33d" />, name: "MongoDB" },
    { icon: <FaReact color="#76a6d8" />, name: "React Js" },
    { icon: <FaGitAlt color="#f34f29" />, name: "Git" },
    { icon: <FaGithub color="#fff" />, name: "GitHub" },
    { icon: <SiNetlify />, name: "Netlify" },
  ];

  return (
    <>
      <div className="bg-gray-800 w-full min-h-screen">
        <div className="text-center text-5xl font-semibold py-4 md:py-10 text-white">
          Skils
        </div>
        <div className="flex items-center justify-center py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center bg-gray-700 rounded-lg p-6 shadow-md hover:bg-[#1d3557] transition-transform transform"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.01,
                  duration: 0.2,
                  type: "spring",
                }}
                whileHover={{
                
                  boxShadow: "0px 4px 24px #1d3557",
                }}
              >
                <div className="text-5xl mb-2">{skill.icon}</div>
                <span className="text-white text-lg font-semibold">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skils;
