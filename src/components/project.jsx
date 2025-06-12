import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Project() {
  const fakeProjects = [
    {
      id: 1,
      name: "Airbnb Clone(wanderlust)",
      description:
        "The Airbnb Clone is a full-stack web application built using the MERN (MongoDB, Express.js, Node.js) stack (frontend can be added later if needed). This project replicates the core functionalities of Airbnb, enabling users to create, manage, and interact with property listings.",
      src: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-69534.jpg?ga=GA1.1.1161617256.1744954471&semt=ais_hybrid&w=740",
      githubLink: "https:///github.com/parivaibhav/wanderlust",
      projectLink: "https://wanderlust-qv3r.onrender.com/listings/",
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
      githubLink: "https:///github.com/parivaibhav/messageHub-crud-app",
      projectLink: "",
      skilsName: ["#nodejs", "#EJS", "#ExpressJS"],
    },
  ];

  // Helper to show toast
  const showNoLinkToast = () => {
    toast.error("Link not available", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div
        className="w-full min-h-screen justify-center bg-gray-900"
        id="projects"
      >
        <h1 className="text-center text-5xl font-semibold py-4 md:py-10 text-white">
          Projects
        </h1>
        <div className="px-10 py-10 md:px-20 md:py-20">
          <p className="ml-4 text-lg font-light">
            Here are some of the projects I have worked on:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {fakeProjects.map((project) => (
              <div key={project.id} className="flex h-full">
                <div className="hover:animate-background flex flex-col justify-between rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-full">
                  <div className="flex flex-col gap-5 px-7 py-3 rounded-lg shadow-lg card bg-[#1d3557] h-full">
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
                    <div className="flex w-full items-center justify-between mt-auto">
                      <button
                        className="project-btn"
                        onClick={() => {
                          if (
                            !project.projectLink ||
                            project.projectLink === ""
                          ) {
                            showNoLinkToast();
                          } else {
                            window.open(project.projectLink, "_blank");
                          }
                        }}
                      >
                        <span>Project Link</span>
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-icon"
                          >
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                          </svg>
                        </span>
                      </button>
                      <button
                        className="Btn"
                        onClick={() => {
                          if (
                            !project.githubLink ||
                            project.githubLink === ""
                          ) {
                            toast.info("Link not available", {
                              position: "top-center",
                              autoClose: 2000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
                          } else {
                            window.open(project.githubLink, "_blank");
                          }
                        }}
                      >
                        <span className="svgContainer">
                          <svg
                            fill="white"
                            viewBox="0 0 496 512"
                            height="1.6em"
                          >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                          </svg>
                        </span>
                        <span className="BG"></span>
                      </button>
                    </div>
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
