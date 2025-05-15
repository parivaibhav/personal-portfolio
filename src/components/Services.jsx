import React from "react";

const services = [
  {
    name: "MERN Stack Development",
    src: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-69534.jpg?ga=GA1.1.1161617256.1744954471&semt=ais_hybrid&w=740",
    description:
      "I specialize in building full-stack web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). My services include developing scalable, secure, and high-performance web solutions tailored to your needs.",
  },
  {
    name: "UI/UX Design with Figma",
    src: "https://media.istockphoto.com/id/1164357236/photo/developing-programmer-reading-computer-codes-development-website-design-and-coding.webp?a=1&b=1&s=612x612&w=0&k=20&c=SSJ8cTPt-Cq3zqhmUq18-KlvA5lrO3w1BGLojqnRTx4=",
    description:
      "I create visually appealing and intuitive user interfaces using Figma. My UI/UX design services include wireframing, prototyping, and usability testing to ensure your product meets user needs and delivers a seamless experience.",
  },
  {
    name: "Mobile App Development with React Native",
    src: "https://media.istockphoto.com/id/1307162575/photo/wireless-wifi-for-remote-work-in-airport-lounge-bar-hotel-lobby-or-cafe-phone-and-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=aCfr0ha83NPwCcSfA5p3SszcnWBcclvRPpaasX7LeOA=",
    description:
      "I develop mobile applications for both iOS and Android platforms using React Native. My mobile app development services include cross-platform development, app design, and integration with backend services.",
  },
];
function Services() {
  return (
    <div className="bg-gray-800  w-100 min-h-screen flex  align-middle justify-around py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500">
          My Services
        </h2>
        <h2 className="text-4xl font-semibold mb-6 text-center text-white-500">
          What Am I Providing
        </h2>
        <p className="text-center text-gray-100 mb-10">
          I offer a range of services to help you achieve your goals. Whether
          you need a new website, a redesign, or ongoing support, I have the
          skills and experience to deliver high-quality results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center hover:bg-gray-700"
            >
              <img
                src={service.src}
                alt={service.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                {service.name}
              </h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
