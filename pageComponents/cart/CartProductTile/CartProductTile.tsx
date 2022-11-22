import React from "react";

import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import { IProduct } from "@models";
import styles from './CartProductTile.module.css';

const CartProductTile = ({ product }: { product: IProduct}) => (
    <Card id={uuidv4()} key={uuidv4()} className={styles.root}>
        <CardActionArea>
            <div className={styles.card}>
                <CardMedia
                    className={styles.tileImage}
                    image={product.image}
                    title={"CartProduct"}                    
                />
                <div className={styles.tileContent}>
                    <CardContent>                        
                        <Typography component="h5" variant="h5">
                            {product.name}
                        </Typography>
                        <Typography component="h4" variant="h4">
                            {`$${product.amount}`}
                        </Typography>
                    </CardContent>          
                </div>            
            </div>
        </CardActionArea>
    </Card>         
);

export default CartProductTile;
