import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./navbar.css"
import { Avatar, Hidden } from '@mui/material';
import headingImage from "./../images/jsHeading.jpg"
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='navbarTheme' sx={{ bgcolor: 'secondary.main', color: 'background.paper', height: "60px", marginBottom: "px" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Hidden smDown>
                        <img src={headingImage} alt="" className='img-fluid rounded-5 mb-2' width={35} height={35} />
                        <span className='he'> JivanSathi@.com</span>
                    </Hidden>

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>

                        {/* <Link to="/personal">personal</Link> */}

                        {/* <Link to="/register">Register</Link> */}


                    </Typography>

                    <Hidden smUp>
                        <Link className='nav-link' to="/register" style={{ textDecoration: "none", color: "inherit" }}>
                            <Button color="inherit" sx={{ border: "2px solid silver", marginBottom: "1px", gap: "1px", }}>Register</Button>
                        </Link>
                    </Hidden>

                    <Link className='nav-link' to="/login" >
                        Login
                    </Link>

                    <Link className='nav-link' to="/allusers" style={{ padding: "1%" }}>Allusers</Link>


                </Toolbar>
            </AppBar>
        </Box>
    );
}
