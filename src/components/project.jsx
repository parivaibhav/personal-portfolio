import React from "react";
import { FaGithub } from "react-icons/fa";
import { gsap } from "gsap/gsap-core";

function Project() {
  const fakeProjects = [
    {
      id: 1,
      name: "Airbnb Clone(wanderlust)",
      description:
        "The Airbnb Clone is a full-stack web application built using the MERN (MongoDB, Express.js, Node.js) stack (frontend can be added later if needed). This project replicates the core functionalities of Airbnb, enabling users to create, manage, and interact with property listings.",
      src: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-69534.jpg?ga=GA1.1.1161617256.1744954471&semt=ais_hybrid&w=740",
      githubLink: "https:///github.com/parivaibhav/wanderlust",
      projectLink: "",
      skilsName: ["#mongoDB", "#node.js", "#ExpressJS"],
    },
    {
      id: 2,
      name: "Simon's Game",
      description:
        "Simon Game is a classic memory game where players must repeat a sequence of colors and sounds. This project is built using HTML, CSS, and JavaScript, showcasing my skills in front-end development.",
      src: "https://media.istockphoto.com/id/1164357236/photo/developing-programmer-reading-computer-codes-development-website-design-and-coding.webp?a=1&b=1&s=612x612&w=0&k=20&c=SSJ8cTPt-Cq3zqhmUq18-KlvA5lrO3w1BGLojqnRTx4=",
      githubLink: "https:///github.com/parivaibhav/simonGame",
      projectLink: "https://simonssgame.netlify.app/",
      skilsName: ["#HTML", "#CSS", "#JavaScript"],
    },
    {
      id: 3,
      name: "messageHub",
      description:
        "MessageHub is a Node.js and Express.js-based chat API that enables messaging between two users using sender and receiver names. It supports creating, updating, deleting, and retrieving messages. Ideal for one-on-one chat applications, MessageHub provides a simple RESTful backend for personal messaging or customer support platforms.",
      src: "https://media.istockphoto.com/id/1307162575/photo/wireless-wifi-for-remote-work-in-airport-lounge-bar-hotel-lobby-or-cafe-phone-and-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=aCfr0ha83NPwCcSfA5p3SszcnWBcclvRPpaasX7LeOA=",
      githubLink: "https:///github.com/parivaibhav/messageHub",
      projectLink: "",
      skilsName: ["#nodejs", "#EJS", "#ExpressJS"],
    },
  ];

  return (
    <>
      <div
        className="w-full min-h-screen justify-center bg-gray-900"
        id="projects"
      >
        <h1 className="text-center text-5xl font-semibold py-4 md:py-20 text-white">
          Projects
        </h1>
        <div className="px-10 py-10 md:px-20 md:py-20">
          <p className="ml-4 text-lg font-light">
            Here are some of the projects I have worked on:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {fakeProjects.map((project) => (
              <div
                className="flex flex-col gap-5 bg-slate-600 px-7 py-3 rounded-lg shadow-lg card"
                key={project.id}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power1.out",
                  });
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power1.out",
                  });
                }}
              >
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-64 object-cover rounded-md"
                />
                <h2 className="text-3xl">{project.name}</h2>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skilsName.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex">
                  <div className="flex justify-between gap-1">
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                      View Project
                    </button>
                    <button
                      type="button"
                      className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <FaGithub className="inline-block mr-2" />
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
