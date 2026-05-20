export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  delivery: string;
};

export const services: ServiceItem[] = [
  {
    slug: "consulting",
    title: "相談と壁打ち",
    summary: "企画整理、導線設計、制作前の方向づけを一緒に整理します。",
    delivery: "オンライン相談、外部サービス経由の受付を想定",
  },
  {
    slug: "web-production",
    title: "Webページ制作",
    summary: "案内ページ、プロフィールページ、簡易ポートフォリオの設計と制作を行います。",
    delivery: "要件整理後に個別見積もり",
  },
  {
    slug: "creative-support",
    title: "創作支援",
    summary: "作品紹介ページや制作周辺の整理など、創作活動の見せ方を整えます。",
    delivery: "内容に応じて個別相談",
  },
];
