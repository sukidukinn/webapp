import { links } from "../data/links";
import { profile } from "../data/profile";
import { works } from "../data/works";

export default function HomePage() {
  return (
    <main>
      <h1>{profile.name}</h1>
      <p>{profile.title}</p>
      <p>{profile.summary}</p>

      <section>
        <h2>Representative categories</h2>
        <ul>
          {profile.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Featured works</h2>
        <ul>
          {works.slice(0, 3).map((work) => (
            <li key={work.slug}>
              {work.title} - {work.category}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Official links</h2>
        <ul>
          {links.slice(0, 4).map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
