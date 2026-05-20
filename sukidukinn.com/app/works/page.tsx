import type { Metadata } from "next";
import { PageNavigation } from "../../components/ui/PageNavigation";
import { PlaceholderChecklist } from "../../components/ui/PlaceholderChecklist";
import { TemplateNotice } from "../../components/ui/TemplateNotice";
import { WorkCard } from "../../components/ui/WorkCard";
import { works } from "../../data/works";

export const metadata: Metadata = {
  title: "代表作品",
  description:
    "Unity、書籍、漫画、Web制作などの代表作品を整理して掲載するページです。",
};

export default function WorksPage() {
  return (
    <main className="page-stack">
      <TemplateNotice />

      <section className="hero-card">
        <p className="eyebrow">Works</p>
        <h1 className="page-title">代表作品</h1>
        <p className="lead-text">
          Unity、書籍、Web制作など、主な活動領域ごとに代表的な内容を整理して掲載します。
        </p>
      </section>

      <section className="card-grid">
        {works.map((work) => (
          <WorkCard
            key={work.slug}
            title={work.title}
            category={work.category}
            summary={work.summary}
            status={work.status}
          />
        ))}
      </section>

      <PlaceholderChecklist
        title="作品ページで後から差し込むもの"
        items={[
          "代表作品ごとの画像",
          "作品タイトルの正式名称",
          "実績リンクや販売ページ",
          "役割、使用技術、公開年",
        ]}
      />

      <PageNavigation currentPath="/works" />
    </main>
  );
}
