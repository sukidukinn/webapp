import { profile } from "../../data/profile";

export default function CardPage() {
  return (
    <main>
      <h1>{profile.name}</h1>
      <p>{profile.title}</p>
      <p>{profile.cardMessage}</p>
      <ul>
        <li>Email: {profile.contact.email}</li>
        <li>X: {profile.contact.xLabel}</li>
        <li>Blog: sukidukinn.blog</li>
      </ul>
    </main>
  );
}
