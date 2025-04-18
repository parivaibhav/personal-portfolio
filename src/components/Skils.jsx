import React from "react";
import { FaJs } from "react-icons/fa";

const skills = [
  {
    name: "HTML",
    href: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    href: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  { name: "JavaScript", href: <FaJs /> },
  {
    name: "TypeScript",
    href: "https://upload.wikimedia.org/wikipedia/commons/4/4e/TypeScript_logo_2020.svg",
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
    href: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  },
  {
    name: "Git",
    href: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    name: "Bootstrap",
    href: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  },
  {
    name: "Tailwind CSS",
    href: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Material-UI",
    href: "https://upload.wikimedia.org/wikipedia/commons/1/10/Material-UI_Logo.svg",
  },
  {
    name: "Figma",
    href: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Adobe XD",
    href: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
  },
  {
    name: "Photoshop",
    href: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  },
  {
    name: "Illustrator",
    href: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
  },
  {
    name: "Canva",
    href: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Canva_Logo.png",
  },
  {
    name: "WordPress",
    href: "https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg",
  },
  {
    name: "SEO",
    href: "https://upload.wikimedia.org/wikipedia/commons/3/3d/SEO_icon.svg",
  },
  {
    name: "Digital Marketing",
    href: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Digital_marketing_icon.svg",
  },
  {
    name: "Content Writing",
    href: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Content_writing_icon.svg",
  },
  {
    name: "Social Media Management",
    href: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Social_media_icon.svg",
  },
];

const Skils = () => {
  return (
    <div
      className="w-full min-h-screen justify-center bg-[#134f15]"
      id="skills"
    >
      <h1 className="text-center text-5xl font-semibold py-4 md:py-20 text-white">
        Skills
      </h1>
      <div className="px-10 py-10 md:px-20 md:py-20">
        <p className="ml-4 text-lg font-light">
          Here are some of the skills I have acquired:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 align-center">
          {skills.map((skill, index) => (
            <div className="flex flex-col " key={index}>
              <img
                src={skill.href}
                alt={skill.name}
                className="w-16 h-16  rounded-md"
              />
              <div className="pt-3">
                <h2 className="text-3xl">{skill.name}</h2>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skils;
