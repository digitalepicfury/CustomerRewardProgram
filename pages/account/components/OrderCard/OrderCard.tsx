import React from "react";
import Link from "next/link";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import styles from './OrderCard.module.css';

const OrderCard = () => (
    <Card className={styles.root}>
        <Link href="/orders">
            <div>
                <div className={styles.tile}>
                    <CardMedia
                        className={styles.tileImage}
                        image={'./icons/carton.svg'}
                        title={"Orders"}
                    />
                    <div className={styles.tileContent}>
                        <CardContent>
                            <Typography component="h5" variant="h5">
                                Orders
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Track, return, or buy things again.
                            </Typography>
                        </CardContent>          
                    </div>            
                </div>
            </div>
        </Link>
    </Card>      
);

export default OrderCard;