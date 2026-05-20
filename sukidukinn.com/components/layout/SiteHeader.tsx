import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-frame site-header-inner">
        <Link className="site-brand" href="/">
          sukidukinn.com
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/card">card</Link>
          <Link href="/profile">profile</Link>
          <Link href="/works">works</Link>
          <Link href="/services">services</Link>
          <Link href="/links">links</Link>
          <Link href="/contact">contact</Link>
        </nav>
      </div>
    </header>
  );
}
