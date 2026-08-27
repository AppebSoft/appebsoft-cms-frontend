import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "#62bdec",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
}

export default Cursor;