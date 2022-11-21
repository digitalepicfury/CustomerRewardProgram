import React, { useEffect } from "react";
import Image from 'next/image'

import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

import clsx from  'clsx';

import { Box, Grid, Paper, Typography } from "@mui/material";

import { IProduct } from "@models";
import { AlertDialog, TitleBar } from "@components";
import { ProductCard } from "@pageComponents/products";

import styles from './Product.module.css';
import useCart from "hooks/useCart";
import { useProducts } from "@hooks";

import localFont from '@next/font/local'

const CyberFont = localFont({
    src: [
      {
        path: './Cyber.ttf',
        weight: '400',
        style: 'normal',
      }
    ],
});

const Product = () => {
    const { cartAddProduct } = useCart();    
    const { products } = useProducts();    
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);  
    const handleClose = () => setOpen(false);

    const handleAddToCartClick = (product: IProduct) => { handleClickOpen();  cartAddProduct(product); }

    return (
        <Box>            
            <AlertDialog open={open} title={"Item added to cart"} message={"The item has been added to the cart. Click on the Cart icon on the title bar to view your cart."} handleClose={handleClose} />
            <TitleBar title={"CYBER SHOP DISTRICT"} />
            <Paper className={styles.shopSection}>                    
                <h1 className={clsx(CyberFont.className, styles.shopText)}>
                    Cyber Shop District
                </h1>                 
                <Image src={"/images/tokyo-4763976_1920.jpg"} alt={"Tokyo Shops"} fill />                     
            </Paper> 
            <Box className={styles.screen}>       
                <Grid container className={styles.root}>      
                    <Typography variant="h3" className={styles.featureText}>
                        Featured Products
                    </Typography>
                    <div className={styles.spacer}/>
                    <Grid item xs={12}>
                        <Grid container justifyContent="space-between" spacing={10}>               
                            {!_.isEmpty(products) && products.map((product: IProduct) => (
                                <Grid key={uuidv4()} item>
                                    <ProductCard product={product} onAddToCartClick={handleAddToCartClick} />              
                                </Grid>
                            ))} 
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Product;
