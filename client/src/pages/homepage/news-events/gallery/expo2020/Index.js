import { NavLink } from 'react-router-dom'
import { img } from './expoimages'
import Style from './Style.module.scss'
import Carousel from '../components/Carousel'

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
            <Carousel obj={img} gallery={'expo2020'} />
        </div>
    )
}

export default Index