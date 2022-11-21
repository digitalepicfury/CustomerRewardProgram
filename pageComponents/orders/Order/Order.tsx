import React from "react";

import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

import { Box, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

import { IOrder, IItem } from "@models";

import styles from './Order.module.css';
import { OrderProduct } from "..";
import { useProducts } from "@hooks";

const Order = ({ order }: { order: IOrder }) => {
    const { products } = useProducts();

    return (
        <Card id={uuidv4()} key={uuidv4()} elevation={3} className={styles.root}>
            <CardContent>    
                <Typography component="h5" variant="h5">
                    {`Order #${order.id}`}
                </Typography>
                <Typography component="h4" variant="h4">
                    <span className={styles.price}>{`$${order.amount}`}</span>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">                            
                    {`Order Date: ${order.date}`}
                </Typography>                
                <Typography gutterBottom variant="h2" component="h2">
                    
                </Typography>
                {!_.isEmpty(products) && !_.isEmpty(order.items) && order.items.map((item: IItem) => (                    
                    <OrderProduct key={uuidv4()} product={products[item.productId-1]} />                    
                ))} 
            </CardContent>
        </Card>
    );
}

export default Order;
