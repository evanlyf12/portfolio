import "./InfoCard.css";
export default function InfoCard({ data, darkMode }) {
  return (
    <div className="info-card">
      <div className="info-card-title">{data.title}</div>
      <div className="info-card-description">{data.description}</div>
      <div className="info-card-technologies">
        Achieved with:
        <ul>
          {data.technologies.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="info-card-link">
        <img
          src="./src/assets/link.svg"
          className={"link-icon" + (!darkMode ? " light" : "")}
        />
        <a href={data.link} className="link-url" target="_blank">
          <i>{data.displayLink}</i>
        </a>
      </div>
    </div>
  );
}
