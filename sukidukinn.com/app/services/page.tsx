import Link from "next/link";
import { PageNavigation } from "../../components/ui/PageNavigation";
import { PlaceholderChecklist } from "../../components/ui/PlaceholderChecklist";
import { TemplateNotice } from "../../components/ui/TemplateNotice";
import { services } from "../../data/services";

export default function ServicesPage() {
  return (
    <main className="page-stack">
      <TemplateNotice />

      <section className="hero-card">
        <p className="eyebrow">Services</p>
        <h1 className="page-title">依頼・相談メニュー</h1>
        <p className="lead-text">
          相談、Webページ制作、創作支援などを中心に、内容に応じて個別に案内します。
        </p>
      </section>

      <section className="card-grid">
        {services.map((service) => (
          <article className="panel-card" key={service.slug}>
            <h2>{service.title}</h2>
            <p className="muted">{service.summary}</p>
            <p className="status-note">{service.delivery}</p>
          </article>
        ))}
      </section>

      <section className="cta-card">
        <h2>相談前に見てほしいページ</h2>
        <p className="muted">
          依頼前に雰囲気をつかみたい場合は、プロフィールと代表作品を見ると全体像が分かりやすいです。
        </p>
        <div className="button-row">
          <Link className="button-link" href="/profile">
            プロフィールを見る
          </Link>
          <Link className="button-link secondary" href="/works">
            代表作品を見る
          </Link>
          <Link className="button-link secondary" href="/contact">
            問い合わせ先を見る
          </Link>
        </div>
      </section>

      <PlaceholderChecklist
        title="依頼ページで後から差し込むもの"
        items={[
          "受付可能な業務の正式一覧",
          "ココナラや外部サービスのURL",
          "料金目安または見積もり方針",
          "返信目安や相談フロー",
        ]}
      />

      <PageNavigation currentPath="/services" />
    </main>
  );
}
