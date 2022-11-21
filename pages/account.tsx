import React from "react";
import { Box, Grid } from "@mui/material";

import styles from '@styles/account.module.css';
import { TitleBar } from "@components";

import { OrderCard, RewardCard, TimeMachineCard } from "@pageComponents/account";

const Account = () => {
    return (
        <>
            <TitleBar title="Account" />                          
            <div className={styles.section}>
                <div className={styles.container}>
                    <Grid container justifyContent="space-between" spacing={10}>              
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
            </div>          
        </>
    );
}

export default Account;