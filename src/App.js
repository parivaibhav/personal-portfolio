import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Services from "./components/Services.jsx"; // Removed unused import
import Skils from "./components/Skils.jsx"; // Removed unused import
import ContactUs from "./components/contactus.jsx";
import Footer from "./components/footer.jsx";
import Loading from "./components/loding.jsx"; // Import the Loading component
import Projects from "./components/project.jsx";



function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="w-full min-h-screen text-white homepage">
      {isLoading ? (
        <Loading /> // Import and use the Loading component
      ) : (
        <>
          <Navbar />
          <LandingPage />
          <Services />
          <Projects />
          <Skils />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
