"use client"
import { ReactNode, useRef } from "react";
import gsap from "gsap";

const chars = "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

interface ScrambleTextProps {
  children: ReactNode;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ children }) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const originalText = useRef(
    typeof children === "string" ? children : ""
  );

  const scramble = () => {
    const text = originalText.current;
    let iteration = 0;

    if (!textRef.current) return;

    gsap.killTweensOf(textRef.current);

    gsap.to(
      {},
      {
        duration: 1,
        ease: "none",
        onUpdate: function () {
          if (!textRef.current) return;
          textRef.current.innerText = text
            .split("")
            .map((char: string, index: number) => {
              if (char === " ") return " ";

              if (index < iteration) {
                return text[index];
              }

              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

          iteration += 0.12;
        },
        onComplete: () => {
          if (textRef.current) {
            textRef.current.innerText = text;
          }
        },
      }
    );
  };

  return (
    <span
      ref={textRef}
      onMouseEnter={scramble}
      className="inline-block transition-all duration-300 hover:tracking-[0.08em]"
    >
      {children}
    </span>
  );
};

export default ScrambleText;