import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setNavHeight } from '../../../../../features/navbar-height/navHeightSlice.js'
import { toggleOn, toggleOff } from '../../../../../features/sidebar-home-toggle/sidebarHomeSlice'
import Style from './NavStyle.module.scss'
import NavLinks from './NavLinks.js';

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

    // // Navbar height
    // useEffect(() => {
    //     const height = ref.current.clientHeight
    //     dispatch(setNavHeight({ height }))
    // }, []);

    // Page scroll progress
    useEffect(() => {
        const computeProgress = () => {
            // The scrollTop gives length of window that has been scrolled
            const scrolled = document.documentElement.scrollTop;
            // scrollHeight gives total length of the window and 
            // The clientHeight gives the length of viewport
            const scrollLength = document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = `${100 * scrolled / scrollLength}`;

            setProgress(parseInt(progress));
        }
        const height = ref.current.clientHeight
        dispatch(setNavHeight({ height }))
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
                        <Link to='/'>
                            <div className={Style.schoolName}>
                                <span className={Style.arbName}>
                                    <h5>
                                        مدرسة علي بن أبي طالب
                                    </h5>
                                </span>
                                <span className={Style.engName}>
                                    <h5>
                                        Ali Bin Abi Taleb School
                                    </h5>
                                </span>
                            </div>
                        </Link>
                        <div className={Style.menu}>
                            <div className={Style.menuLinks}>
                                <div className={Style.aboutUsDropdown}>
                                    <div className={Style.menuHeading}>
                                        About Us
                                    </div>
                                    <div className={Style.dropdownContent}>
                                        <NavLinks link={'about-us'} heading={'About Us'} />
                                        {/* <NavLinks link={'about-us'} heading={'Mission Statement'} />
                                        <NavLinks link={'about-us'} heading={'Principle Message'} />
                                        <NavLinks link={'about-us'} heading={' Meet Our Team'} /> */}
                                    </div>
                                </div>
                                <h1>
                                    |
                                </h1>
                                <div className={Style.aboutUsDropdown}>
                                    <div className={Style.menuHeading}>
                                        News & Events
                                    </div>
                                    {/* <Link to='newsandevents'>
                                        News & Events
                                    </Link> */}
                                    <div className={Style.dropdownContent}>
                                        <Link to='competitions'>
                                            Competitions
                                        </Link>
                                        <Link to='gallery'>
                                            Gallery
                                        </Link>
                                    </div>
                                </div>
                                <h1>
                                    |
                                </h1>
                                <div className={Style.aboutUsDropdown}>
                                    <Link to='students'>
                                        Students Section
                                    </Link>
                                    <div className={Style.dropdownContent}>
                                        <Link to='students'>
                                            Schedule
                                        </Link>
                                    </div>
                                </div>
                                <h1>
                                    |
                                </h1>
                                <div className={Style.aboutUsDropdown}>
                                    <Link to='parents-carers'>
                                        Parents Section
                                    </Link>
                                </div>
                                <h1>
                                    |
                                </h1>
                                {isLoggedInState ?
                                    <Link to={'/portal'}>
                                        Portal
                                    </Link>
                                    :
                                    <Link to={'/login'}>
                                        Login
                                    </Link>}
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                <LinearProgress className={Style.linearProgressRoot} variant="determinate" value={progress} />
            </Box>
        </div >
    )
}

export default Navbar