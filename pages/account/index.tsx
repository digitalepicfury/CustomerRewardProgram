import React from "react";
import { Box, Grid } from "@mui/material";

import styles from './Account.module.css';
import { TitleBar } from "@components";

import { OrderCard, RewardCard, TimeMachineCard } from "@pageComponents/account";

const Account = () => {
    return (
        <>
            <TitleBar title="Account" />        
            <div>
                <OrderCard />
                <RewardCard />   
                <TimeMachineCard />
            </div>
        </>
    );
}

export default Account;