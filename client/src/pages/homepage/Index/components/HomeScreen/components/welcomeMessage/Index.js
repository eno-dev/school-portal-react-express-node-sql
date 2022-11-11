import SchoolPrinciple from '../../random-principle.png'
import Style from './Style.module.scss'

const Index = () => {
    return (
        <section className={Style.welcomeMessage}>
            <div className={Style.messageBody}>
                <div className={Style.message}>
                    <header>
                        <h2>
                            Welcome Message
                        </h2>
                    </header>
                    <p>
                        Welcome to Ali Bin Abi Taleb school! We believe education is the way to enlighten our future in a technological and societal sense. Here, at our school, the greatest minds are cultivated to be role models and the thinkers of society, propelling the country to new heights. Innovation and ideas are embraced, and made into reality by our brilliant students.
                    </p>
                </div>
                <img src={SchoolPrinciple} alt="" />
            </div>
        </section>
    )
}

export default Index