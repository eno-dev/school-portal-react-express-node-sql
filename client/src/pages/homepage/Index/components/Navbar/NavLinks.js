import { Link } from 'react-router-dom';

const NavLinks = ({ link, heading }) => {
  return <Link to={link}>{heading}</Link>;
};

export default NavLinks;
