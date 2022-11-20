import { IProduct } from "@models";
import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT, CLEAR_CART } from "./actions";

export const initialState: IProduct[] = [];

export default function cart(state = initialState, action: any) {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return [
        ...state,
         action.payload
      ];
    case CART_REMOVE_PRODUCT:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];    
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
}