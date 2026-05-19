import { profile } from "../../data/profile";

export default function ProfilePage() {
  return (
    <main className="page-stack">
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
    </main>
  );
}
