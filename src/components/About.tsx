import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiFigma,
  SiGithub,
  SiPostman,
  SiFirebase,
  SiNeovim,
} from "react-icons/si";
import { ReactNode } from "react";

type TechItem = {
  name: string;
  icon: ReactNode;
};

const techStack: TechItem[] = [
  { name: "React", icon: <SiReact size={20} className="sm:text-[24px]" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript size={20} className="sm:text-[24px]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={20} className="sm:text-[24px]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={20} className="sm:text-[24px]" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={20} className="sm:text-[24px]" />,
  },
  { name: "Express", icon: <SiExpress size={20} className="sm:text-[24px]" /> },
];

const tools: TechItem[] = [
  { name: "Git", icon: <SiGit size={20} className="sm:text-[24px]" /> },
  { name: "GitHub", icon: <SiGithub size={20} className="sm:text-[24px]" /> },
  { name: "Figma", icon: <SiFigma size={20} className="sm:text-[24px]" /> },
  { name: "Neovim", icon: <SiNeovim size={20} className="sm:text-[24px]" /> },
  { name: "Postman", icon: <SiPostman size={20} className="sm:text-[24px]" /> },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
          <span className="text-[#646cff]">About</span> Me
        </h2>

        <div className="mb-8 sm:mb-12 max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
            I'm a passionate Full Stack Developer with expertise in building
            modern web applications. With a strong foundation in both frontend
            and backend technologies, I create responsive, user-friendly
            applications that solve real-world problems.
          </p>
          <p className="text-base sm:text-lg text-gray-300">
            My approach combines clean code, thoughtful architecture, and
            attention to detail to deliver exceptional user experiences and
            maintainable solutions.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          <GlowingCard title="Tech Stack" items={techStack} />
          <GlowingCard title="Tools" items={tools} />
        </div>
      </div>
    </section>
  );
}

interface GlowingCardProps {
  title: string;
  items: TechItem[];
}

function GlowingCard({ title, items }: GlowingCardProps) {
  return (
    <div className="relative group">
      {/* Animated border glow effect */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-[#646cff] to-purple-600 rounded-lg blur opacity-75 
                     group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-glow"
      ></div>

      <div
        className="relative px-4 sm:px-6 py-6 sm:py-8 bg-black/50 backdrop-blur-sm rounded-lg 
                     border border-white/10 h-full overflow-hidden"
      >
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#646cff]">
          {title}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              className="flex flex-col items-center gap-1.5 sm:gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                           bg-black/40 rounded-lg text-[#646cff]"
              >
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm text-gray-300 text-center">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
