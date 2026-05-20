export type NavigationItem = {
  href: string;
  label: string;
  title: string;
  summary: string;
  status: string;
};

export const navigationItems: NavigationItem[] = [
  {
    href: "/",
    label: "top",
    title: "トップ",
    summary: "全体像、代表領域、相談導線をまとめる入口です。",
    status: "骨組みあり / 文言差し替え待ち",
  },
  {
    href: "/card",
    label: "card",
    title: "名刺QRページ",
    summary: "一画面目で必要情報が伝わる専用ページです。",
    status: "優先整備中",
  },
  {
    href: "/profile",
    label: "profile",
    title: "プロフィール",
    summary: "自己紹介、活動領域、仕事向けの説明を置きます。",
    status: "構成あり / 素材待ち",
  },
  {
    href: "/works",
    label: "works",
    title: "代表作品",
    summary: "Unity、書籍、漫画、Web制作などの整理用ページです。",
    status: "テンプレート配置済み",
  },
  {
    href: "/services",
    label: "services",
    title: "依頼・相談",
    summary: "相談内容、受付方法、外部導線を整理します。",
    status: "テンプレート配置済み",
  },
  {
    href: "/contact",
    label: "contact",
    title: "問い合わせ",
    summary: "メール、フォーム、外部サービスの受け口です。",
    status: "仮導線あり / 本番情報待ち",
  },
  {
    href: "/links",
    label: "links",
    title: "公式リンク",
    summary: "SNS、開発、文章、活動ログへの導線をまとめます。",
    status: "差し替え待ち",
  },
];
