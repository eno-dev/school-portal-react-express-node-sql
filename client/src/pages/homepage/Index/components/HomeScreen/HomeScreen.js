import Style from './HomeScreen.module.scss'
import SchoolPic from './next-school_new.jpg'
import SchoolPrinciple from './random-principle.png'
import SchoolNewsPictures from './school-news.jpg'

const HomeScreen = () => {
    return (
        <div className={Style.homeScreen}>
            <div className={Style.mainImage}>
                <img src={SchoolPic} alt="" />
                {/* <h1>
                    TEXT
                </h1> */}
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos omnis minima nemo praesentium illo, placeat minus voluptate? Facilis cumque nobis quibusdam iste repudiandae unde qui aut excepturi accusamus expedita.
                                Ipsa culpa ab corrupti. Eos nam quod exercitationem atque quas rerum molestiae, dolores obcaecati quisquam tempore magni non assumenda hic quia provident, mollitia quae numquam quidem quaerat enim consectetur animi!
                            </p>
                        </div>
                        <img src={SchoolPrinciple} alt="" />
                    </div>
                </section>
                <div className={Style.schoolNews}>
                    <h2>
                        Latest News & Events
                    </h2>
                    <div className={Style.news}>
                        <div className={Style.newsContainer}>
                            <div className={Style.image}>
                                <img src={SchoolNewsPictures} alt="" />
                            </div>
                            <div className={Style.text}>
                                <h5>
                                    Student Success
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nostrum blanditiis, nisi
                                </p>
                            </div>
                        </div>
                        <div className={Style.newsContainer}>
                            <div className={Style.image}>
                                <img src={SchoolNewsPictures} alt="" />
                            </div>
                            <div className={Style.text}>
                                <h5>
                                    Radio Station
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nostrum blanditiis, nisi
                                </p>
                            </div>
                        </div>
                        <div className={Style.newsContainer}>
                            <div className={Style.image}>
                                <img src={SchoolNewsPictures} alt="" />
                            </div>
                            <div className={Style.text}>
                                <h5>
                                    School Trip
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nostrum blanditiis, nisi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeScreen