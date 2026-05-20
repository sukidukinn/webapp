import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteShell } from "../components/layout/SiteShell";

export const metadata: Metadata = {
  title: {
    default: "sukidukinn.com",
    template: "%s | sukidukinn.com",
  },
  description:
    "公式プロフィール、代表作品、相談先を整理して案内する sukidukinn.com の公式サイトです。",
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
