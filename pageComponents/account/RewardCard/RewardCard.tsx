import React from "react";
import Link from "next/link";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import styles from './RewardCard.module.css';

const RewardCard = () => (
    <Card className={styles.root}>
        <Link href="/rewards">
            <div>
                <div className={styles.tile}>
                    <CardMedia
                        className={styles.tileImage}
                        image={'./icons/medal.svg'}
                        title={"Rewards"}
                        sx={{ backgroundSize: '60%' }}
                    />
                    <div className={styles.tileContent}>
                        <CardContent>
                            <Typography component="h5" variant="h5">
                                Reward Program
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Calculate, Check Balance, or Claim Reward.
                            </Typography>
                        </CardContent>          
                    </div>            
                </div>
            </div>
        </Link>
    </Card>      
);

export default RewardCard;