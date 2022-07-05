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
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setNavHeight } from '../../../features/navbar-height/navHeightSlice.js'
import { toggleOn, toggleOff } from '../../../features/sidebar-home-toggle/sidebarHomeSlice'


const Navbar = () => {
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(0);
    const ref = useRef(null);

    // Navbar height
    useEffect(() => {
        const height = ref.current.clientHeight
        dispatch(setNavHeight({ height }))
    }, []);

    // Page scroll progress
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

    const isLoggedInState = useSelector((state) => state.auth.isLoggedIn)
    const sidebarToggleState = useSelector((state) => state.sidebarHomeToggle.active)

    function toggleSidebar() {
        if (!sidebarToggleState) {
            dispatch(toggleOn())
        }
        else {
            dispatch(toggleOff())
        }
    }

    return (
        <div className="home-navbar" ref={ref}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <span className="menu-icon">
                            <MenuIcon
                                aria-label="menu"
                                onClick={toggleSidebar} />
                        </span>
                        <span className="school-name">
                            <h3>
                                Ali Bin Abi Taleb School
                            </h3>
                        </span>
                        {isLoggedInState ?
                            <span className="login-text">
                                {/* <Button color="inherit"> */}
                                <Link to={'/portal'}>
                                    Portal
                                </Link>
                                {/* </Button> */}
                            </span>
                            : <span className="login-text">
                                {/* <Button color="inherit"> */}
                                <Link to={'/login'}>
                                    Login
                                </Link>
                                {/* </Button> */}
                            </span>}

                    </Toolbar>
                </AppBar>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
        </div>
    )
}

export default Navbar