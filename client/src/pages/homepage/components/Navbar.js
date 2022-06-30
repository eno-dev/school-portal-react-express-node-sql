import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect } from 'react';
import { FormControlUnstyledContext } from '@mui/base';

const Navbar = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let computeProgress = () => {
            // The scrollTop gives length of window that has been scrolled
            const scrolled = document.documentElement.scrollTop;
            // scrollHeight gives total length of the window and 
            // The clientHeight gives the length of viewport
            const scrollLength = document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = `${100 * scrolled / scrollLength}`;

            setProgress(parseInt(progress));
        }

        // Adding event listener on mounting
        window.addEventListener("scroll", computeProgress);

        // Removing event listener upon unmounting
        return () => window.removeEventListener("scroll", computeProgress);
    }, []);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="home-navbar">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <MenuIcon
                            aria-label="menu"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick} />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>News</MenuItem>
                            <MenuItem onClick={handleClose}>Schedule</MenuItem>
                            <MenuItem onClick={handleClose}>Class</MenuItem>
                        </Menu>
                        <Button color="inherit">
                            <span className="login-text">
                                <Link to={'/login'}>
                                    Login
                                </Link>
                            </span>
                        </Button>
                    </Toolbar>
                </AppBar>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
        </div>
    )
}

export default Navbar