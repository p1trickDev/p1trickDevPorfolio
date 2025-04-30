import "./App.css";
import { useState } from "react";
import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/Navbar";
import Blog from "./components/blog/Blog";
import NeonCursor from "./components/NeonCursor";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Function to handle navigation
  const handleNavigation = (pageName: string) => {
    setCurrentPage(pageName);
  };

  return (
    <>
      <div className="min-h-screen w-full relative flex flex-col">
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

        {/* Navbar at the top */}
        <div className="pt-4">
          <Navbar activeItem={currentPage} setActiveItem={handleNavigation} />
        </div>

        {/* Main content - centered vertically and horizontally */}
        <div className="relative z-10 flex-grow flex items-center justify-center">
          {currentPage === "Home" && (
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Fitzpatrick U. Managuit
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-primary/80 mb-6">
                <span className="text-[#646cff]">p1trick</span>Dev
              </h2>
              <p className="text-xl md:text-2xl">Full Stack Developer</p>
            </div>
          )}

          {currentPage === "Blog" && <Blog />}

          {/* Add other page components here */}
        </div>
      </div>
    </>
  );
}

export default App;
