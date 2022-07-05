import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleOn, toggleOff } from '../../../features/sidebar-home-toggle/sidebarHomeSlice'
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';

const Index = () => {
    const dispatch = useDispatch();
    const sidebarToggleState = useSelector((state) => state.sidebarHomeToggle.active)
    const [anchorEl, setAnchorEl] = useState(null);

    function toggleSidebar() {
        if (!sidebarToggleState) {
            dispatch(toggleOn())
        }
        else {
            dispatch(toggleOff())
        }
    }

    return (
        <div id="mySidenav" className={sidebarToggleState ? "sidenav" : "sidenav close"} >
            <div className="closeBtnContainer">
                <CloseIcon className="closebtn" onClick={toggleSidebar} />
            </div>
            <div className="sidebar-links">
                <Link to={'/'} onClick={toggleSidebar}>
                    Home
                </Link>
                <Link to={'/about-us'} onClick={toggleSidebar}>
                    About Us
                </Link>
                <Link to={'/parents-carers'} onClick={toggleSidebar}>
                    Parents/Carers
                </Link>
                <Link to={'/students'} onClick={toggleSidebar}>
                    Students
                </Link>
                <Link to={'/schedule'} onClick={toggleSidebar}>
                    News & Events
                </Link>
                <Link to={'/contact-us'} onClick={toggleSidebar}>
                    Contact Us
                </Link>
            </div>
        </div >
    )
}

export default Index

