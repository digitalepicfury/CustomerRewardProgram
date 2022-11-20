import React from "react";

import { v4 as uuidv4 } from 'uuid';

import { IProduct } from "@models";

export const processNewLine = (item: String) => {
    if (item === undefined || item === null) { return item; }    
    
    if (item.includes('\n')) {
        return item.split('\n').map((line: any, idx: number) => <span id={uuidv4()} key={uuidv4()}>{line}<br/></span>);
    }

    return item;
} 

export const convertProductsToItems = (products: IProduct[], orderNumber: number) => {
    return products.map((product: IProduct, idx: number) => ({ id: idx, orderNumber, productId: product.id }));
}
