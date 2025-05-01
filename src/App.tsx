import "./App.css";
import { useState, useEffect } from "react";
import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/Navbar";
import Blog from "./components/blog/Blog";
import Projects from "./components/Projects";
import NeonCursor from "./components/NeonCursor";

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
      <div className="min-h-screen w-full relative">
        {/* Neon Cursor */}
        <NeonCursor />

        {/* Particles background */}
        <div className="fixed inset-0 z-0">
          <Particles
            className="h-full w-full"
            quantity={100}
            color="#646cff"
            size={1}
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
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Fitzpatrick U. Managuit
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-primary/80 mb-6">
                  <span className="text-[#646cff]">p1trick</span>Dev
                </h2>
                <p className="text-xl md:text-2xl">Full Stack Developer</p>
              </div>
            </section>

            {/* Projects section */}
            <section id="projects">
              <Projects />
            </section>

            {/* About section - placeholder for future component */}
            <section id="about" className="py-24 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">
                  <span className="text-[#646cff]">About</span> Me
                </h2>
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                  <p className="opacity-70 italic">
                    About section component will be implemented soon.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact section - placeholder for future component */}
            <section id="contact" className="py-24 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">
                  <span className="text-[#646cff]">Contact</span> Me
                </h2>
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                  <p className="opacity-70 italic">
                    Contact section component will be implemented soon.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
