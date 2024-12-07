export interface Expert {
  id: string;
  name: string;
  image: string;
  specialty: string;
  active: boolean;
  description: string;
}

export const experts: Expert[] = [
  {
    id: "heide",
    name: "Dr. Heide Rezepa-Zabel",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    specialty: "Jewelry & Decorative Arts",
    active: true,
    description: "Art historian specializing in decorative arts and jewelry."
  },
  {
    id: "albert",
    name: "Albert Maier",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    specialty: "Antique Furniture",
    active: true,
    description: "Expert in historical furniture and wooden artifacts."
  },
  {
    id: "detlev",
    name: "Detlev Kümmel",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
    specialty: "Art & Design",
    active: true,
    description: "Specialist in modern art and design objects."
  },
  {
    id: "sven",
    name: "Sven Deutschmanek",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    specialty: "Collectibles & Pop Culture",
    active: true,
    description: "Expert in collectibles and contemporary items."
  }
];