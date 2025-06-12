// App.jsx
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Services from "./components/Services.jsx";
import Skils from "./components/Skils.jsx";
import ContactUs from "./components/contactus.jsx";
import Footer from "./components/footer.jsx";
import Loading from "./components/loding.jsx";
import Projects from "./components/project.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx"; // <-- New import

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setTimeout(handleLoad, 4000);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="w-full min-h-screen text-white homepage">
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
}

export default App;
