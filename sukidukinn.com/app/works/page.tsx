import { works } from "../../data/works";

export default function WorksPage() {
  return (
    <main>
      <h1>Works</h1>
      <ul>
        {works.map((work) => (
          <li key={work.slug}>
            {work.title} - {work.category}
          </li>
        ))}
      </ul>
    </main>
  );
}
