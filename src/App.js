// App.jsx
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Services from "./components/Services.jsx";
import Skils from "./components/Skils.jsx";
import ContactUs from "./components/contactus.jsx";
import Footer from "./components/footer.jsx";
import Projects from "./components/project.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx"; // <-- New import

function App() {



  return (
    <>
      <Navbar />
      <ScrollProgress /> {/* Scroll Progress Bar */}
      <LandingPage />
      <Services />
      <Projects />
      <Skils />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
