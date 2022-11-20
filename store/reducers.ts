import cartReducer from './cart';
import orderReducer from './orders';
import timeMachineReducer from './time-machine';

import { IProduct, IOrder } from '@models';

interface IState {
	products: IProduct[];
	orders: IOrder[];
	dateToday: Date;
}

export const initialState: IState = {
	products: cartReducer.initialState,
	orders: orderReducer.initialState,
	dateToday: timeMachineReducer.initialState
}

export default function mainReducer(state: IState, action: any) {
	// Receiving previous state here
	const { products, orders, dateToday } = state;

	// Receiving current state here
	const currentState = {
		products: cartReducer.reducer(products, action),
		orders: orderReducer.reducer(orders, action),
		dateToday: timeMachineReducer.reducer(dateToday, action),
	};

	console.groupCollapsed(action.type);
	console.log('Action:', action);
	console.log('PrevState:', state);
	console.log('CurrentState:', currentState);
	console.groupEnd();

	return currentState;
}