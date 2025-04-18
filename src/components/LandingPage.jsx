import React from "react";
import { animate } from "animejs";
import { CiDesktopMouse2 } from "react-icons/ci";

function LandingPage() {
  const targets = "h1"; // Define the target element(s) for animation
  const parameters = {
    y: [
      { to: "-2.75rem", ease: "outExpo", duration: 600 },
      { to: 0, ease: "outBounce", duration: 800, delay: 100 },
    ],
    rotate: {
      from: "-1turn",
      delay: 0,
    },
    delay: (_, i) => i * 50,
    ease: "inOutCirc",
    loopDelay: 1000,
    loop: true,
  };
  const animation = animate(targets, parameters);
  animate("h1", {
    // Property keyframes
    y: [
      { to: "-2.75rem", ease: "outExpo", duration: 600 },
      { to: 0, ease: "outBounce", duration: 800, delay: 100 },
    ],
    // Property specific parameters
    rotate: {
      from: "-1turn",
      delay: 0,
    },
    delay: (_, i) => i * 50, // Function based value
    ease: "inOutCirc",
    loopDelay: 1000,
    loop: true,
  });
  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center h-full px-10">
        <img
          src="images/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-32"
        />
        <h1 className="text-5xl font-bold mb-4 .txt">
          Hi, I'm a MERN Stack Developer
        </h1>
        <p className="text-lg text-gray-400 mb-8 text-center">
          I specialize in building modern, scalable, and efficient web
          applications using MongoDB, Express, React, and Node.js.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400">
        <CiDesktopMouse2 className="text-4xl animate-bounce" />
      </div>
    </div>
  );
}

export default LandingPage;
