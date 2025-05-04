"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useContext, useRef, useState } from "react";

type DockProps = {
  direction?: "left" | "right" | "middle";
  children: React.ReactNode;
  className?: string;
};

type DockIconProps = {
  children: React.ReactNode;
  className?: string;
};

type DockContextType = {
  direction?: "left" | "right" | "middle";
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
  width: number;
  setWidth: (width: number) => void;
};

const DockContext = createContext<DockContextType>({
  direction: "middle",
  hovered: false,
  setHovered: () => {},
  width: 0,
  setWidth: () => {},
});

export function Dock({
  direction = "middle",
  children,
  className,
}: DockProps) {
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState(0);

  return (
    <DockContext.Provider
      value={{ direction, hovered, setHovered, width, setWidth }}
    >
      <div
        className={cn(
          "flex h-16 items-end gap-1 rounded-lg p-2",
          className
        )}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {children}
      </div>
    </DockContext.Provider>
  );
}

export function DockIcon({ children, className }: DockIconProps) {
  const { direction, hovered, width, setWidth } = useContext(DockContext);
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);

  const handleMouseOver = () => {
    if (itemRef.current) {
      setWidth(itemRef.current.offsetWidth);
      setItemWidth(itemRef.current.offsetWidth);
    }
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  let scale = 1;
  if (hovered) {
    if (isHovered) {
      scale = 1.5;
    } else if (direction === "middle") {
      scale = 1.1;
    } else if (
      ((direction === "left" && width > itemWidth) ||
        (direction === "right" && width < itemWidth)) &&
      width !== 0
    ) {
      scale = 1.3;
    } else {
      scale = 1;
    }
  }

  return (
    <div
      ref={itemRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={cn(
        "flex items-center justify-center transition-all duration-200",
        className
      )}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "bottom",
      }}
    >
      {children}
    </div>
  );
}
