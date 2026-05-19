type WorkCardProps = {
  title: string;
  category: string;
  summary: string;
};

export function WorkCard({ title, category, summary }: WorkCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{summary}</p>
    </article>
  );
}
