import { profile } from "../../data/profile";

export default function ContactPage() {
  return (
    <main className="page-stack">
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
          <p>
            <a
              href={profile.contact.formUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              フォーム準備中
            </a>
          </p>
          <p className="muted">Googleフォーム等へ差し替え予定です。</p>
        </article>
        <article className="panel-card">
          <h2>外部サービス</h2>
          <p>
            <a
              href={profile.contact.coconalaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ココナラ等の導線準備中
            </a>
          </p>
          <p className="muted">決済や受付の外部導線を後から追加できます。</p>
        </article>
      </section>
    </main>
  );
}
