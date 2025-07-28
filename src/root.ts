import { mockOrders } from "./orders/orders.model";
import { mockProducts } from "./products/products.model";

export const root = {
  orders: () => mockOrders,
  products: () => mockProducts,
};
