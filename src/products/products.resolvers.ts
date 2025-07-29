import { getAllProducts, getProductsByPrice } from "./products.model";

export const Query = {
  products: () => getAllProducts(),
  productsByPrice: (_: any, { min, max }: { min: number; max: number }) => {
    return getProductsByPrice(min, max);
  },
};
