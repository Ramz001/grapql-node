import type { Product } from "../generated/graphql";

export const products = [
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

export const getAllProducts = () => {
  return products;
};

export const getProductsByPrice = (min: number, max: number) => {
  if (typeof min !== "number" || typeof max !== "number") {
    return [];
  }
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
};

export const getProductById = (id: string) => {
  if (!id) {
    return {};
  }
  return products.find((p) => p.id === id);
};

export const addProduct = ({ id, description, price }: Product) => {
  if (!id || !description || !price) {
    return;
  }
  const product = { id, description, price, reviews: [] };

  products.unshift(product);
  return product;
};
