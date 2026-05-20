type OptionalExternalLinkProps = {
  href: string;
  readyLabel: string;
  pendingLabel: string;
  pendingNote: string;
};

function isPlaceholderHref(href: string) {
  return href === "#" || href.trim() === "";
}

export function OptionalExternalLink({
  href,
  readyLabel,
  pendingLabel,
  pendingNote,
}: OptionalExternalLinkProps) {
  if (isPlaceholderHref(href)) {
    return (
      <>
        <span className="pending-link">{pendingLabel}</span>
        <p className="muted">{pendingNote}</p>
      </>
    );
  }

  return (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {readyLabel}
      </a>
      <p className="muted">公開用リンクは設定済みです。</p>
    </>
  );
}
