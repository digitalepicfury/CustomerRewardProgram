import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import { IProduct } from "@models";
import styles from './ProductCard.module.css';
import { processNewLine } from "@utils";

const ProductCard = ({ product, onAddToCartClick }: { product: IProduct, onAddToCartClick: any }) => (        
    <Card id={uuidv4()} key={uuidv4()} className={styles.root}>
        <div>            
            <CardMedia
            className={styles.media}
            image={product.image}
            title={product.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {product.name}
            </Typography>            
            <Typography gutterBottom variant="h4" component="h4" className={styles.price}>
                ${product.amount}
            </Typography>            
            <Typography variant="body2" color="textSecondary" component="p" className={styles.description}>            
                {processNewLine(product.description)}
            </Typography>
            </CardContent>
        </div>
        <CardActions className={styles.actions}>
            <Button onClick={() => onAddToCartClick(product)} className={styles.button}>
                <Typography variant="button">ADD TO CART</Typography>
            </Button>        
        </CardActions>
    </Card>    
);

export default ProductCard;