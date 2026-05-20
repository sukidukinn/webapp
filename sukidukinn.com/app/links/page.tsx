import { LinkCard } from "../../components/ui/LinkCard";
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
      <section className="card-grid">
        {links.map((link) => (
          <LinkCard
            key={link.label}
            label={link.label}
            href={link.href}
            description={link.description}
          />
        ))}
      </section>
    </main>
  );
}
