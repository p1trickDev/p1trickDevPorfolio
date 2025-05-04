import { cn } from "@/lib/utils";
import {
  RiHome5Line,
  RiRocketLine,
  RiUser3Line,
  RiFileTextLine,
  RiMailLine,
  RiBriefcaseLine,
} from "react-icons/ri";
import type { IconType } from "react-icons";

type NavItem = {
  name: string;
  href: string;
  icon: IconType;
  isScrollTarget?: boolean; // Flag to indicate if this is a scroll target or new page
};

const navItems: NavItem[] = [
  { name: "Home", href: "home", icon: RiHome5Line, isScrollTarget: true },
  {
    name: "Projects",
    href: "projects",
    icon: RiRocketLine,
    isScrollTarget: true,
  },
  { name: "About", href: "about", icon: RiUser3Line, isScrollTarget: true },
  {
    name: "Experience",
    href: "experience",
    icon: RiBriefcaseLine,
    isScrollTarget: true,
  },
  { name: "Blog", href: "blog", icon: RiFileTextLine, isScrollTarget: true },
  { name: "Contact", href: "contact", icon: RiMailLine, isScrollTarget: true },
];

interface NavbarProps {
  activeItem: string;
  setActiveItem: (page: string) => void;
}

const Navbar = ({ activeItem, setActiveItem }: NavbarProps) => {
  // Function to handle both scrolling and page navigation
  const handleNavigation = (item: NavItem, e: React.MouseEvent) => {
    e.preventDefault();

    if (item.isScrollTarget) {
      // For scroll targets, scroll to the section
      const element = document.getElementById(item.href);
      if (element) {
        // Improved scrolling with offset to account for fixed navbar
        const offset = 80; // Adjust this value based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    // Update the active item in state
    setActiveItem(item.name);
  };

  return (
    <div className="relative z-20 w-full flex justify-center pb-3 pt-2">
      <div className="bg-black/60 backdrop-blur-lg rounded-full px-4 py-3 flex items-center gap-2 sm:gap-4 border border-white/10">
        {navItems.map((item) => (
          <NavbarItem
            key={item.name}
            item={item}
            isActive={activeItem === item.name}
            onClick={(e) => handleNavigation(item, e)}
          />
        ))}
      </div>
    </div>
  );
};

interface NavbarItemProps {
  item: NavItem;
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const NavbarItem = ({ item, isActive, onClick }: NavbarItemProps) => {
  const Icon = item.icon;

  return (
    <a
      href={item.isScrollTarget ? `#${item.href}` : item.href}
      onClick={onClick}
      className="group flex flex-col items-center px-1"
    >
      {/* Icon with bounce effect on hover */}
      <div
        className={cn(
          "flex items-center justify-center h-7 w-7 rounded-full transition-all duration-300 group-hover:scale-110",
          isActive
            ? "bg-white text-black"
            : "bg-black/30 text-white hover:bg-white/10"
        )}
      >
        <Icon size={16} />
      </div>

      {/* Label always visible below the icon */}
      <div className="text-[10px] font-medium mt-1 text-white/90">
        {item.name}
      </div>

      {/* Dot indicator for active item */}
      {isActive && (
        <div className="h-0.5 w-0.5 rounded-full bg-white mt-0.5"></div>
      )}
    </a>
  );
};

export default Navbar;
