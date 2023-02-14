import { Link } from 'react-router-dom';
import Style from './SidebarLinks.module.scss';

const SidebarLinks = ({ toggleSidebar }) => {
  return (
    <div className={Style.links}>
      <Link to={'/'} onClick={toggleSidebar}>
        Home
      </Link>
      <Link to={'/about-us'} onClick={toggleSidebar}>
        About Us
      </Link>
      <Link to={'/parents-carers'} onClick={toggleSidebar}>
        Parents/Carers
      </Link>
      <Link to={'/students'} onClick={toggleSidebar}>
        Students
      </Link>
      <Link to={'/schedule'} onClick={toggleSidebar}>
        News & Events
      </Link>
      <Link to={'/contact-us'} onClick={toggleSidebar}>
        Contact Us
      </Link>
    </div>
  );
};

export default SidebarLinks;
