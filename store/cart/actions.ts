import { IProduct } from "@models";

export const CLEAR_CART = "CLEAR_CART";

export const CART_ADD_PRODUCT = "CART_ADD_PRODUCT";
export const CART_REMOVE_PRODUCT = "CART_REMOVE_PRODUCT";

export const cartRemoveProduct = (productID: Number) => ({
    type: CART_REMOVE_PRODUCT,
    payload: productID
  });

export const cartAddProduct = (product: IProduct) => ({
  type: CART_ADD_PRODUCT,
  payload: product
});

export const clearCart = () => ({
    type: CLEAR_CART
});


