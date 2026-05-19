import { links } from "../../data/links";

export default function LinksPage() {
  return (
    <main className="page-stack">
      <section className="hero-card">
        <p className="eyebrow">Links</p>
        <h1 className="page-title">公式リンク</h1>
        <p className="lead-text">
          SNS、文章、動画、開発まわりの公式導線をまとめています。
        </p>
      </section>
      <ul className="compact-list">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <strong>{link.label}</strong>
              <div className="muted">{link.description}</div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
