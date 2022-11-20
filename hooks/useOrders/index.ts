import useSWR from 'swr';

import { IOrder } from '@models';

import { useGlobalStore } from 'store';
import orderReducer from 'store/orders';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 * useOrders Custom Hook
 */
const useOrders: any = () => {
	const { actions } = orderReducer;
	const { state , dispatch } = useGlobalStore();	
	const { data } = useSWR('/api/order', fetcher);  

	const itemActions = {
		addOrder: (order: IOrder): any => dispatch(actions.addOrder(order)),
	}

	if (!data) {		
		return { orders: state.orders, ...itemActions };
	}

	const orders = [...data?.orders, ...state.orders];
		
	return { orders, ...itemActions };
}

export default useOrders;






