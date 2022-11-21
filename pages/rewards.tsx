import React from "react";

import { Box, Grid } from "@mui/material";

import { calculateOrdersReward, getOrdersWithinThreeMonths, getOrdersTotalReward, getOrdersWithinThreeMonthsTotalReward } from "@utils";

import { TitleBar } from "@components";
import { RewardCard, RewardCardPickDate, RewardModal } from "@pageComponents/rewards";

import styles from '@styles/rewards.module.css';
import { useOrders } from "@hooks";

const Reward = () => {
    const {orders} = useOrders();

    const [open, setOpen] = React.useState(false);
    const [startDate, setStartDate] = React.useState(new Date());
    const [byDateRange, setByDateRange] = React.useState(false);

    const handleDateChange = (date: Date) => setStartDate(date);  
    const handleClose = () => setOpen(false);
    const handleReviewClick = () => { setOpen(true); setByDateRange(false); }
    const handleReviewDateClick = () => { setOpen(true); setByDateRange(true); }

    const getReviewOrders = () => {
        if (byDateRange) {
            return calculateOrdersReward(getOrdersWithinThreeMonths(orders, startDate));
        } else {
            return calculateOrdersReward(orders);
        }
    }
    
    return (
        <Box>
            <TitleBar title="Reward" />        
            <Box className={styles.screen}>            
                <Grid container className={styles.grid} spacing={2}>
                    <Grid item xs={12}> 
                        <Grid container justifyContent="center" spacing={10}>                                                     
                            <RewardModal startDate={startDate} byDateRange={byDateRange} orders={orders && getReviewOrders()} isOpen={open} handleClose={handleClose} />                        
                            <RewardCard rewardTotal={orders && getOrdersTotalReward(orders)} onReviewClick={handleReviewClick} />                         
                            <RewardCardPickDate rewardTotal={orders && getOrdersWithinThreeMonthsTotalReward(orders, startDate)} startDate={startDate} handleDateChange={handleDateChange} onReviewClick={handleReviewDateClick} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Reward;