import { useEffect, useRef } from "react";
import "./TechnologyEcosystem.css";

const techs = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "OpenAI",
  "Flutter",
  "React Native",
  "WordPress",
];

function TechnologyEcosystem() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let last = null;

    const drawLine = (x1, y1, x2, y2) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#7128ef";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#7128ef";

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
        last = null;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      if (last) {
        drawLine(last.x, last.y, x, y);
      }

      last = { x, y };
    };

    const onLeave = () => {
      last = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="tech-section" ref={sectionRef}>
      <div className="tech-header">
        <span>TECH STACK</span>
        <h2>Technology Ecosystem</h2>
        <p>Move cursor to create antenna connection</p>
      </div>

      <canvas ref={canvasRef} className="tech-canvas" />

      <div className="tech-nodes">
        {techs.map((tech, index) => (
          <div key={tech} className={`tech-node node-${index}`}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologyEcosystem;