import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const clickable = target.closest(
        "button, a, input, textarea, [data-cursor='pointer']"
      );
      setIsPointer(!!clickable);

      // Text personnalisé
      const textEl = target.closest("[data-cursor-text]");
      setCursorText(textEl?.getAttribute("data-cursor-text") || "");
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 0 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.3 }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        animate={{
          x: position.x - (isPointer ? 30 : 20),
          y: position.y - (isPointer ? 30 : 20),
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.6 }}
      >
        <div
          className={`rounded-full border transition-colors duration-300 ${
            isPointer
              ? "border-white/80 bg-white/10 backdrop-blur-sm w-[60px] h-[60px]"
              : "border-white/40 w-[40px] h-[40px]"
          } flex items-center justify-center`}
        >
          {cursorText && (
            <span className="text-[10px] uppercase tracking-widest text-white font-medium">
              {cursorText}
            </span>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;