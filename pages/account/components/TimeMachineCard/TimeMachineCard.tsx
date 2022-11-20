import React from "react";

import { Card, CardMedia, CardContent, Typography, TextField } from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { useTimeMachine } from "@hooks";

import styles from './TimeMachineCard.module.css';

const TimeMachineCard = () => {
    const { changeTodaysDate, dateToday } = useTimeMachine();

    return (
        <Card className={styles.root}>
            <div className={styles.tile}>
                <CardMedia
                    className={styles.tileImage}
                    image={'./icons/time-machine.svg'}
                    title={"TimeMachineImage"}
                />
                <div className={styles.tileContent}>
                    <CardContent>
                        <Typography component="h5" variant="h5" className={styles.text}>
                            Time Machine
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Go back in time! Change the order creation date.
                        </Typography>
                        <div className={styles.spacer} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker                                
                                label="Today's Date"
                                value={dayjs(dateToday)}
                                onChange={(date) => changeTodaysDate(date?.format('MM/DD/YYYY'))}
                                renderInput={(params) => <TextField {...params} className={styles.datePicker}/>}
                                />
                        </LocalizationProvider>
                    </CardContent>          
                </div>            
            </div>
        </Card>          
    );
}

export default TimeMachineCard;