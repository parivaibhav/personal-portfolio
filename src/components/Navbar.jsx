import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About us", href: "#aboutus" },
    { name: "Contact Us", href: "#contactus" },
  ];

  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed z-50 w-full px-6 md:px-20 py-4 md:py-8 text-slate-50 font-bold flex justify-between items-center transition-transform duration-300 bg-white">
      <div className="text-black font-semibold text-xl md:text-2xl">
        Vaibhav Pari
      </div>
      {/* Desktop Nav */}
      <div className="md:flex hidden flex-row gap-10 font-light">
        {navItems.map((item, index) => (
          <a
            href={item.href}
            className={`text-md font-capitalize text-black font-medium hover:text-blue-500 transition duration-300 `}
            key={index}
            onClick={handleNavClick(item.href)}
          >
            {item.name}
          </a>
        ))}
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
          overflow: "hidden",
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-3xl text-black focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        {navItems.map((item, index) => (
          <a
            href={item.href}
            className={`text-xl font-medium hover:text-blue-500 transition duration-300 ${
              index === 0 ? "text-blue-500" : "text-black"
            }`}
            key={index}
            onClick={handleNavClick(item.href)}
          >
            {item.name}
          </a>
        ))}
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
