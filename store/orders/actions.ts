import { IOrder } from "@models";

export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (order: IOrder) => ({
  type: ADD_ORDER,
  payload: order
});