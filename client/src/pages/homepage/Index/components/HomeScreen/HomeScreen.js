import Style from './HomeScreen.module.scss'
import SchoolPic from './next-school_new.jpg'

const HomeScreen = () => {
    return (
        <div className={Style.homeScreen}>
            <div className={Style.mainImage}>
                <img src={SchoolPic} alt="" />
                <h1>
                    TEXT
                </h1>
            </div>
            <header id={Style.homeHeader}>
                <h1>
                    Home Screen
                </h1>
            </header>
            <section className={Style.missionMessage}>
                <h2>
                    Mission
                </h2>
                <p>
                    To build a generation with Islamic values and national pride whilst preserving their Arabic culture; equipped with the knowledge and skills to meet the challenges of the 21st Century
                </p>
            </section>
        </div>
    )
}

export default HomeScreen