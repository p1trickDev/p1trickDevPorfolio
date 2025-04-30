import { motion, useScroll } from "framer-motion";
import { ReactNode } from "react";
import { Content } from "./Content";

interface ScrollLinkedProps {
  children?: ReactNode;
}

export default function ScrollLinked({ children }: ScrollLinkedProps) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
      {children || <Content />}
    </>
  );
}
