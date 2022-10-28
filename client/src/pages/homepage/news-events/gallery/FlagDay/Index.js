import { NavLink } from 'react-router-dom'
import { flagDayImg } from "./imageList"
import Style from './Style.module.scss'
import PhotoAlbum from '../components/PhotoAlbum'

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
                    Flag Day
                </h4>
            </div>
            <PhotoAlbum obj={flagDayImg} gallery={'flagday'} />
        </div>
    )
}

export default Index