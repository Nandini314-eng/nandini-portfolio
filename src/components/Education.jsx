import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <ul>
        {education.map((item, idx) => (
          <li key={idx}>
            <strong>{item.degree}</strong> - {item.college} ({item.year})
          </li>
        ))}
      </ul>
    </section>
  );
}
