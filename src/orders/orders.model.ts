import type { Order } from "../generated/graphql";
import { mockProducts } from "../products/products.model";

export const mockOrders: Order[] = [
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
