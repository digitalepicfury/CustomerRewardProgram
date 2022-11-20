import React from "react";
import Link from "next/link";

import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { IProduct } from "@models";

import styles from './OrderProduct.module.css';
import { processNewLine } from "@utils";

const OrderProduct = ({ product }: { product: IProduct }) => (
    <Card id={uuidv4()} key={uuidv4()} className={styles.root}>        
        <div>
            <div className={styles.tile}>
                <CardMedia
                    className={styles.tileImage}
                    image={product.image}
                    title={"OrderItem"}
                />                                
                <CardContent className={styles.tileContent}>
                    <div className={styles.details}>
                        <Typography component="h5" variant="h5">
                            {product.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">                            
                            {processNewLine(product.description)}
                        </Typography>
                    </div>            
                    <div className={styles.priceSection}>
                        <Typography component="h4" variant="h4" className={styles.price}>
                            ${product.amount}
                        </Typography>
                    </div>
                </CardContent>    
            </div>
        </div>        
    </Card>       
);

export default OrderProduct;
