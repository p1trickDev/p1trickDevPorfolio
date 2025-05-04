import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiChevronDown,
} from "react-icons/fi";

// Define experience type
type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
};

// Sample experience data
const experiences: ExperienceItem[] = [
  {
    id: "1",
    role: "Front-end Developer Intern",
    company: "Western Mindanao State University",
    location: "Zamboanga, Philippines",
    period: "Feb 17 - Present",
    description:
      "Help developed the Document Tracking System for the Office of the President.",
    achievements: [
      "Collaborated with a team of developers to design and implement new features",
      "Conducted code reviews and provided constructive feedback to peers",
      "Participated in daily standups and agile development processes",
      "Worked closely with the design team to ensure a seamless user experience",
    ],
    tags: ["html", "CSS", "Javascript", "Django", "Sqlite", "Git"],
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Western Mindanao State University",
    location: "Zamboanga, Philippines",
    period: "April - Present",
    description:
      "Collaborated with developers to build web applications as part of the week project requirement.",
    achievements: [
      "Contributed to the development of the weekly project",
      "Worked with a developer to build the  web applications",
      "Implemented RESTful APIs for seamless data exchange between front-end and mock up database using json-server",
      "Optimized application performance and improved user experience",
      "Designed and implemented responsive UI components using React",
    ],
    tags: ["React", "Tailwind", "CSS", "Git", "json-server", "PokeAPI"],
  },
  {
    id: "3",
    role: "Full Stack Developer",
    company: "Western Mindanao State University",
    location: "Zamboanga, Philippines",
    period: " October 2024 - January 2025",
    description:
      "Develop a full stack ecommerce platform namede Yarncraft Emporium using PHP.",
    achievements: [
      "Designed and implemented a user-friendly interface for the platform",
      "Integrated payment gateways and shipping APIs for seamless transactions",
      "Developed a robust backend using PHP and MySQL for data management",
      "Implemented security measures to protect user data and transactions",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#646cff]">Work</span> Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline connector */}
      {index < experiences.length - 1 && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-white/10 -z-10"></div>
      )}

      <div
        onClick={toggleExpand}
        className={cn(
          "group bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300",
          "hover:bg-black/30 cursor-pointer",
          isExpanded ? "p-6" : "p-5"
        )}
      >
        <div className="flex flex-col md:flex-row items-start gap-4">
          {/* Timeline dot */}
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#646cff]/20 text-[#646cff] border border-[#646cff]/30">
            <FiBriefcase size={18} />
          </div>

          <div className="flex-grow space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h3 className="text-xl font-semibold text-white">
                {experience.role}
              </h3>
              <div className="flex items-center text-sm text-white/70">
                <FiCalendar size={14} className="mr-1" />
                <span>{experience.period}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-white/70">
              <div className="font-medium text-[#646cff]">
                {experience.company}
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center">
                <FiMapPin size={14} className="mr-1" />
                <span>{experience.location}</span>
              </div>
            </div>

            <p className="text-white/80 pt-2">{experience.description}</p>

            <motion.div
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {isExpanded && (
                <>
                  <div className="pt-4 text-left">
                    <h4 className="text-sm font-semibold text-white/90 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-left">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-white/70 text-left">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>

          {/* Expand/collapse indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 self-start mt-1 text-white/50"
          >
            <FiChevronDown size={18} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
