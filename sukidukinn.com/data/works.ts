export type WorkItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: string;
};

export const works: WorkItem[] = [
  {
    slug: "unity-project-placeholder",
    title: "Unity 制作",
    category: "Unity",
    summary: "ゲームやインタラクティブ表現の代表作をここに整理します。",
    status: "代表作を追加予定",
  },
  {
    slug: "book-placeholder",
    title: "書籍・文章",
    category: "書籍",
    summary: "著作、関連書籍、制作背景の導線をここにまとめます。",
    status: "掲載情報を整理予定",
  },
  {
    slug: "web-placeholder",
    title: "Web 制作",
    category: "Web制作",
    summary: "公式サイトや案内ページなど、実務寄りの制作を掲載します。",
    status: "事例を追加予定",
  },
];
