import Link from "next/link";
import { navigationItems } from "../../data/navigation";

type PageNavigationProps = {
  currentPath: string;
  title?: string;
};

export function PageNavigation({
  currentPath,
  title = "ページ遷移",
}: PageNavigationProps) {
  return (
    <section className="section-grid">
      <div className="panel-card">
        <h2>{title}</h2>
        <p className="muted">
          後から素材を差し込む前提で、先に全体の遷移と役割を固定しています。
        </p>
      </div>
      <div className="card-grid">
        {navigationItems
          .filter((item) => item.href !== currentPath)
          .map((item) => (
            <Link className="panel-card block-link" href={item.href} key={item.href}>
              <p className="eyebrow">{item.label}</p>
              <h3>{item.title}</h3>
              <p className="muted">{item.summary}</p>
              <p className="status-note">{item.status}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}
