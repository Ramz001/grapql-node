import { getAllProducts, products } from "../products/products.model";

export const getAllOrders = () => {
  return [
    {
      date: "2024-06-01",
      subtotal: 119.98,
      items: [{ product: products[0], quantity: 2 }],
    },
    {
      date: "2024-06-02",
      subtotal: 289.98,
      items: [
        { product: products[1], quantity: 1 },
        { product: products[2], quantity: 1 },
      ],
    },
  ];
};
