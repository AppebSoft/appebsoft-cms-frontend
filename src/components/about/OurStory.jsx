// src/components/about/OurStory/OurStory.jsx

import "./OurStory.css";

const milestones = [
  {
    year: "Jan 2025",
    title: "Where It All Began",
    description:
      "AppebSoft was founded with a vision to build meaningful digital solutions that help businesses innovate, grow, and succeed.",
    image:"/grow.png", },
  {
    year: "July 2025",
    title: "Growing Together",
    description:
      "A passionate team of designers, developers, and strategists came together to create products that solve real business problems.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
  },
  {
    year: "Jan 2026",
    title: "Expanding Our Impact",
    description:
      "From startups to enterprises, we delivered scalable websites, mobile apps, enterprise platforms, and digital marketing solutions.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
  },
  {
    year: "TODAY",
    title: "Building Tomorrow",
    description:
      "Today, we continue to push boundaries with AI, cloud technologies, and modern engineering.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
  },
];

export default function OurStory() {
  return (
    <section className="story-section">

      <div className="story-header">
        <h2>Our Story</h2>
        <p>A journey shaped by ideas, people, and purpose</p>
      </div>

      <div className="timeline">

        {milestones.map((item, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <div className="timeline-text">
                <span className="year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="timeline-image">
                <img src={item.image} alt={item.title} />
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}