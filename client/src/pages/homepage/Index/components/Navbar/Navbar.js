import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setNavHeight } from 'features/navbar-height/navHeightSlice.js'
import { toggleOn, toggleOff } from 'features/sidebar-home-toggle/sidebarHomeSlice'
import Style from './NavStyle.module.scss'
import NavLinks from './NavLinks.js';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
    const [sidebar, setSidebar] = useState(false)
    const [accordian, setAccordian] = useState(false)

    const sidebarToggle = () => {
        sidebar ? setSidebar(false) : setSidebar(true)
    }

    const data = [
        { id: 1, menuHeading: 'About Us', links: [{ id: 1, heading: 'About Us', link: 'about-us' }] },
        {
            id: 2, menuHeading: 'News & Events', links: [{ id: 1, heading: 'Competitions', link: 'competitions' },
            { id: 2, heading: 'Gallery', link: 'gallery' }]
        },
        {
            id: 3, menuHeading: 'Students Section', links: [{ id: 1, heading: 'Schedule', link: 'students/schedule' }, {
                id: 2, heading: 'Study Material', link: 'students/study-material'
            }]
        },
        {
            id: 4, menuHeading: 'Parents', links: []
        },
    ]

    const accordianToggle = () => {
        sidebar ? setAccordian(false) : setAccordian(true)
    }

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
                                {data &&
                                    data.map(obj =>
                                        <div className={Style.dropdownContainer} key={obj.id}>
                                            <div className={Style.menuHeading}>
                                                {obj.menuHeading}
                                            </div>
                                            <div className={Style.dropdownContent}>
                                                {obj.links.map(obj =>
                                                    <Link to={obj.link} key={obj.id}>
                                                        {obj.heading}
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    )}
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
                        <div className={Style.menuIcon}>
                            <MenuIcon onClick={sidebarToggle} />
                        </div>
                    </Toolbar>
                </AppBar>
                <LinearProgress className={Style.linearProgressRoot} variant="determinate" value={progress} />
                {sidebar &&
                    <div className={Style.overlay}>
                        {/* <div className={Style.overlayIcon}>
                            <CloseIcon onClick={() => {
                                setSidebar(false)
                            }} />
                        </div> */}
                        <div className={Style.menu}>
                            <div className={Style.menuLinks}>
                                <div className={Style.dropdownContainer}>
                                    <div className={Style.menuHeading}>
                                        About Us
                                    </div>
                                    <div className={Style.dropdownContent}>
                                        <NavLinks link={'about-us'} heading={'About Us'} />
                                    </div>
                                </div>
                                <div className={Style.dropdownContainer}>
                                    <div className={Style.menuHeading}>
                                        News & Events
                                    </div>
                                    <div className={Style.dropdownContent}>
                                        <Link to='competitions'>
                                            Competitions
                                        </Link>
                                        <Link to='gallery'>
                                            Gallery
                                        </Link>
                                    </div>
                                </div>
                                <div className={Style.dropdownContainer}>
                                    <div className={Style.menuHeading}>
                                        <Link to='students'>
                                            Students Section
                                        </Link>
                                    </div>
                                    <div className={Style.dropdownContent}>
                                        <Link to='students/schedule'>
                                            Schedule
                                        </Link>
                                        <Link to='students/study-material'>
                                            Study Material
                                        </Link>
                                    </div>
                                </div>
                                <div className={Style.dropdownContainer}>
                                    <div className={Style.menuHeading}>
                                        <Link to='parents-carers'>
                                            Parents Section
                                        </Link>
                                    </div>
                                </div>
                                {isLoggedInState ?
                                    <div className={Style.menuHeading}>
                                        <div className={Style.menuItem}>
                                            <Link to={'/portal'}>
                                                Portal
                                            </Link>
                                        </div>
                                    </div>
                                    :
                                    <div className={Style.menuHeading}>
                                        <div className={Style.menuItem}>
                                            <Link to={'/login'}>
                                                Login
                                            </Link>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }
            </Box>
        </div >
    )
}

export default Navbar