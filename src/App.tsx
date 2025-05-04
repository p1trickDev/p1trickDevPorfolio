import "./App.css";
import { useState, useEffect } from "react";
import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/Navbar";
import Blog, { BlogPost } from "./components/blog/Blog"; // Import the BlogPost type
import Projects from "./components/Projects";
import NeonCursor from "./components/NeonCursor";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(
    null
  ); // Use the proper type

  // Function to handle navigation
  const handleNavigation = (pageName: string) => {
    setCurrentPage(pageName);
  };

  // Function to handle returning from a blog post
  const handleBackFromBlogPost = () => {
    setSelectedBlogPost(null);

    // Add a small delay to ensure the DOM is updated before scrolling
    setTimeout(() => {
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
            experience: "Experience",
            blog: "Blog",
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
    ["home", "projects", "about", "experience", "blog", "contact"].forEach(
      (id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    );

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="min-h-screen w-full relative bg-black">
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

        {/* Navbar at the top - only show when not viewing a blog post */}
        {!selectedBlogPost && (
          <div className="fixed top-0 left-0 right-0 pt-4 z-20">
            <Navbar activeItem={currentPage} setActiveItem={handleNavigation} />
          </div>
        )}

        {/* Show BlogPost view or main content */}
        {selectedBlogPost ? (
          <div className="pt-10">
            <Blog
              initialSelectedPost={selectedBlogPost}
              onBack={handleBackFromBlogPost}
            />
          </div>
        ) : (
          <div className="flex flex-col">
            {/* Home section */}
            <section
              id="home"
              className="min-h-screen flex items-center justify-center pt-16"
            >
              <div className="text-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                  Fitzpatrick U. Managuit
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-primary/80 mb-4 sm:mb-6">
                  <span className="text-[#646cff]">p1trick</span>Dev
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl">
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

            {/* Experience section */}
            <section id="experience">
              <Experience />
            </section>

            {/* Blog section */}
            <section id="blog" className="py-24 px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">
                  <span className="text-[#646cff]">My</span> Blog
                </h2>
                <Blog onPostSelect={setSelectedBlogPost} />
              </div>
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
