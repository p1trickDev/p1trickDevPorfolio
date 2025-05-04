import "./App.css";
import { useState, useEffect } from "react";
import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/Navbar";
import Blog from "./components/blog/Blog";
import Projects from "./components/Projects";
import NeonCursor from "./components/NeonCursor";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Function to handle navigation
  const handleNavigation = (pageName: string) => {
    setCurrentPage(pageName);
  };

  // Set up intersection observer to update active section based on scrolling
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // Map section IDs to page names
          const sectionToPage: Record<string, string> = {
            home: "Home",
            projects: "Projects",
            about: "About",
            contact: "Contact",
          };

          if (sectionToPage[id]) {
            setCurrentPage(sectionToPage[id]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    ["home", "projects", "about", "contact"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="min-h-screen w-full relative bg-black">
        {/* Neon Cursor */}
        <NeonCursor />

        {/* Particles background - update to more subtle white particles */}
        <div className="fixed inset-0 z-0">
          <Particles
            className="h-full w-full"
            quantity={70}
            color="#ffffff"
            size={0.7}
            staticity={70}
          />
        </div>

        {/* Navbar at the top - fixed position */}
        <div className="fixed top-0 left-0 right-0 pt-4 z-20">
          <Navbar activeItem={currentPage} setActiveItem={handleNavigation} />
        </div>

        {/* Show Blog page or main content */}
        {currentPage === "Blog" ? (
          <div className="pt-20">
            <Blog />
          </div>
        ) : (
          <div className="flex flex-col">
            {/* Home section */}
            <section
              id="home"
              className="min-h-screen flex items-center justify-center pt-16"
            >
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                  Fitzpatrick U. Managuit
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-white/80 mb-6">
                  <span className="text-white">p1trick</span>Dev
                </h2>
                <p className="text-xl md:text-2xl text-white/70">
                  Full Stack Developer
                </p>
              </div>
            </section>

            {/* Projects section */}
            <section id="projects">
              <Projects />
            </section>

            {/* About section */}
            <section id="about">
              <About />
            </section>

            {/* Contact section */}
            <section id="contact">
              <Contact />
            </section>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
