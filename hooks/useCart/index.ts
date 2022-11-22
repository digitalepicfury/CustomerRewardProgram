import React from 'react';

import { IProduct } from '@models';
import { sumArray } from '@utils';

import { useGlobalStore } from 'store';
import cartReducer from 'store/cart';

/**
 * useCart Custom Hook
 */
const useCart: any = () => {
	const [total, setTotal] = React.useState(0.00);
	const { actions } = cartReducer;
	const { state, dispatch } = useGlobalStore();

	// List of Props
	const { products } = state;

	const itemActions = {
		cartAddProduct: (product: IProduct): any => dispatch(actions.cartAddProduct(product)),
		cartRemoveProduct: (productID: Number): any => dispatch(actions.cartRemoveProduct(productID)),
		clearCart: (): any => dispatch(actions.clearCart()),
	}

	const calculateTotal = () => {
		return sumArray(products.map((cartProduct: IProduct) => cartProduct.amount));
	}

	React.useEffect(() => {
        const cartTotal: number = calculateTotal();
        const cartTotalDecimal: number = parseFloat(cartTotal.toFixed(2));
         
        setTotal(cartTotalDecimal);         
      }, [products]);


	return { products, total, ...itemActions };
}

export default useCart;






