import React from "react";
import { Box, Grid } from "@mui/material";

import styles from './Account.module.css';
import { TitleBar } from "@components";

import { OrderCard, RewardCard, TimeMachineCard } from "@pageComponents/account";

const Account = () => {
    return (
        <>
            <TitleBar title="Account" />                          
            <div className={styles.section}>
                <Grid container justifyContent="space-between" spacing={10} className={styles.container}>              
                    <Grid item xs={4}>
                        <OrderCard />
                    </Grid>
                    <Grid item xs={4}>
                        <RewardCard />   
                    </Grid>
                    <Grid item xs={4}>
                        <TimeMachineCard />
                    </Grid>
                </Grid>
            </div>          
        </>
    );
}

export default Account;