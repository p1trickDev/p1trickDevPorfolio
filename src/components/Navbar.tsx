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
  isScrollTarget?: boolean;
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
  const handleNavigation = (item: NavItem, e: React.MouseEvent) => {
    e.preventDefault();

    if (item.isScrollTarget) {
      const element = document.getElementById(item.href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    setActiveItem(item.name);
  };

  return (
    <div className="relative z-20 w-full flex justify-center pb-3 pt-2">
      <div className="bg-black/60 backdrop-blur-lg rounded-full px-1.5 sm:px-4 py-2 sm:py-3 flex items-center gap-0 xs:gap-1 sm:gap-4 border border-white/10 overflow-x-auto max-w-[95vw] scrollbar-hide">
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
      className="group flex flex-col items-center px-1 min-w-[40px]"
    >
      <div
        className={cn(
          "flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full transition-all duration-300 group-hover:scale-110",
          isActive
            ? "bg-white text-black"
            : "bg-black/30 text-white hover:bg-white/10"
        )}
      >
        <Icon size={14} className="sm:text-[16px]" />
      </div>

      <div className="text-[8px] sm:text-[10px] font-medium mt-1 text-white/90">
        {item.name}
      </div>

      {isActive && (
        <div className="h-0.5 w-0.5 rounded-full bg-white mt-0.5"></div>
      )}
    </a>
  );
};

export default Navbar;
