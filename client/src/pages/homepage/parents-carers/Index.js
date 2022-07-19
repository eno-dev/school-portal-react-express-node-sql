import Style from './style.module.scss'
import Cards from './Cards/Cards'
const Index = () => {
    return (
        <div className={Style.parentsCarersContainer}>
            <h1>
                Parents
            </h1>
            <div className={Style.whatsAppLinks}>
                <h2>
                    Whatsapp Groups
                </h2>
                <Cards />
            </div>
        </div>
    )
}

export default Index