import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, idx) => (
          <li key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

