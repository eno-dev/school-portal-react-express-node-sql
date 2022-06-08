import React from 'react'

const profileBar = () => {
    return (
        <nav className="profile-bar">
            <div className="profile-items">
                <div className="user-circle">
                    <i className='icon bx bxs-user-circle'></i>
                </div>
                <div className="username">
                    <ul>
                        {/* <li><a href="#">{{ user_name }}</a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default profileBar