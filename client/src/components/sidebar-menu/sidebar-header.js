import React from 'react'
import Toggle from './toggle'
import Logo from '../../assets/img/s-comm_logo.ico'
import ProfileBar from '../secondary-content/profile-bar'

const SidebarHeader = () => {
    return (
        <header className="sidebar-header">
            <ProfileBar />
            {/* <!-- Logo --> */}
            <div className="image-text">
                <span className="image">
                    <img src={Logo} alt="logo"></img>
                </span>
                {/* <!-- Text under logo --> */}
                <div className="text header-text">
                    <span className="schoolname">Ali Bin Abi Taleb School</span>
                </div>
                {/* <!-- Toggle --> */}
                <Toggle />
            </div>
        </header>
    )
}

export default SidebarHeader