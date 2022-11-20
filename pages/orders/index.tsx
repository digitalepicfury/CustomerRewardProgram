import React from "react";

import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

import { Box } from "@mui/material";

import { IOrder } from "@models";
import { TitleBar } from "@components";
import { useOrders } from "@hooks";

import styles from './Orders.module.css';
import { Order } from "./components";

const Orders = () => {
    const {orders} = useOrders();

    return (
        <Box>
            <TitleBar title="Orders" />
            <Box className={styles.screen}>
                {!_.isEmpty(orders) && orders.map((order: IOrder) => (                      
                    <Order key={uuidv4()} order={order} />
                ))}        
            </Box>
        </Box>
    );
}
export default Orders;
