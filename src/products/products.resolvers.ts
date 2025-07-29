import {
  getAllProducts,
  getProductById,
  getProductsByPrice,
} from "./products.model";

export const Query = {
  products: () => getAllProducts(),
  productsByPrice: (_: any, { min, max }: { min: number; max: number }) => {
    return getProductsByPrice(min, max);
  },
  productById: (_: any, { id }: { id: string }) => {
    return getProductById(id);
  },
};
