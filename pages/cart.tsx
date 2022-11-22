import React from "react";
import moment from "moment";
import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

import { Box, Button, Card, CardContent, CardMedia, Divider, List, ListItem, Typography } from "@mui/material";

import { IOrder, IProduct } from "@models";
import { AlertDialog, TitleBar } from "@components";
import ShoppingCart from '@mui/icons-material/ShoppingCart';

import styles from '@styles/cart.module.css';

import { convertProductsToItems } from "@utils";
import { useCart, useOrders, useTimeMachine } from "@hooks";

import { CartProductTile } from "@pageComponents/cart";

const Cart = () => {
    const {total, products, clearCart} = useCart();    
    const {orders, addOrder} = useOrders();    
    const {dateToday} = useTimeMachine();
    
    const [open, setOpen] = React.useState(false);
    const [errorOpen, setErrorOpen] = React.useState(false);

    const handleClickErrorOpen = () => setErrorOpen(true);      
    const handleErrorClose = () => setErrorOpen(false);
    const handleClickOpen = () => setOpen(true);      
    const handleClose = () => setOpen(false);

    const handleCheckoutClicked = () => {
        if (products.length > 0) {
          const orderNumber: number = orders.length + 1;
    
          const order: IOrder = {
              id: orderNumber.toString(),
              customerID: 50,
              orderNumber: orderNumber,
              amount: total,
              date: moment(dateToday).format('YYYY-MM-DD'),
              items: convertProductsToItems(products, orderNumber),
          };
          
          addOrder(order);
          clearCart();          
          handleClickOpen();
        } else {
          handleClickErrorOpen();
        }
    }
   
    return ( 
        <Box>
            <AlertDialog open={open} title={"Order has been created"} message={"Your order has been created. The order will be displayed under Account => Orders."} handleClose={handleClose} />
            <AlertDialog open={errorOpen} title={"No Cart Products"} message={"There are no products in the cart to checkout!"} handleClose={handleErrorClose} />
            <TitleBar title={"Cart"} />
            <Box className={styles.screen}>
            <List className={styles.root}>      
                {!_.isEmpty(products) && products.map((product: IProduct) => (
                <span key={uuidv4()}>
                    <ListItem className={styles.listItem} key={uuidv4()}>
                    <CartProductTile product={product} />              
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </span>
                ))}           
            </List> 

            <Card key={uuidv4()} className={styles.checkoutSection}>
                <div className={styles.checkoutCard}>
                    <CardMedia
                        className={styles.tileImage}
                        image={"./icons/shopping-cart.svg"}
                        title={"CartProduct"}
                        sx={{ backgroundSize: '50%' }}
                    />
                    <div className={styles.tileContent}>
                        <CardContent>                                              
                            <Typography component="h3" variant="h3">
                            {`Total: $${total}`}
                            </Typography>                      
                        </CardContent>                                         
                    </div>            
                    <div className={styles.spacer}> 
                    </div>
                    <div className={styles.aligner}>
                    {/* TODO: Validation: No products in cart. */}
                    <Button className={styles.checkoutButton} size="large" variant="outlined" color="primary" onClick={handleCheckoutClicked}>
                        <ShoppingCart /> Checkout
                    </Button>     
                    </div>
                </div>
            </Card>       
            </Box>
        </Box>
    );
}

export default Cart;
