import { WorkCard } from "../../components/ui/WorkCard";
import { works } from "../../data/works";

export default function WorksPage() {
  return (
    <main className="page-stack">
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
    </main>
  );
}
