type LinkCardProps = {
  label: string;
  href: string;
  description?: string;
};

export function LinkCard({ label, href, description }: LinkCardProps) {
  return (
    <a
      className="panel-card block-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <strong>{label}</strong>
      {description ? <p className="muted">{description}</p> : null}
    </a>
  );
}
