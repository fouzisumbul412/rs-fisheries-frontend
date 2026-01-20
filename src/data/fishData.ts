export interface Fish {
  id: string;
  name: string;
  shortCode: string;
  image: string;
  tags: string[];
  commonUse: string;
  availableAs: string[];
  description: string;
}

export const fishData: Fish[] = [
  {
    id: "1",
    name: "Grass Carp",
    shortCode: "RF-001",
    image:
      "/Fishes/CG.webp",
    tags: ["Freshwater", "Popular"],
    commonUse: "Curries, Fry, Grilling",
    availableAs: ["Whole", "Cut Pieces", "Fresh"],
    description: "Mild-flavored freshwater fish commonly used in Indian cooking."
  },
  {
    id: "2",
    name: "Grass Carp Medium",
    shortCode: "RF-002",
    image:
      "/Fishes/MGC.png",
    tags: ["Freshwater"],
    commonUse: "Curries, Fry",
    availableAs: ["Whole", "Cut Pieces"],
    description: "Medium-sized grass carp with firm flesh and balanced taste."
  },
  {
    id: "3",
    name: "Katla",
    shortCode: "RF-003",
    image:
      "/Fishes/Katla.avif",
    tags: ["High Demand"],
    commonUse: "Curries, Traditional Dishes",
    availableAs: ["Whole", "Steaks", "Fresh"],
    description: "Popular Indian major carp with rich flavor and soft texture."
  },
  {
    id: "4",
    name: "Katla Medium",
    shortCode: "RF-004",
    image:
      "/Fishes/mkatla.png",
    tags: ["Popular"],
    commonUse: "Curries, Fry",
    availableAs: ["Cut Pieces", "Fresh"],
    description: "Medium-sized Katla ideal for daily home cooking."
  },
  {
    id: "5",
    name: "Mrigal Carp",
    shortCode: "RF-005",
    image:
      "/Fishes/MC.png",
    tags: ["Freshwater"],
    commonUse: "Curries, Light Fry",
    availableAs: ["Whole", "Cut Pieces"],
    description: "Lean freshwater carp with subtle taste."
  },
  {
    id: "6",
    name: "Medium Rohu Carp",
    shortCode: "RF-006",
    image:
      "/Fishes/MRC.png",
    tags: ["Popular"],
    commonUse: "Curries, Fry",
    availableAs: ["Steaks", "Fresh"],
    description: "Most loved Indian carp, soft flesh with excellent flavor."
  },
  {
    id: "7",
    name: "Prawn Medium",
    shortCode: "RF-007",
    image:
      "/Fishes/PM.webp",
    tags: ["High Demand"],
    commonUse: "Curries, Fry, Stir-fry",
    availableAs: ["Whole", "Cleaned", "Fresh", "Frozen"],
    description: "Medium-sized prawns perfect for everyday seafood dishes."
  },
  {
    id: "8",
    name: "Pangasius",
    shortCode: "RF-008",
    image:
      "/Fishes/Pangasius.png",
    tags: ["Boneless"],
    commonUse: "Fillet Fry, Grilling",
    availableAs: ["Fillet", "Frozen"],
    description: "Soft boneless fish with mild taste, easy to cook."
  },
  {
    id: "9",
    name: "Roop Chand",
    shortCode: "RF-009",
    image:
      "/Fishes/RC.png",
    tags: ["Premium"],
    commonUse: "Fry, Shallow Fry",
    availableAs: ["Whole", "Cleaned"],
    description: "Popular table fish with soft flesh and rich flavor."
  },
  {
    id: "10",
    name: "Rohu",
    shortCode: "RF-010",
    image:
      "/Fishes/r.jpg",
    tags: ["Popular"],
    commonUse: "Curries, Fry",
    availableAs: ["Whole", "Steaks"],
    description: "Classic freshwater fish widely consumed across India."
  },
  {
    id: "11",
    name: "Tilapia Medium",
    shortCode: "RF-011",
    image:
      "/Fishes/TM.png",
    tags: ["Farmed"],
    commonUse: "Grilling, Fry",
    availableAs: ["Whole", "Fillet"],
    description: "Mild-flavored fish with firm white flesh."
  },
  {
    id: "12",
    name: "Tilapia Small",
    shortCode: "RF-012",
    image:
      "/Fishes/TS.png",
    tags: ["Budget"],
    commonUse: "Fry",
    availableAs: ["Whole"],
    description: "Small tilapia ideal for crispy fry dishes."
  },
  {
    id: "13",
    name: "Vannamei Prawn",
    shortCode: "RF-013",
    image:
      "/Fishes/VP.png",
    tags: ["Export Quality", "Premium"],
    commonUse: "Curries, Fry, Grill",
    availableAs: ["Whole", "Peeled", "Deveined", "Frozen"],
    description: "High-quality prawns widely used in hotels and exports."
  },
  {
    id: "14",
    name: "Vietnam Rohu",
    shortCode: "RF-014",
    image:
      "/Fishes/VR.png",
    tags: ["Imported"],
    commonUse: "Curries",
    availableAs: ["Cut Pieces", "Frozen"],
    description: "Imported rohu variety with consistent size and texture."
  },
  {
    id: "15",
    name: "White Prawn",
    shortCode: "RF-015",
    image:
      "/Fishes/WP.png",
    tags: ["Premium"],
    commonUse: "Fry, Curries, Continental",
    availableAs: ["Whole", "Cleaned", "Frozen"],
    description: "Sweet-tasting white prawns with firm texture."
  }
];
