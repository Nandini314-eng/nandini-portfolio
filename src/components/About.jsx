import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <div>
          <h3>{about.name}</h3>
          <p><em>{about.role}</em></p>
          <p>{about.description}</p>
        </div>
      </div>
    </section>
  );
}

