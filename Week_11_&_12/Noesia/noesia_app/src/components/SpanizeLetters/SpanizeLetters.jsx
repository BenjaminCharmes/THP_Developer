// Hooks
import { useEffect, useRef } from "react";

// SCSS
import "./SpanizeLetters.scss";

const SpanizeLetters = ({ children }) => {
  const spanizeRef = useRef(null);

  useEffect(() => {
    const spanizeLetters = () => {
      const letters = spanizeRef.current;
      if (!letters) return;

      letters.innerHTML = letters.textContent
        .trim()
        .split("")
        .map((char) => (char === " " ? " " : `<span>${char}</span>`))
        .join("");
    };

    spanizeLetters();
  }, []);

  return (
    <span className="js-spanize" ref={spanizeRef}>
      {children}
    </span>
  );
};

export default SpanizeLetters;