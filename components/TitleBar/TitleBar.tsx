import React from "react";
import Link from 'next/link'

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from './TitleBar.module.css';
import DropDownMenu from "./DropDownMenu";

export const TitleBar = ({ title }: { title: String }) => {
    return (
        <>
            <AppBar position="relative">
                <Toolbar className={styles.toolbar}>          
                    <Typography variant="h6" className={styles.title}>
                        {title}
                    </Typography>                    
                    <div className={styles.dropDownMenu}>
                        <Link href="/cart">
                            <IconButton edge="start" className={styles.menuButton} aria-label="menu">
                                <ShoppingCartIcon className={styles.icon} />
                            </IconButton> 
                        </Link>                                                              
                        <DropDownMenu />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default TitleBar;