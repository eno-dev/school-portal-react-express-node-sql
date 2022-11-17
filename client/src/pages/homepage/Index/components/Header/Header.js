import Style from './HeaderStyle.module.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ClickAwayListener } from '@mui/material';

const Header = () => {
    const [quickLink, setQuickLink] = useState(false)
    const [lang, setLang] = useState(false)

    const openLink = () => {
        // quickLink ?
        //     setQuickLink(false) : setQuickLink(true)
        if (quickLink) {
            setQuickLink(false)
        }
        else if (!quickLink && !lang) {
            setQuickLink(true)
        }
    }

    const openLang = () => {
        // lang ?
        //     setLang(false) : setLang(true)
        if (lang) {
            setLang(false)
        }
        else if (!quickLink && !lang) {
            setLang(true)
        }
    }

    const closeAll = () => {
        setQuickLink(false)
        setLang(false)
    }

    return (
        <header id={Style.headerContainer}>
            <ClickAwayListener onClickAway={closeAll}>
                <div className={Style.header}>
                    <div className={Style.menu}>
                        <div className={Style.menuList}>
                            <div className={Style.listItems}>
                                <Link to={""} className={Style.headerItems} onClick={() => openLang()}>English<ArrowDropDownIcon /></Link>
                                {lang &&
                                    <div className={Style.quickLinks}>
                                        <Link to={''} className={Style.dropdownContent}>Arabic</Link>
                                    </div>
                                }
                            </div>
                            <div className={Style.listItems}>
                                <Link to={""} onClick={() => openLink()} className={Style.headerItems}>Quick Links</Link>
                                {quickLink &&
                                    <div className={Style.quickLinks}>
                                        <Link to={''} className={Style.dropdownContent}>LMS</Link>
                                        <Link to={''} className={Style.dropdownContent}>AlManhal</Link>
                                    </div>
                                }
                            </div>
                        </div>
                        <SearchIcon />
                    </div>
                </div>
            </ClickAwayListener>
        </header >
    )
}

export default Header