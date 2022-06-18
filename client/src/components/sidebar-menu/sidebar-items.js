import { NavLink } from "react-router-dom";

const SidebarItems = () => {

    return (
        <div className='menu-bar'>
            <div className='menu'>
                {/* <!-- All the menu links --> */}
                <ul className="menu-links">
                    <li className="nav-link">
                        <NavLink to="/">
                            <i className='bx bxs-dashboard icon' title="Dashboard"></i>
                            <span className="text nav-text">Dashboard</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="/database">
                            <i className='bx bx-data icon' title="Database"></i>
                            <span className="text nav-text">Database</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to='/grades'>
                            <i className='bx bx-bar-chart-alt-2 icon' title="Grades"></i>
                            <span className="text nav-text">Grades</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="/search">
                            <i className='bx bx-search icon' title="Search"></i>
                            <span className="text nav-text">Search</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="/notifications">
                            <i className='bx bx-bell icon' title="Notifications"></i>
                            <span className="text nav-text">Notifications</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="/analytics">
                            <i className='bx bx-pie-chart-alt icon' title="Analytics"></i>
                            <span className="text nav-text">Analytics</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="/attendance">
                            <i className='bx bx-heart icon' title="Attendance"></i>
                            <span className="text nav-text">Attendance</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* <Outlet /> */}
        </div >
    )
}

export default SidebarItems