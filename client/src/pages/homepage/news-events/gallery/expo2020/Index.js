import { NavLink } from 'react-router-dom'
import { img } from './expoimages'
import Style from './Style.module.scss'
const Index = () => {
    return (
        <div>
            <div className={Style.breadcrumbs}>
                <ul>
                    <li>
                        <NavLink to='/gallery'>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to=''>Expo 2020</NavLink>
                    </li>
                </ul>
            </div>
            <div className={Style.galleryTitle}>
                <h4>
                    Expo 2020
                </h4>
            </div>
            <div className={Style.images}>
                {img.slice(0, 20).map(img =>
                    <div className={Style.imageContainer} key={img.id}>
                        <img src={require(`../../../../../assets/img/expo2020/${img.image}`)} alt="" />
                    </div>)}
            </div>
        </div>
    )
}

export default Index