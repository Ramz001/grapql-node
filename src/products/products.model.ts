import type { Product } from "../generated/graphql";

export const mockProducts: Product[] = [
  {
    id: "1",
    description: "Wireless Mouse",
    price: 29.99,
    reviews: [
      { rating: 5, comment: "Great mouse!" },
      { rating: 4, comment: "Works well, but a bit small." },
    ],
  },
  {
    id: "2",
    description: "Mechanical Keyboard",
    price: 89.99,
    reviews: [
      { rating: 5, comment: "Love the tactile feedback." },
      { rating: 3, comment: "A bit noisy." },
    ],
  },
  {
    id: "3",
    description: "HD Monitor",
    price: 199.99,
    reviews: [{ rating: 4, comment: "Crisp display." }],
  },
];
