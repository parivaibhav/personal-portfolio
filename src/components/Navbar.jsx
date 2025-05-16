import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`  fixed z-50 w-full px-6 md:px-20 py-4 md:py-8 text-slate-50 font-['FoundersGrotesk X-cond Bold'] flex justify-between items-center transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white`}
    >
      <div className="font-['Founders Grotesk Bold'] text-black font-semibold text-xl md:text-2xl">
        Vaibhav Pari
      </div>
      <div className="md:flex hidden flex-row gap-10 font-light">
        {[
          { name: "Services", href: "#services" },
          { name: "Projects", href: "#projects" },
          { name: "About us", href: "#aboutus" },
          { name: "Contact Us", href: "#contactus" },
        
        ].map((item, index) => (
          <a
            href={item.href}
            className={`text-md font-capitalize text-black font-medium hover:text-blue-500 transition duration-300 ${
              index === 0 ? "text-blue-500" : "text-black"
            }`}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.querySelector(item.href);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
