import { contact } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
      <p>Phone: {contact.phone}</p>
      <p> <img src={contact.icons.linkedIn} alt="LinkedIn" className="icon" />
          <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      <p>  <img src={contact.icons.github} alt="GitHub" className="icon" />
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </section>
  );
}


