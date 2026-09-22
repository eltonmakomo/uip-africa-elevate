import { useEffect, useState, type ElementType } from "react";

type TypewriterHeadingProps = {
  as?: "h1" | "h2";
  text: string;
  className?: string;
  speed?: number;
};

export function TypewriterHeading({
  as = "h1",
  text,
  className,
  speed = 55,
}: TypewriterHeadingProps) {
  const Heading = as as ElementType;
  const characters = Array.from(text);
  const [visibleCount, setVisibleCount] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCount(characters.length);
      return;
    }

    setVisibleCount(0);
    const timer = window.setInterval(() => {
      setVisibleCount((count) => {
        if (count >= characters.length) {
          window.clearInterval(timer);
          return count;
        }
        return count + 1;
      });
    }, speed);

    return () => window.clearInterval(timer);
  }, [characters.length, reduceMotion, speed, text]);

  const complete = visibleCount >= characters.length;

  return (
    <Heading className={`${className ?? ""} typewriter-heading`} aria-label={text.replace(/\n/g, " ")}>
      <span className="typewriter-measure" aria-hidden="true">{text}</span>
      <span className="typewriter-copy" aria-hidden="true">
        {characters.slice(0, visibleCount).join("")}
        <span className={`typewriter-cursor${complete ? " typewriter-cursor-complete" : ""}`} />
      </span>
    </Heading>
  );
}