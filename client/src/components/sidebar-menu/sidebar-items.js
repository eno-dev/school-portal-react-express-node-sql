import { NavLink } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

const SidebarItems = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 810px)'
    })
    const isLargerThanMobile = useMediaQuery({ query: '(min-width: 480px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


    return (
        <div className='menu-bar'>
            {isTabletOrMobile &&
                <div className='menu'>
                    {/* <!-- All the menu links --> */}
                    <ul className="menu-links">
                        <li className="nav-link">
                            <NavLink to="/portal">
                                <i className='bx bxs-dashboard icon' title="Dashboard"></i>
                                <span className="text nav-text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/portal/database">
                                <i className='bx bx-data icon' title="Database"></i>
                                <span className="text nav-text">Database</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                            <NavLink to='/portal/grades'>
                                <i className='bx bx-bar-chart-alt-2 icon' title="Grades"></i>
                                <span className="text nav-text">Grades</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                            <NavLink to="/portal/search">
                                <i className='bx bx-search icon' title="Search"></i>
                                <span className="text nav-text">Search</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                            <NavLink to="/portal/notifications">
                                <i className='bx bx-bell icon' title="Notifications"></i>
                                <span className="text nav-text">Notifications</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                            <NavLink to="/portal/analytics">
                                <i className='bx bx-pie-chart-alt icon' title="Analytics"></i>
                                <span className="text nav-text">Analytics</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                            <NavLink to="/portal/attendance">
                                <i className='bx bx-heart icon' title="Attendance"></i>
                                <span className="text nav-text">Attendance</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>}

            {isLargerThanMobile &&
                <div className='menu'>
                    <ul className="menu-links">
                        <li className="nav-link">
                            <NavLink end to="/portal">
                                <i className='bx bxs-dashboard icon' title="Dashboard"></i>
                                <span className="text nav-text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/portal/database">
                                <i className='bx bx-data icon' title="Database"></i>
                                <span className="text nav-text">Database</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                            <NavLink to='/portal/grades'>
                                <i className='bx bx-bar-chart-alt-2 icon' title="Grades"></i>
                                <span className="text nav-text">Grades</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                            <NavLink to="/portal/search">
                                <i className='bx bx-search icon' title="Search"></i>
                                <span className="text nav-text">Search</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                            <NavLink to="/portal/notifications">
                                <i className='bx bx-bell icon' title="Notifications"></i>
                                <span className="text nav-text">Notifications</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                            <NavLink to="/portal/analytics">
                                <i className='bx bx-pie-chart-alt icon' title="Analytics"></i>
                                <span className="text nav-text">Analytics</span>
                            </NavLink>
                        </li>

                        <li className="nav-link">
                            <NavLink to="/portal/attendance">
                                <i className='bx bx-heart icon' title="Attendance"></i>
                                <span className="text nav-text">Attendance</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            }
        </div >
    )
}

export default SidebarItems