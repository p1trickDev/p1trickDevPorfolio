import { cn } from "@/lib/utils";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Import images from assets
import PersonalPortfolioImg from "@/assets/PersonalPorfolio.png";
import TodoAppImg from "@/assets/TodoApp.png";
import PokemonGameImg from "@/assets/PokemonGame.png";

// Define project type
type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  sourceUrl: string;
  liveUrl: string;
  imageUrl: string;
};

// Updated project data with local image imports
const projects: Project[] = [
  {
    id: "1",
    title: "Personal Portfolio",
    description:
      "A modern portfolio website built with React and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    sourceUrl: "https://github.com/p1trickDev/p1trickDevPorfolio",
    liveUrl: "https://p1trickdevporforlio.netlify.app/",
    imageUrl: PersonalPortfolioImg,
  },
  {
    id: "2",
    title: "Todo List App",
    description:
      "A feature-rich Todo application for managing tasks and productivity.",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
    sourceUrl: "https://github.com/p1trickDev/ReactTodoApp",
    liveUrl: "https://week1-todo-app.netlify.app/",
    imageUrl: TodoAppImg,
  },
  {
    id: "3",
    title: "Pokemon Game",
    description: "An interactive Pokemon-themed game with battle mechanics.",
    technologies: ["React", "JavaScript", "PokeAPI", "CSS"],
    sourceUrl: "https://github.com/p1trickDev/PokeSlayer",
    liveUrl: "#",
    imageUrl: PokemonGameImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-[#646cff]">My</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 flex flex-col h-full">
      {/* Project image */}
      <div className="h-48 bg-black/40 relative overflow-hidden">
        {project.imageUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-3xl text-[#646cff]">
              {project.title.substring(0, 2)}
            </div>
          </div>
        )}
      </div>

      {/* Project details */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-[#646cff]">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium py-1.5 px-3",
                "rounded-full border border-white/20 hover:bg-white/10",
                "transition-colors duration-300"
              )}
            >
              <FiGithub size={12} />
              Source Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium py-1.5 px-3",
                "rounded-full bg-[#646cff]/80 hover:bg-[#646cff] text-white",
                "transition-colors duration-300"
              )}
            >
              <FiExternalLink size={12} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
