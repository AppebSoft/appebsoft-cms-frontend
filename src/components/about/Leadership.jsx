import "./Leadership.css";

const team = [
  {
    role: "Creative Direction",
    desc: "Design systems and visual identity leadership",
  },
  {
    role: "Product Engineering",
    desc: "Frontend and backend architecture excellence",
  },
  {
    role: "UX Strategy",
    desc: "User centered product experience planning",
  },
  {
    role: "Quality Assurance",
    desc: "Performance and reliability assurance",
  },
];

export default function Leadership() {
  return (
    <section className="pld">

      <div className="pld-header">
        <h2>Studio Expertise</h2>
        <p>The disciplines behind every award level product</p>
      </div>

      <div className="pld-grid">

        {team.map((t, i) => (
          <div className="pld-card" key={i}>
            <h3>{t.role}</h3>
            <p>{t.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}