export interface Expert {
    id: string;
    name: string;
    profilePicture: string;
    expertise: string[];
    biography: string;
    notableAppraisals: {
      objectId: string;
      description: string;
    }[];
    yearsActiveOnShow: string;
    socialMediaLinks: {
      platform: string;
      url: string;
    }[];
    specialEpisodesOrFeatures: {
      compilationId: string;
      description: string;
    }[];
    ratingsAndPopularity: number;
    trivia: string[];
    featuredInMedia: {
      title: string;
      url: string;
    }[];
  }
  
  export const expertsData: Record<string, Expert> = {
    "exp001": {
      "id": "exp001",
      "name": "Albert Maier",
      "profilePicture": "https://source.unsplash.com/featured/?person,antique",
      "expertise": ["Paintings", "Furniture", "Antiques"],
      "biography": "Albert Maier is one of the most prominent experts on Bares für Rares. With over 40 years of experience in art and antiques, he is widely regarded as an authority in his field. Born in 1951 in Ellwangen, Germany, Albert studied art history before opening his own antique store. He is known for his sharp eye and engaging explanations on the show, often diving deep into the historical significance of the objects he appraises.",
      "notableAppraisals": [
        {
          "objectId": "obj1023",
          "description": "A rare 18th-century grandfather clock appraised at €25,000."
        },
        {
          "objectId": "obj1984",
          "description": "A 17th-century oil painting from a Dutch master."
        }
      ],
      "yearsActiveOnShow": "2013–2024",
      "socialMediaLinks": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/albertmaier"
        }
      ],
      "specialEpisodesOrFeatures": [
        {
          "compilationId": "comp001",
          "description": "The Most Expensive Objects on Bares für Rares"
        },
        {
          "compilationId": "comp015",
          "description": "Best Appraisals by Albert Maier"
        }
      ],
      "ratingsAndPopularity": 4.9,
      "trivia": [
        "Albert's antique shop in Ellwangen is a popular tourist destination.",
        "He has a passion for restoring old furniture and often uses his expertise in woodworking.",
        "Albert once appraised a painting live on the show that turned out to be worth over €50,000, the highest valuation in his career."
      ],
      "featuredInMedia": [
        {
          "title": "Antiques Guru: The Story of Albert Maier",
          "url": "https://example.com/albert-maier-feature"
        },
        {
          "title": "10 Things You Didn't Know About Bares für Rares",
          "url": "https://example.com/bares-fuer-rares-trivia"
        }
      ]
    }
  };