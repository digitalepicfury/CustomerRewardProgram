import React, {
	createContext,
	useContext,
	useReducer
} from 'react';

export interface IContext {
	state: any;
	dispatch: any;
}

import mainReducer, { initialState } from 'store/reducers';

const GlobalStore = createContext({} as IContext);

export const useGlobalStore = () => useContext(GlobalStore);

export default function Provider({ children } : { children: React.ReactNode}) {
	const [ state, dispatch ] = useReducer(mainReducer, initialState);

	return (
		<GlobalStore.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStore.Provider>
	);
}
