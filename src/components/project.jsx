import React from "react";

function Project() {
  const fakeProjects = [
    {
      id: 1,
      name: "FinCore Dashboard",
      description:
        "A financial analytics dashboard offering real-time stock tracking, news feeds, and personalized reports. Built with Angular, Chart.js, and Node.js.",
      src: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-69534.jpg?ga=GA1.1.1161617256.1744954471&semt=ais_hybrid&w=740",
    },
    {
      id: 2,
      name: "EduSpark Academy",
      description:
        "A fully responsive e-learning platform with user authentication, video courses, quizzes, and progress tracking. Backend powered by Express.js and PostgreSQL.",
      src: "https://media.istockphoto.com/id/1164357236/photo/developing-programmer-reading-computer-codes-development-website-design-and-coding.webp?a=1&b=1&s=612x612&w=0&k=20&c=SSJ8cTPt-Cq3zqhmUq18-KlvA5lrO3w1BGLojqnRTx4=",
    },
    {
      id: 3,
      name: "Project Gamma",
      description: "This is the third project.",
      src: "https://media.istockphoto.com/id/1307162575/photo/wireless-wifi-for-remote-work-in-airport-lounge-bar-hotel-lobby-or-cafe-phone-and-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=aCfr0ha83NPwCcSfA5p3SszcnWBcclvRPpaasX7LeOA=",
    },
  ];

  return (
    <div
      className="w-full min-h-screen justify-center bg-[#1b134f]"
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
              className="flex flex-col gap-5 bg-slate-400 px-7 py-3 rounded-lg shadow-lg"
              key={project.id}
            >
              <img
                src={project.src}
                alt={project.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="text-3xl">{project.name}</h2>
              <p>{project.description}</p>
              <div className="px-6 pt-4 pb-2">
                {["#angular.js", "#node.js", "#mongoDB"].map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ring-2 ring-gray-100 hover:bg-gray-300 transition duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
