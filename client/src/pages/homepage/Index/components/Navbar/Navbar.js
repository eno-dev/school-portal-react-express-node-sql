import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setNavHeight } from '../../../../../features/navbar-height/navHeightSlice.js'
import { toggleOn, toggleOff } from '../../../../../features/sidebar-home-toggle/sidebarHomeSlice'
import Style from './NavStyle.module.scss'

const Navbar = () => {
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(0);
    const ref = useRef(null);
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

    // Navbar height
    useEffect(() => {
        const height = ref.current.clientHeight
        dispatch(setNavHeight({ height }))
    }, [dispatch]);

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

    return (
        <div className={Style.navbar} ref={ref}>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static">
                    <Toolbar className={Style.toolbar}>
                        <span className={Style.menuIcon}>
                            <MenuIcon
                                aria-label="menu"
                                onClick={toggleSidebar} />
                        </span>
                        <div className={Style.schoolName}>
                            <span className={Style.arbName}>
                                <h3>
                                    مدرسة علي بن أبي طالب
                                </h3>
                            </span>
                            <span className={Style.engName}>
                                <h3>
                                    Ali Bin Abi Taleb School
                                </h3>
                            </span>
                        </div>
                        <span className={Style.loginText}>
                            {isLoggedInState ?
                                <Link to={'/portal'}>
                                    Portal
                                </Link>
                                :
                                <Link to={'/login'}>
                                    Login
                                </Link>}
                        </span>
                    </Toolbar>
                </AppBar>
                <LinearProgress className={Style.linearProgressRoot} variant="determinate" value={progress} />
            </Box>
        </div>
    )
}

export default Navbar