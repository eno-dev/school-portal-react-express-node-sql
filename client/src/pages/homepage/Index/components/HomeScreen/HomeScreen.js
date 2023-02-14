import Style from './Style.module.scss';
import Divider from 'components/divider/Index';
import NewsAndEvents from './components/schoolNews/Index';
import WelcomeMessage from './components/welcomeMessage/Index';
import real from './real.jpg';

const HomeScreen = () => {
  return (
    <div className={Style.homeScreen}>
      <div className={Style.mainImage}>
        <img src={real} alt="" />
      </div>
      <div className={Style.mainContent}>
        <WelcomeMessage />
        <Divider />
        <NewsAndEvents />
      </div>
    </div>
  );
};

export default HomeScreen;
