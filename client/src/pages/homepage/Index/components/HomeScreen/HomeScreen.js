import Style from './HomeScreen.module.scss'
import SchoolPic from './next-school_new.jpg'
import SchoolPrinciple from './random-principle.png'
import Divider from 'components/divider/Index'
import NewsAndEvents from './components/schoolNews/Index'

const HomeScreen = () => {
    return (
        <div className={Style.homeScreen}>
            <div className={Style.mainImage}>
                <img src={SchoolPic} alt="" />
            </div>
            <div className={Style.mainContent}>
                <section className={Style.welcomeMessage}>
                    <div className={Style.messageBody}>
                        <div className={Style.message}>
                            <header>
                                <h1>
                                    Welcome Message
                                </h1>
                            </header>
                            <p>
                                Welcome to Ali Bin Abi Taleb school! We believe education is the way to enlighten our future in a technological and societal sense. Here, at our school, the greatest minds are cultivated to be role models and the thinkers on society, propelling the country to new heights. Innovation and ideas are embraced, and made into reality by our brilliant students.
                            </p>
                        </div>
                        <img src={SchoolPrinciple} alt="" />
                    </div>
                </section>
                <NewsAndEvents />
                <Divider />
            </div>
        </div >
    )
}

export default HomeScreen