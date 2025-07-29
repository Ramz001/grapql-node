import type { Order } from "../generated/graphql";
import { getAllProducts } from "../products/products.model";

export const getAllOrders = () => {
  return [
    {
      date: "2024-06-01",
      subtotal: 119.98,
      items: [{ product: getAllProducts()[0], quantity: 2 }],
    },
    {
      date: "2024-06-02",
      subtotal: 289.98,
      items: [
        { product: getAllProducts()[1], quantity: 1 },
        { product: getAllProducts()[2], quantity: 1 },
      ],
    },
  ];
};
