import { IOrder } from "@models";
import { ADD_ORDER } from "./actions";

export const initialState: IOrder[] = [];

export default function orders(state = initialState, action: any) {
  switch (action.type) {
    case ADD_ORDER:      
      return [
        ...state,
         action.payload
      ];
    default:
      return state;
  }
}