import React from "react";
import { Box, Grid } from "@mui/material";

import styles from './Account.module.css';
import { TitleBar } from "@components";

import { OrderCard, RewardCard, TimeMachineCard } from "@pageComponents/account";

const Account = () => {
    return (
        <>
            <TitleBar title="Account" />        
            <div className={styles.screen}>            
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={10} justifyContent="center">
                            <OrderCard />
                            <RewardCard />   
                            <TimeMachineCard />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Account;