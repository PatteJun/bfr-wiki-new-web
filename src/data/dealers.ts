export interface Dealer {
  id: string;
  name: string;
  image: string;
  specialty: string;
  active: boolean;
  description: string;
}

export const dealers: Dealer[] = [
  {
    id: "waldi",
    name: "Walter 'Waldi' Lehnertz",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    specialty: "Vintage & Antiques",
    active: true,
    description: "Known for his signature '80 Euro' starting bid and his expertise in rustic antiques."
  },
  {
    id: "susanne",
    name: "Susanne Steiger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    specialty: "Jewelry & Precious Metals",
    active: true,
    description: "Specializes in high-end jewelry and precious artifacts."
  },
  {
    id: "fabian",
    name: "Fabian Kahl",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    specialty: "Art & Antiques",
    active: true,
    description: "Expert in art and historical artifacts."
  },
  {
    id: "julian",
    name: "Julian Schmitz-Avila",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    specialty: "Fine Furniture",
    active: true,
    description: "Specializes in historical furniture and decorative arts."
  }
];