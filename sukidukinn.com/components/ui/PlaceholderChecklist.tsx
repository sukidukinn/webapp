type PlaceholderChecklistProps = {
  title: string;
  items: string[];
};

export function PlaceholderChecklist({
  title,
  items,
}: PlaceholderChecklistProps) {
  return (
    <section className="panel-card">
      <h2>{title}</h2>
      <ul className="compact-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
