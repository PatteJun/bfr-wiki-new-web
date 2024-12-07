export interface Compilation {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const compilations: Compilation[] = [
  {
    id: "most-expensive",
    title: "Top 10 Most Expensive Items Ever Sold",
    description: "The most valuable treasures that have passed through the show.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
  },
  {
    id: "surprising-valuations",
    title: "Biggest Price Surprises",
    description: "Items that sold for much more than their estimated value.",
    image: "https://images.unsplash.com/photo-1601932151223-e5c6c12ec8b6"
  },
  {
    id: "unique-finds",
    title: "Most Unique Discoveries",
    description: "The rarest and most unusual items featured on the show.",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec"
  },
  {
    id: "historical-pieces",
    title: "Historical Treasures",
    description: "Objects with fascinating historical significance.",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec"
  },
  {
    id: "dealer-favorites",
    title: "Dealer's Most Memorable Purchases",
    description: "The favorite acquisitions of our beloved dealers.",
    image: "https://images.unsplash.com/photo-1459257868276-5e65389e2722"
  }
];