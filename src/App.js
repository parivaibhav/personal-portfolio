import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";

import Skils from "./components/Skils.jsx"; // Removed unused import
import ContactUs from "./components/contactus.jsx";
import Footer from "./components/footer.jsx";
import Projects from "./components/project.jsx";


function App() {
  return (
    <div className="w-full min-h-screen text-white homepage">
      <Navbar />
      <LandingPage />
      <Projects />
      <Skils /> 
      <ContactUs />
      <Footer />

    </div>
  );
}

export default App;
