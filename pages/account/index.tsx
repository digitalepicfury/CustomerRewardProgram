import React from "react";
import { Box, Grid } from "@mui/material";

import styles from './Account.module.css';
import { TitleBar } from "@components";

import { OrderCard, RewardCard, TimeMachineCard } from "@pageComponents/account";

const Account = () => {
    return (
        <Box>
            <TitleBar title="Account" />        
            <Box className={styles.screen}>            
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={10} justifyContent="center">
                            <OrderCard />
                            <RewardCard />   
                            <TimeMachineCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Account;