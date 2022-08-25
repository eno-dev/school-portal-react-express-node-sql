import Style from './HeaderStyle.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    return (
        <header id={Style.headerContainer}>
            <div className={Style.header}>
                <div className={Style.menu}>
                    <ul>
                        <li>
                            <Link to={""}>English<ArrowDropDownIcon /></Link>
                        </li>
                        <li>
                            <Link to={""}>Quick Links</Link>
                        </li>
                    </ul>
                    <SearchIcon />
                </div>
            </div>
        </header>
    )
}

export default Header