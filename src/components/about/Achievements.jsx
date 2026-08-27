import "./Achievements.css";

const stats = [
  { number: "100+", label: "Projects Delivered" },
  { number: "20+", label: "Happy Clients" },
  { number: "25+", label: "Experts" },
  { number: "5+", label: "Countries Served" },
];

export default function Achievements() {
  return (
    <section className="pac">

      <div className="pac-header">
        <h2>Recognitions & Results</h2>
        <p>Numbers that define our excellence</p>
      </div>

      <div className="pac-grid">

        {stats.map((s, i) => (
          <div className="pac-card" key={i}>
            <h3>{s.number}</h3>
            <p>{s.label}</p>
          </div>
        ))}

      </div>

    </section>
  );
}