import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 * useProducts Custom Hook
 */
// TODO: Expand to have a way to add products and add to global state.
const useProducts: any = () => {	
	const { data } = useSWR('/api/product', fetcher);  
		
	return { products: data?.products };
}

export default useProducts;