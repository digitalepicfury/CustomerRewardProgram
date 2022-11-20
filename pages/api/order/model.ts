export interface IItem {
    id: number;
    orderNumber: number;    
    productId: number;
}

export interface IOrder {
    id: string;
    customerID: number;
    orderNumber: number;
    amount: number;
    date: string;
    items: IItem[];
    reward?: number;
}