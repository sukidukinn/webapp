import Link from "next/link";
import type { Metadata } from "next";
import { PageNavigation } from "../components/ui/PageNavigation";
import { PlaceholderChecklist } from "../components/ui/PlaceholderChecklist";
import { TemplateNotice } from "../components/ui/TemplateNotice";
import { links } from "../data/links";
import { profile } from "../data/profile";
import { works } from "../data/works";

export const metadata: Metadata = {
  title: "トップ",
  description:
    "sukidukinn の公式トップページです。プロフィール、代表作品、相談先への導線をまとめています。",
};

export default function HomePage() {
  return (
    <main className="page-stack">
      <TemplateNotice />

      <section className="hero-card">
        <p className="eyebrow">Official site</p>
        <h1 className="page-title">{profile.name}</h1>
        <p className="page-subtitle">{profile.title}</p>
        <p className="lead-text">{profile.summary}</p>
        <div className="button-row">
          <Link className="button-link" href="/card">
            名刺QR向けページを見る
          </Link>
          <Link className="button-link secondary" href="/works">
            代表作品を見る
          </Link>
          <Link className="button-link secondary" href="/contact">
            相談先を確認する
          </Link>
        </div>
      </section>

      <section className="section-grid">
        <div className="panel-card">
          <h2>何をしている人か</h2>
          <p>{profile.shortBio}</p>
        </div>
        <div className="card-grid">
          {profile.categories.map((category) => (
            <article className="panel-card" key={category.name}>
              <h3>{category.name}</h3>
              <p className="muted">{category.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card-grid">
        <article className="cta-card">
          <h2>仕事・相談</h2>
          <p className="muted">
            依頼前に全体像を掴みたい場合は、まずプロフィールと代表作品を見るのがおすすめです。
          </p>
          <div className="button-row">
            <Link className="button-link" href="/profile">
              プロフィールを見る
            </Link>
            <Link className="button-link secondary" href="/contact">
              問い合わせ先を見る
            </Link>
          </div>
        </article>
        <article className="cta-card">
          <h2>活動ログ</h2>
          <p className="muted">
            日々の記録、実験メモ、趣味寄りの投稿は blog 側で分けて管理しています。
          </p>
          <div className="button-row">
            <a
              className="button-link secondary"
              href="https://sukidukinn.blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sukidukinn.blog を開く
            </a>
          </div>
        </article>
      </section>

      <section className="panel-card">
        <h2>代表作品</h2>
        <ul className="compact-list">
          {works.slice(0, 3).map((work) => (
            <li key={work.slug}>
              <strong>{work.title}</strong>
              <div className="muted">
                {work.category} / {work.summary}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel-card">
        <h2>公式リンク</h2>
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
      </section>

      <PlaceholderChecklist
        title="トップページで後から差し込むもの"
        items={[
          "プロフィール写真またはロゴ",
          "代表作品3件の実データ",
          "正式なSNS / note / YouTubeリンク",
          "問い合わせ用の実URL",
        ]}
      />

      <PageNavigation currentPath="/" />
    </main>
  );
}
