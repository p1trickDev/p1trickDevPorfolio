import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  //   SiVisualstudio,
  SiFigma,
  SiGithub,
  SiJirasoftware,
  SiPostman,
} from "react-icons/si";

// Define tech stack and tools data structure
type TechItem = {
  name: string;
  icon: React.ReactNode;
};

const techStack: TechItem[] = [
  { name: "React", icon: <SiReact size={24} /> },
  { name: "TypeScript", icon: <SiTypescript size={24} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
  { name: "Node.js", icon: <SiNodedotjs size={24} /> },
  { name: "MongoDB", icon: <SiMongodb size={24} /> },
  { name: "Express", icon: <SiExpress size={24} /> },
];

const tools: TechItem[] = [
  //   { name: "VS Code", icon: <SiVisualstudio size={24} /> },
  { name: "Git", icon: <SiGit size={24} /> },
  { name: "GitHub", icon: <SiGithub size={24} /> },
  { name: "Figma", icon: <SiFigma size={24} /> },
  { name: "Jira", icon: <SiJirasoftware size={24} /> },
  { name: "Postman", icon: <SiPostman size={24} /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-[#646cff]">About</span> Me
        </h2>

        <div className="mb-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-6">
            I'm a passionate Full Stack Developer with expertise in building
            modern web applications. With a strong foundation in both frontend
            and backend technologies, I create responsive, user-friendly
            applications that solve real-world problems.
          </p>
          <p className="text-lg text-gray-300">
            My approach combines clean code, thoughtful architecture, and
            attention to detail to deliver exceptional user experiences and
            maintainable solutions.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
        className="relative px-6 py-8 bg-black/50 backdrop-blur-sm rounded-lg 
                     border border-white/10 h-full overflow-hidden"
      >
        <h3 className="text-2xl font-semibold mb-6 text-[#646cff]">{title}</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center 
                           bg-black/40 rounded-lg text-[#646cff]"
              >
                {item.icon}
              </div>
              <span className="text-sm text-gray-300">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
