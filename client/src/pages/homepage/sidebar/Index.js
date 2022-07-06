import { useSelector, useDispatch } from 'react-redux'
import { toggleOn, toggleOff } from '../../../features/sidebar-home-toggle/sidebarHomeSlice'
import CloseIcon from '@mui/icons-material/Close';
import SidebarLinks from './components/SidebarLinks';
import Style from './SidebarStyle.module.scss';

const Index = () => {
    const dispatch = useDispatch();
    const sidebarToggleState = useSelector((state) => state.sidebarHomeToggle.active)

    function toggleSidebar() {
        if (!sidebarToggleState) {
            dispatch(toggleOn())
        }
        else {
            dispatch(toggleOff())
        }
    }

    return (
        <div id="mySidenav" className={sidebarToggleState ? Style.open : Style.close} >
            <div className={Style.closeBtnContainer}>
                <CloseIcon className={Style.closebtn} onClick={toggleSidebar} />
            </div>
            <SidebarLinks toggleSidebar={toggleSidebar} />
        </div >
    )
}

export default Index

