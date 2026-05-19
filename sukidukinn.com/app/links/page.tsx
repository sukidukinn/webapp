import { links } from "../../data/links";

export default function LinksPage() {
  return (
    <main>
      <h1>Links</h1>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
