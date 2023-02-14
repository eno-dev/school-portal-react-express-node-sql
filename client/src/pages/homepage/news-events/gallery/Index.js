import Style from './Style.module.scss';
import { Outlet } from 'react-router-dom';

const Index = () => {
  return (
    <div className={Style.container}>
      <div className={Style.heading}>
        <h1>Gallery</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Index;
