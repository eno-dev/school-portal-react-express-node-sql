import Style from './FooterStyle.module.scss'
import { Link } from "react-router-dom";
import MOELogo from './ministry-of-education-logo.png'
import ESELogo from './ese_logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SchoolIcon from '@mui/icons-material/School';

const Footer = () => {
    return (
        <footer className={Style.homeFooter}>
            <div className={Style.sections}>
                <div className={Style.connectedSection}>
                    <h5>
                        Get Connected
                    </h5>
                    <div className={Style.links}>
                        <Link to=''><InstagramIcon /></Link>
                        <Link to=''><TwitterIcon /></Link>
                        <Link to=''><FacebookIcon /></Link>
                        <Link to=''><YouTubeIcon /></Link>
                    </div>
                    <img src={ESELogo}></img>
                    <img src={MOELogo}></img>
                </div>
                <div className={Style.contactSection}>
                    <h5>
                        Our School
                    </h5>
                    <Link to=''>About Us</Link>
                    <Link to=''>Link</Link>
                    <Link to=''>Link</Link>
                    <Link to=''>Link</Link>
                </div>
                <div className={Style.contactSection}>
                    <h5>
                        Explore
                    </h5>
                    <Link to=''>School Timetable</Link>
                    <Link to=''>Link</Link>
                    <Link to=''>Extra Curricular Activities</Link>
                    <Link to=''>School Calendar</Link>
                </div>
                <div className={Style.contactSection}>
                    <h5>
                        Ali Bin Abi Taleb School
                    </h5>
                    <Link to=''>Msaibeekh, Al Ain, United Arab Emirates</Link>
                    <Link to=''>1399@adec.ac.ae</Link>
                    <Link to=''>+97137832988</Link>
                </div>
            </div>
            {/* <p>Eno Saliu - 2022 - Copyright</p> */}
        </footer>
    )
}

export default Footer