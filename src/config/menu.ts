interface MenuItem {
  id: number;
  title: string;
  path: string;
}

export const MENU: MenuItem[] = [
  {
    id: 1,
    title: "Про нас",
    path: "/#about-us",
  },
  {
    id: 2,
    title: "Ціни",
    path: "/#price",
  },
  {
    id: 3,
    title: "Міста",
    path: "/#places",
  },
  {
    id: 4,
    title: "Відгуки",
    path: "/#reviews",
  },
  {
    id: 5,
    title: "Послуги",
    path: "/#service",
  },
  {
    id: 6,
    title: "Питання",
    path: "/#faq",
  },
];
