import React from "react";

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import styles from './RewardCard.module.css';

export const RewardCardPickDate = ({ rewardTotal, onReviewClick }: { rewardTotal: number; onReviewClick: any; }) => (      
  <Card className={styles.root}>
    <div>
      <CardMedia
      className={styles.media}
      image={'./icons/surprise.svg'}
      title="SurpriseImage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Reward Balance (Total)
        </Typography>
        <Typography gutterBottom variant="h3" component="h3" className={styles.total}>            
          {rewardTotal}
        </Typography>
      </CardContent>
    </div>
    <CardActions className={styles.cardAction}> 
      <Button size="small" color="primary" onClick={onReviewClick} className={styles.button}>
        Review
      </Button>  
    </CardActions>
  </Card>    
);

export default RewardCardPickDate;