import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-200 homepage">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
