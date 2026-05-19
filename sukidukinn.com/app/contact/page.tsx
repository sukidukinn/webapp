import { profile } from "../../data/profile";

export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>
      <ul>
        <li>Email: {profile.contact.email}</li>
        <li>Form: placeholder</li>
        <li>Coconala: placeholder</li>
      </ul>
    </main>
  );
}
