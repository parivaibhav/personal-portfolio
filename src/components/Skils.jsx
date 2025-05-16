import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    href: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    href: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },

  {
    name: "TypeScript",
    href: "https://upload.wikimedia.org/wikipedia/commons/4/4e/TypeScript_logo_2020.svg",
  },
  {
    name: "JavaScript",
    href: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "React",
    href: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Node.js",
    href: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express.js",
    href: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "MongoDB",
    href: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mongodb-icon.svg/1200px-Mongodb-icon.svg.png",
  },
  {
    name: "Git",
    href: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    name: "Bootstrap",
    href: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  },
];

const Skils = () => {
  const filteredSkills = skills.filter((skill) =>
    [
      "HTML",
      "React",

      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "Git",
    ].includes(skill.name)
  );

  return (
    <div className="w-full min-h-screen justify-center bg-gray-800" id="skills">
      <h1 className="text-center text-5xl font-semibold py-2 md:py-20 text-white">
        Skills
      </h1>
      <div className="px-6 py-2 md:px-20 md:py-20 ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 place-items-center">
          {filteredSkills.map((skill, index) => (
            <motion.div
              className="flex flex-col items-center"
              key={index}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            
            >
              <img
                src={skill.href}
                alt={skill.name}
                className="w-16 h-16 rounded-md"
              />
              <div className="pt-3 text-center">
                <h2 className="text-3xl">{skill.name}</h2>
                <p>{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skils;
