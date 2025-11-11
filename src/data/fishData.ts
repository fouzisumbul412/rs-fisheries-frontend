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
    name: "Atlantic Salmon",
    shortCode: "RF-001",
    image: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=400&h=300&fit=crop",
    tags: ["Popular", "Premium"],
    commonUse: "Grilling, Sushi, Pan-searing",
    availableAs: ["Whole", "Fillet", "Frozen", "Fresh"],
    description: "Rich in omega-3, firm texture, versatile for various preparations"
  },
  {
    id: "2",
    name: "Yellowfin Tuna",
    shortCode: "RF-002",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop",
    tags: ["Popular", "Premium"],
    commonUse: "Sashimi, Grilling, Steak",
    availableAs: ["Whole", "Loin", "Steak", "Fresh", "Frozen"],
    description: "Lean protein, mild flavor, excellent for high-end preparations"
  },
  {
    id: "3",
    name: "Sea Bass",
    shortCode: "RF-003",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
    tags: ["Premium"],
    commonUse: "Pan-frying, Grilling, Baking",
    availableAs: ["Whole", "Fillet", "Fresh", "Frozen"],
    description: "Delicate white flesh, buttery texture, restaurant favorite"
  },
  {
    id: "4",
    name: "King Prawns",
    shortCode: "RF-004",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
    tags: ["Popular", "High Demand"],
    commonUse: "Grilling, Stir-fry, Curries",
    availableAs: ["Whole", "Peeled", "Deveined", "Fresh", "Frozen"],
    description: "Sweet flavor, firm texture, versatile cooking applications"
  },
  {
    id: "5",
    name: "Mackerel",
    shortCode: "RF-005",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
    tags: ["Popular"],
    commonUse: "Grilling, Smoking, Curries",
    availableAs: ["Whole", "Fillet", "Fresh", "Frozen"],
    description: "Rich in omega-3, strong flavor, affordable option"
  },
  {
    id: "6",
    name: "Red Snapper",
    shortCode: "RF-006",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop",
    tags: ["Premium"],
    commonUse: "Grilling, Baking, Steaming",
    availableAs: ["Whole", "Fillet", "Fresh"],
    description: "Moist, sweet flesh, excellent for whole fish presentations"
  },
  {
    id: "7",
    name: "Squid",
    shortCode: "RF-007",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop",
    tags: ["High Demand"],
    commonUse: "Frying, Grilling, Stir-fry",
    availableAs: ["Whole", "Cleaned", "Rings", "Fresh", "Frozen"],
    description: "Tender when cooked properly, popular for appetizers"
  },
  {
    id: "8",
    name: "Lobster",
    shortCode: "RF-008",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop",
    tags: ["Premium", "Luxury"],
    commonUse: "Grilling, Steaming, Boiling",
    availableAs: ["Whole", "Tail", "Fresh", "Frozen"],
    description: "Premium seafood, sweet meat, special occasion favorite"
  },
  {
    id: "9",
    name: "Cod",
    shortCode: "RF-009",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    tags: ["Popular"],
    commonUse: "Frying, Baking, Fish & Chips",
    availableAs: ["Fillet", "Fresh", "Frozen"],
    description: "Mild flavor, flaky texture, versatile white fish"
  },
  {
    id: "10",
    name: "Mussels",
    shortCode: "RF-010",
    image: "https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=400&h=300&fit=crop",
    tags: ["Popular"],
    commonUse: "Steaming, Soups, Pasta",
    availableAs: ["Fresh", "Frozen", "Half-shell"],
    description: "Sustainable choice, rich flavor, quick cooking"
  }
];
