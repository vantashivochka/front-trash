export interface PriceListItem {
  id: number;
  title: string;
  description?: string;
  price: number;
}

export const GARBAGE_PRICE_LIST: PriceListItem[] = [
  {
    id: 1,
    title: "Газель (0,5 т.)",
    price: 600,
  },
  {
    id: 2,
    title: "Газель (2 т.)",
    price: 600,
  },
  {
    id: 3,
    title: "ЗІЛ (5 т.)",
    price: 2000,
  },
  {
    id: 4,
    title: "КамАЗ (10 т.)",
    price: 3200,
  },
];

export const CARGO_PRICE_LIST: PriceListItem[] = [
  {
    id: 1,
    title: "Міні Бус",
    description:
      "Обраний тип автомобіля підійде для перевезення квартирного типу, перевезення дрібних речей габаритами до 800 кг",
    price: 600,
  },
  {
    id: 2,
    title: "Середній Бус",
    description:
      "Обраний тип автомобіля підійде для перевезення квартирного та офісного типу, перевезення речей габаритами до 1200 кг",
    price: 700,
  },
  {
    id: 3,
    title: "Великий бус",
    description:
      "Обраний тип автомобіля підійде для перевезеннь різних типів, перевезення речей габаритами до 1500 кг",
    price: 800,
  },
  {
    id: 4,
    title: "Газель",
    description:
      "Обраний тип автомобіля підійде для будь-якого перевезення речей габаритами до 3000 кг",
    price: 900,
  },
];
