import React from "react";
import Link from 'next/link'

import { Button, Menu, MenuItem } from "@mui/material";

export const DropDownMenu = () => {
   const [element, setElement] = React.useState<HTMLElement | null>(null);

   const handleClick = (event: React.MouseEvent<HTMLElement>) => setElement(event.currentTarget);
   const handleClose = () => setElement(null);
    
    return (
        <>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
                Account
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={element}
                keepMounted
                open={Boolean(element)}
                onClose={handleClose}
            >
                <Link href="/products"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                <Link href="/account"><MenuItem onClick={handleClose}>My Account</MenuItem></Link>      
            </Menu>
        </>
    );
}

export default DropDownMenu;