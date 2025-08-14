// App.jsx
import "./App.css";
import React from "react";
 // <-- New import
// import Navbar from "./components/Navbar.jsx";
// import LandingPage from "./components/LandingPage.jsx";
// import Services from "./components/Services.jsx";
// import Skills from "./components/Skills.jsx";
// import ContactUs from "./components/ContactUs.jsx";
// import Footer from "./components/Footer.jsx";
// import Projects from "./components/Projects.jsx";
import PortfolioResume from "./components/PortfolioResume.jsx";



function App() {

  // Import icons

  return (
    <>
      {/* <Navbar /> */}
      <PortfolioResume></PortfolioResume>
   
      {/* <LandingPage />
      <Services />
      <Projects />
      <Skills />
      <ContactUs />
      <Footer /> */}
   
    </>
  );
}

export default App;
