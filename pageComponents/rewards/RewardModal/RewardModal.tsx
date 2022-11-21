import React from "react";

import { AppBar, Toolbar, Typography, IconButton, Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import styles from './RewardModal.module.css';
import { IOrder } from "@models";
import { getOrdersWithMonths, getOrdersTotalReward } from "@utils";
import { OrderList } from "./components";

export const RewardModal = ({  
    isOpen,
    handleClose,
    orders,
    byDateRange,
    startDate,
  }: {
    isOpen: boolean,
    handleClose: any,
    orders: IOrder[],
    byDateRange: boolean,
    startDate: Date,
  }) => (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
    <>
    <AppBar position="relative">
        <Toolbar className={styles.toolbar}>          
            <Typography variant="h6" className={styles.title}>
              Rewards By Order
            </Typography>                    
            <div className={styles.closeButton}>
              <IconButton edge="start" color="inherit" aria-label="closeButton" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
        </Toolbar>
    </AppBar>
      <div className={styles.paper}>
        {byDateRange ? (
            <>          
              <Typography component="h4" variant="h4" className={styles.text}>FIRST MONTH</Typography>
              <OrderList orders={getOrdersWithMonths(orders, startDate, 0, 1)} />
              <Typography component="h5" variant="h5" className={styles.text}>Total Points: {getOrdersTotalReward(getOrdersWithMonths(orders, startDate, 0, 1))}</Typography>
              <div className={styles.spacerSmall}/>
              <Typography component="h4" variant="h4" className={styles.text}>SECOND MONTH</Typography>
              <OrderList orders={getOrdersWithMonths(orders, startDate, 1, 2)} />
              <Typography component="h5" variant="h5" className={styles.text}>Total Points: {getOrdersTotalReward(getOrdersWithMonths(orders, startDate, 1, 2))}</Typography>
              <div className={styles.spacerSmall}/>
              <Typography component="h4" variant="h4" className={styles.text}>THIRD MONTH</Typography>
              <OrderList orders={getOrdersWithMonths(orders, startDate, 2, 3)} />
              <Typography component="h5" variant="h5" className={styles.text}>Total Points: {getOrdersTotalReward(getOrdersWithMonths(orders, startDate, 2, 3))}</Typography>
            </>
          ) 
          : (
            <>
              <Typography component="h4" variant="h4" className={styles.text}>ALL ORDERS</Typography>
              <OrderList orders={orders} />
            </>
          )
        }
        <div className={styles.spacer}/>
      </div>
    </>  
  </Modal>
);

export default RewardModal;