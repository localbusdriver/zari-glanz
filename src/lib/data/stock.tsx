export type StockType = {
  id: number;
  title: string;
  price: number;
  colours: string[] | string;
  description: string;
  img: string;
  availability: number;
  sizesAvailable: string[];
  sale?: boolean;
};

export const stockList: StockType[] = [
  {
    id: 1,
    title: "Burgandy Underwear",
    img: "/images/stock/burgandy_underwear.jpg",
    price: 20,
    description: "",
    availability: 10,
    sizesAvailable: ["S, M, L, XL"],
    colours: "Burgandy Red",
  },
];
