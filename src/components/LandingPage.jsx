import React from "react";
// import { animate, svg } from "animejs";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { gsap } from "gsap";

function LandingPage() {
  // Animation for the mouse icon
  const icons = [
    { icon: <FaGithub />, href: "https://github.com/parivaibhav" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/vaibhav-pari-399a88230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },
    { icon: <FaInstagram />, href: "https://www.instagram.com/vaibhhav87/" },
  ];
  const renderIcons = () => {
    return icons.map((item, index) => (
      <a
        key={index}
        href={item.href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-gray-400 hover:text-white transition"
      >
        {item.icon}
      </a>
    ));
  };

  React.useEffect(() => {
    gsap.fromTo(
      ".animated-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="h-screen bg-gray-900 text-white flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row-reverse md:flex-row items-center justify-between w-10/12 gap-10 lg:gap-[30px] relative">
        {/* Left Content */}
        <div className="flex items-center justify-center">
          <motion.img
            src="images/profile.jpg"
            alt="Profile"
            className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            animate={{
              scale: [0.5, 1],
              rotate: [0, 0, 0, 0, 0],
              borderRadius: ["50%", "50%", "50%", "50%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1,
            }}
          />
        </div>
        {/* Right Image */}
        <div className="w-100 flex flex-col items-start w-[90%] md:w-[70%] lg:w-[50%] mt-5 ">
          <h1 className="text-5xl font-bold mb-4 animated-text">
            Hi, I'm a MERN Stack Developer
          </h1>
          <p className="text-lg text-gray-400 mb-8 animated-text">
            I specialize in building modern, scalable, and efficient web
            applications using MongoDB, Express, React, and Node.js.
          </p>
          <div className="flex gap-4 mb-8">{renderIcons()}</div>
          <div>
            <a
              href="https://www.linkedin.com/in/vaibhav-pari-399a88230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="button"
            >
              <svg
                viewBox="0 0 16 16"
                className="bi bi-lightning-charge-fill"
                fill="currentColor"
                height={16}
                width={16}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
