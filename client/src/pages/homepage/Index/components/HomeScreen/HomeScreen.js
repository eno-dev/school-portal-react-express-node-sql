import HomeScreenStyle from './HomeScreen.module.scss'

const HomeScreen = () => {
    return (
        <div className={HomeScreenStyle.homeScreen}>
            <header id={HomeScreenStyle.homeHeader}>
                <h1>
                    Home Screen
                </h1>
            </header>
            <section className={HomeScreenStyle.missionMessage}>
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