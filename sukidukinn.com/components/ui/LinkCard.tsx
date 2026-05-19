type LinkCardProps = {
  label: string;
  href: string;
  description?: string;
};

export function LinkCard({ label, href, description }: LinkCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <strong>{label}</strong>
      {description ? <p>{description}</p> : null}
    </a>
  );
}
