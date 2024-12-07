export interface Object {
  id: string;
  name: string;
  image: string;
  expertId: string;
  dealerId: string;
  estimatedPrice: number;
  sellingPrice: number;
  date: string;
  description: string;
}

export const featuredObjects: Object[] = [
  {
    id: "gold-watch-1890",
    name: "Golden Pocket Watch from 1890",
    image: "/objects/gold-watch.jpg",
    expertId: "heide",
    dealerId: "susanne",
    estimatedPrice: 1200,
    sellingPrice: 2400,
    date: "2023-05-15",
    description: "A rare golden pocket watch from the late 19th century."
  },
  {
    id: "baroque-cabinet",
    name: "Baroque Cabinet",
    image: "/objects/baroque-cabinet.jpg",
    expertId: "albert",
    dealerId: "waldi",
    estimatedPrice: 800,
    sellingPrice: 1500,
    date: "2023-06-20",
    description: "An ornate baroque cabinet from Southern Germany."
  }
  // More objects would be added here
];