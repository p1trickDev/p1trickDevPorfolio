import { cn } from "@/lib/utils";
import {
  RiHome5Line,
  RiRocketLine,
  RiUser3Line,
  RiFileTextLine,
  RiMailLine,
} from "react-icons/ri";
import type { IconType } from "react-icons";

type NavItem = {
  name: string;
  href: string;
  icon: IconType; // Changed from string to IconType
};

const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: RiHome5Line },
  { name: "Projects", href: "/projects", icon: RiRocketLine },
  { name: "About", href: "/about", icon: RiUser3Line },
  { name: "Blog", href: "/blog", icon: RiFileTextLine },
  { name: "Contact", href: "/contact", icon: RiMailLine },
];

interface NavbarProps {
  activeItem: string;
  setActiveItem: (page: string) => void;
}

const Navbar = ({ activeItem, setActiveItem }: NavbarProps) => {
  return (
    <div className="relative z-20 w-full flex justify-center pb-3 pt-2">
      <div className="bg-black/20 backdrop-blur-lg rounded-full px-4 py-2 flex items-center gap-0.5 sm:gap-2 border border-white/10">
        {navItems.map((item) => (
          <NavbarItem
            key={item.name}
            item={item}
            isActive={activeItem === item.name}
            onClick={() => setActiveItem(item.name)}
          />
        ))}
      </div>
    </div>
  );
};

interface NavbarItemProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}

const NavbarItem = ({ item, isActive, onClick }: NavbarItemProps) => {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation for now
        onClick();
      }}
      className="group relative flex flex-col items-center px-1"
    >
      {/* Icon with bounce effect on hover */}
      <div
        className={cn(
          "flex items-center justify-center h-7 w-7 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1",
          isActive ? "bg-[#646cff]/70" : "bg-black/30 hover:bg-white/10"
        )}
      >
        <Icon size={16} />
      </div>

      {/* Label with fade-in effect */}
      <div
        className={cn(
          "absolute -bottom-5 opacity-0 whitespace-nowrap text-[10px] font-medium transition-all duration-300",
          "group-hover:opacity-100"
        )}
      >
        {item.name}
      </div>

      {/* Dot indicator for active item */}
      {isActive && (
        <div className="absolute -bottom-1.5 h-0.5 w-0.5 rounded-full bg-white"></div>
      )}
    </a>
  );
};

export default Navbar;
