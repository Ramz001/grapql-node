import {
  addProduct,
  getAllProducts,
  getProductById,
  getProductsByPrice,
} from "./products.model";
import type { Product } from "../generated/graphql";

export const Query = {
  products: () => getAllProducts(),
  productsByPrice: (_: any, { min, max }: { min: number; max: number }) => {
    return getProductsByPrice(min, max);
  },
  productById: (_: any, { id }: { id: string }) => {
    return getProductById(id);
  },
};

export const Mutation = {
  addProduct: (_: any, args: Product) => {
    return addProduct(args);
  },
};
