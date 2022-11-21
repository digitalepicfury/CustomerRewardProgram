import React from "react";
import { v4 as uuidv4 } from 'uuid';

import { Card, CardContent, Typography } from "@mui/material";

import styles from './OrderListItem.module.css';
import { IOrder } from "@models";

export default function OrderListItem({ order, rewardAmount }: { order: IOrder; rewardAmount: number; }) {
    return (
        <Card id={uuidv4()} key={uuidv4()} className={styles.root}>
            <div>
                <CardContent className={styles.tileContent}>
                    <div className={styles.box1}>
                        <Typography component="h5" variant="h5">
                            {`Order #${order.id}`}
                        </Typography>
                        <Typography component="h4" variant="h4" className={styles.price}>
                            {`$${order.amount}`}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">                            
                            {`Order Date: ${order.date}`}
                        </Typography>
                    </div>

                    <div className={styles.box2}>
                        <Typography component="h5" variant="h5">
                            {`Reward Points`}
                        </Typography>
                        <Typography component="h3" variant="h3">
                            <span className={styles.amount}>{rewardAmount}</span>
                        </Typography>                        
                    </div>
                </CardContent> 
            </div>
        </Card>     
    );
}