import type { Product, Order } from "./generated/graphql";

const mockProducts: Product[] = [
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

const mockOrders: Order[] = [
  {
    date: "2024-06-01",
    subtotal: 119.98,
    items: [{ product: mockProducts[0], quantity: 2 }],
  },
  {
    date: "2024-06-02",
    subtotal: 289.98,
    items: [
      { product: mockProducts[1], quantity: 1 },
      { product: mockProducts[2], quantity: 1 },
    ],
  },
];

export const root = {
  hello() {
    return "Hello world!";
  },
  products: () => {
    return mockProducts;
  },
  orders: () => {
    return mockOrders;
  },
};
