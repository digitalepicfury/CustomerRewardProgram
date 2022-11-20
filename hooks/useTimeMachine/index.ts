import React from 'react';

import { IProduct } from '@models';
import { sumArray } from '@utils';

import { useGlobalStore } from 'store';
import timeMachineReducer from 'store/time-machine';

/**
 * useCart Custom Hook
 */
const useTimeMachine: any = () => {	
	const { actions } = timeMachineReducer;
	const { state , dispatch } = useGlobalStore();

	// List of Props
	const { dateToday } = state;

	const itemActions = {
		changeTodaysDate: (dateToday: Date): any => dispatch(actions.changeTodaysDate(dateToday)),
	}

	return { dateToday, ...itemActions };
}

export default useTimeMachine;






