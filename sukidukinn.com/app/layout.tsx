import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteShell } from "../components/layout/SiteShell";

export const metadata: Metadata = {
  title: "sukidukinn.com",
  description: "Official site scaffold for sukidukinn.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
