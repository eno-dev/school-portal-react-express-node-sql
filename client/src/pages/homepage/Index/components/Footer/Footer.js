import Style from './FooterStyle.module.scss'
import { Link } from "react-router-dom";
import MOELogo from './ministry-of-education-logo.png'
import ESELogo from './ese_logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
    return (
        <footer className={Style.homeFooter}>
            <div className={Style.sections}>
                <div className={Style.connectedSection}>
                    <h5>Our Network</h5>
                    <img src={ESELogo}></img>
                    <img src={MOELogo}></img>
                </div>
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
                    {/* <img src={ESELogo}></img>
                    <img src={MOELogo}></img> */}
                </div>
                <div className={Style.contactSection}>
                    <h5>
                        Our School
                    </h5>
                    <Link to=''>About Us</Link>
                    <Link to=''>Our Mission</Link>
                    <Link to=''>Link</Link>
                </div>
                <div className={Style.contactSection}>
                    <h5>
                        Explore
                    </h5>
                    <Link to=''>School Timetable</Link>
                    <Link to=''>Extra Curricular Activities</Link>
                    <Link to=''>School Calendar</Link>
                </div>
                <div className={Style.contactSection}>
                    <h5>
                        Ali Bin Abi Taleb School
                    </h5>

                    <Link to=''><SchoolIcon />Msaibeekh, Al Ain, United Arab Emirates</Link>
                    <Link to=''><EmailIcon />1399@adec.ac.ae</Link>
                    <Link to=''><PhoneIcon />+97137832988</Link>
                </div>
            </div>
            {/* <p>Eno Saliu - 2022 - Copyright</p> */}
        </footer>
    )
}

export default Footer