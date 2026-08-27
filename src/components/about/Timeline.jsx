import "./Timeline.css";

const items = [
  {
    title: "Planning",
    desc: "We understand your business goals, identify opportunities, and create a strategic roadmap to ensure every project starts with a clear direction.",
  },
  {
    title: "Requirement Analysis",
    desc: "Our team gathers and analyzes your functional and technical requirements to define the project scope, features, and expected outcomes.",
  },
  {
    title: "Designing",
    desc: "We craft intuitive user experiences and visually engaging interfaces that reflect your brand while ensuring seamless usability across devices.",
  },
  {
    title: "Development",
    desc: "Using modern technologies and industry best practices, we build secure, scalable, and high performance web and mobile solutions.",
  },
  {
    title: "Testing",
    desc: "Every feature is thoroughly tested for functionality, performance, security, and compatibility to deliver a reliable and bug free product.",
  },
  {
    title: "Deployment",
    desc: "After successful testing, we deploy your application to the production environment with proper configuration, monitoring, and optimization.",
  },
  {
    title: "Client Confirmation",
    desc: "We present the completed solution for your review, gather feedback, make final refinements if needed, and ensure your complete satisfaction before project closure.",
  },
];

export default function Timeline() {
  return (
    <section className="ptl">

      <div className="ptl-header">
        <h2>Our Process</h2>
        <p>How we deliver award quality digital products</p>
      </div>

      <div className="ptl-list">
        {items.map((item, i) => (
          <div className={`ptl-item ${i % 2 === 0 ? 'ptl-left' : 'ptl-right'}`} key={i}>

            <div className="ptl-dot"></div>

            <div className="ptl-box">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}