import React from "react";

import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import styles from './RewardCardPickDate.module.css';
import moment from "moment";

export const RewardCardPickDate = ({ rewardTotal, startDate, onReviewClick, handleDateChange }: { rewardTotal: number; startDate: Date, onReviewClick: any; handleDateChange: any }) => (
    <Card className={styles.root}>
        <CardMedia
            className={styles.media}
            image={'./icons/surprise.svg'}
            title="SurpriseImage"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Reward Balance (Monthly)
            </Typography>
            <Typography gutterBottom variant="h3" component="h3" className={styles.total}>           
                {rewardTotal}
            </Typography>
            <div className={styles.spacer}/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker                                
                    label="Start Date"
                    value={dayjs(startDate)}
                    className={styles.datePicker}  
                    onChange={(date) => handleDateChange(date?.format('MM/DD/YYYY'))}
                    renderInput={(params) => <TextField {...params} className={styles.datePicker}/>}
                />
                <div className={styles.spacer}/>
                <DesktopDatePicker                                
                    label="End Date"
                    value={dayjs(moment(startDate, "MM/DD/YYYY").add(3, 'M').toDate())}
                    className={styles.datePicker}  
                    onChange={(date) => handleDateChange(date?.format('MM/DD/YYYY'))}
                    renderInput={(params) => <TextField {...params} className={styles.datePicker}/>}
                    readOnly={true}
                />
            </LocalizationProvider>
        </CardContent>
        <CardActions className={styles.cardAction}> 
            <Button size="small" color="primary" onClick={onReviewClick} className={styles.button}>
            Review
            </Button> 
        </CardActions>
    </Card>
);


export default RewardCardPickDate;