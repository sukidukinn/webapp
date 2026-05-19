import Link from "next/link";
import { profile } from "../../data/profile";

export default function CardPage() {
  return (
    <main className="page-stack">
      <section className="hero-card">
        <p className="eyebrow">Business card</p>
        <h1 className="page-title">{profile.name}</h1>
        <p className="page-subtitle">{profile.title}</p>
        <p className="lead-text">{profile.cardMessage}</p>
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

      <section className="panel-card">
        <h2>連絡と導線</h2>
        <ul className="meta-list">
          <li>
            <strong>メール</strong>
            <div>{profile.contact.email}</div>
            <div className="muted">{profile.contact.emailNote}</div>
          </li>
          <li>
            <strong>X</strong>
            <div>
              <a
                href={profile.contact.xUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.contact.xLabel}
              </a>
            </div>
          </li>
          <li>
            <strong>活動ログ</strong>
            <div>
              <a
                href={profile.contact.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                sukidukinn.blog を開く
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section className="card-grid">
        <article className="cta-card">
          <h2>最初に見る場所</h2>
          <p className="muted">
            公式情報を短く確認したい場合はプロフィール、実績を見たい場合は作品一覧がおすすめです。
          </p>
        </article>
        <article className="cta-card">
          <h2>このページの役割</h2>
          <p className="muted">
            名刺QRから開いたときに、一画面目で「誰か」「どこを見ればよいか」が分かるようにしています。
          </p>
        </article>
      </section>
    </main>
  );
}
