import type { Order } from "../generated/graphql";

export const Query = {
  orders: (parent: { orders: Order[] }) => {
    return parent.orders;
  },
};
