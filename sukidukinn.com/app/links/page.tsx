import { LinkCard } from "../../components/ui/LinkCard";
import { PageNavigation } from "../../components/ui/PageNavigation";
import { PlaceholderChecklist } from "../../components/ui/PlaceholderChecklist";
import { TemplateNotice } from "../../components/ui/TemplateNotice";
import { links } from "../../data/links";

export default function LinksPage() {
  return (
    <main className="page-stack">
      <TemplateNotice />

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

      <PlaceholderChecklist
        title="リンク集で後から差し込むもの"
        items={[
          "本番のXリンク",
          "note / YouTube / BOOTHなどの正式URL",
          "掲載順の調整",
          "各リンクの簡単な説明文",
        ]}
      />

      <PageNavigation currentPath="/links" />
    </main>
  );
}
