import { profile } from "../../data/profile";

export default function ProfilePage() {
  return (
    <main>
      <h1>Profile</h1>
      <p>{profile.summary}</p>
      <ul>
        {profile.categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </main>
  );
}
