import Style from './FooterStyle.module.scss';
import { Link } from 'react-router-dom';
import MOELogo from './ministry-of-education-logo.png';
import ESELogo from './ese_logo.png';
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
        <div className={Style.network}>
          <h5>Our Network</h5>
          <img src={ESELogo}></img>
          <img src={MOELogo}></img>
        </div>
        <div className={Style.connected}>
          <h5>Get Connected</h5>
          <div className={Style.links}>
            <a href="" className={Style.instaIcon}>
              <InstagramIcon />
            </a>
            <a href="" className={Style.twitterIcon}>
              <TwitterIcon />
            </a>
            <a href="" className={Style.facebookIcon}>
              <FacebookIcon />
            </a>
            <a href="" className={Style.youtubeIcon}>
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <div className={Style.ourSchool}>
          <h5>Our School</h5>
          <Link to="">About Us</Link>
          <Link to="">Our Mission</Link>
          <Link to="">Activities</Link>
        </div>
        <div className={Style.explore}>
          <h5>Explore</h5>
          <Link to="">School Timetable</Link>
          <Link to="">Extra Curricular Activities</Link>
          <Link to="">School Calendar</Link>
        </div>
        <div className={Style.contact}>
          <h5>Ali Bin Abi Taleb School</h5>

          <a href="https://goo.gl/maps/73woDJLV3vJc8yLj6">
            <SchoolIcon />
            Al Foah, Al Ain, United Arab Emirates
          </a>
          <a href="mailto: 1399@adec.ac.ae">
            <EmailIcon />
            1399@adec.ac.ae
          </a>
          <a href="tel:+97137832988">
            <PhoneIcon />
            +97137832988
          </a>
        </div>
      </div>
      {/* <p>Eno Saliu - 2022 - Copyright</p> */}
    </footer>
  );
};

export default Footer;
