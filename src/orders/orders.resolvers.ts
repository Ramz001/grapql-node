import type { Order } from "../generated/graphql";
import { getAllOrders } from "./orders.model";

export const Query = {
  orders: () => getAllOrders(),
};
