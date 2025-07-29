import { getAllProducts } from "./products.model";

export const Query = {
  products: () => getAllProducts(),
};
