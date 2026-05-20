type WorkCardProps = {
  title: string;
  category: string;
  summary: string;
  status?: string;
};

export function WorkCard({
  title,
  category,
  summary,
  status,
}: WorkCardProps) {
  return (
    <article className="panel-card">
      <p className="eyebrow">{category}</p>
      <h3>{title}</h3>
      <p className="muted">{summary}</p>
      {status ? <p className="status-note">{status}</p> : null}
    </article>
  );
}
