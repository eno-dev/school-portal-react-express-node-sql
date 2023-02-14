import SidebarHeader from './sidebar-header';
import SidebarItems from './sidebar-items';
import { useSelector } from 'react-redux';

const SidebarMenu = () => {
  const toggleState = useSelector(state => state.toggle.active);

  return (
    <>
      <nav className={toggleState ? 'sidebar close' : 'sidebar'}>
        <SidebarHeader />
        <SidebarItems />
      </nav>
    </>
  );
};

export default SidebarMenu;
