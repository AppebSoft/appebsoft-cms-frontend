import "./MissionVision.css";

export default function MissionVision() {
  const cards = [
    {
      id: "01",
      title: "Mission",
      description:
        "To design and develop high performance digital solutions that help businesses grow faster with technology.",
    },
    {
      id: "02",
      title: "Vision",
      description:
        "To become a globally recognized technology partner delivering world class digital experiences.",
    },
    {
      id: "03",
      title: "Approach",
      description:
        "Strategy driven design, scalable architecture, and clean engineering for long term success.",
    },
  ];

  return (
    <section className="pmv">
      <div className="pmv-header">
        <h2>We Build Digital Products That Matter</h2>

        <p>
          A product focused engineering studio creating scalable apps,
          platforms, and digital experiences for modern businesses.
        </p>
      </div>

      <div className="pmv-grid">
        {cards.map((card) => (
          <div className="pmv-card" key={card.id}>
            <span>{card.id}</span>

            <h3>{card.title}</h3>

            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}