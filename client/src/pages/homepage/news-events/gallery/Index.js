import { img } from './images'
import Style from './Style.module.scss'

const Index = () => {
    return (
        <div className={Style.container}>
            <h1>
                Gallery
            </h1>

            <h2>
                Expo 2020
            </h2>
            <div className={Style.images}>
                {img.map(img =>
                    <div className={Style.imageContainer} key={img.id}>
                        <img src={require(`../../../../assets/img/${img.image}`)} alt="" />
                    </div>)}
            </div>
        </div>
    )
}

export default Index