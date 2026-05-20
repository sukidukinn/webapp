import type { Metadata } from "next";
import { PageNavigation } from "../../components/ui/PageNavigation";
import { PlaceholderChecklist } from "../../components/ui/PlaceholderChecklist";
import { TemplateNotice } from "../../components/ui/TemplateNotice";
import { profile } from "../../data/profile";

export const metadata: Metadata = {
  title: "プロフィール",
  description:
    "sukidukinn の公式プロフィールページです。活動領域と自己紹介を整理して掲載します。",
};

export default function ProfilePage() {
  return (
    <main className="page-stack">
      <TemplateNotice />

      <section className="hero-card">
        <p className="eyebrow">Profile</p>
        <h1 className="page-title">プロフィール</h1>
        <p className="lead-text">{profile.summary}</p>
      </section>

      <section className="card-grid">
        {profile.categories.map((category) => (
          <article className="panel-card" key={category.name}>
            <h2>{category.name}</h2>
            <p className="muted">{category.summary}</p>
          </article>
        ))}
      </section>

      <PlaceholderChecklist
        title="プロフィールで後から差し込むもの"
        items={[
          "正式な肩書き",
          "プロフィール本文の確定版",
          "実績年表や代表経歴",
          "プロフィール画像またはロゴ",
        ]}
      />

      <PageNavigation currentPath="/profile" />
    </main>
  );
}
