import React from "react";
import { Box, Grid } from "@mui/material";

import styles from './Account.module.css';
import { TitleBar } from "@components";

import { OrderCard, RewardCard, TimeMachineCard } from "@pageComponents/account";

const Account = () => {
    return (
        <>
            <TitleBar title="Account" />        
            <Grid item xs={12}>
                <Grid container justifyContent="space-between" spacing={10}>  
                    <OrderCard />
                    <RewardCard />   
                    <TimeMachineCard />
                </Grid>
            </Grid>
        </>
    );
}

export default Account;