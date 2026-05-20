import type { Metadata } from "next";
import { OptionalExternalLink } from "../../components/ui/OptionalExternalLink";
import { PageNavigation } from "../../components/ui/PageNavigation";
import { PlaceholderChecklist } from "../../components/ui/PlaceholderChecklist";
import { TemplateNotice } from "../../components/ui/TemplateNotice";
import { profile } from "../../data/profile";

export const metadata: Metadata = {
  title: "問い合わせ",
  description:
    "相談や依頼の問い合わせ先を案内するページです。メール、SNS、外部フォーム導線をまとめています。",
};

export default function ContactPage() {
  return (
    <main className="page-stack">
      <TemplateNotice />

      <section className="hero-card">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">問い合わせ</h1>
        <p className="lead-text">
          相談や依頼は、内容に近い導線から連絡してください。公開情報は後から正式な連絡先へ差し替えます。
        </p>
      </section>

      <section className="card-grid">
        <article className="panel-card">
          <h2>メール</h2>
          <p>{profile.contact.email}</p>
          <p className="muted">{profile.contact.emailNote}</p>
        </article>
        <article className="panel-card">
          <h2>X</h2>
          <p>
            <a
              href={profile.contact.xUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.contact.xLabel}
            </a>
          </p>
          <p className="muted">短いやり取りや最新の告知確認向けです。</p>
        </article>
        <article className="panel-card">
          <h2>外部フォーム</h2>
          <OptionalExternalLink
            href={profile.contact.formUrl}
            readyLabel="フォームを開く"
            pendingLabel="フォーム準備中"
            pendingNote="Googleフォーム等へ差し替え予定です。"
          />
        </article>
        <article className="panel-card">
          <h2>外部サービス</h2>
          <OptionalExternalLink
            href={profile.contact.coconalaUrl}
            readyLabel="外部サービス導線を開く"
            pendingLabel="ココナラ等の導線準備中"
            pendingNote="決済や受付の外部導線を後から追加できます。"
          />
        </article>
      </section>

      <PlaceholderChecklist
        title="問い合わせページで後から差し込むもの"
        items={[
          "本番のメールアドレス",
          "GoogleフォームURL",
          "ココナラや外部受付URL",
          "連絡時に添えてほしい情報の案内",
        ]}
      />

      <PageNavigation currentPath="/contact" />
    </main>
  );
}
