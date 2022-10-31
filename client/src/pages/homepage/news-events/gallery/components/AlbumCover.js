import Style from '../Style.module.scss'
import { NavLink } from 'react-router-dom'
import GetImagePath from './hooks/GetImagePath'
import { GetFiles } from './hooks/GetFiles'

const AlbumCover = ({ gallery, heading, link }) => {
    const { data, loading, error } = GetFiles(gallery)
    return (
        <div className={Style.albumCover}>
            <div className={Style.albumHeading}>
                <h3>
                    {heading}
                </h3>
            </div>
            <div className={Style.imageContainer}>
                {!loading &&
                    data.slice(1, 2).map(img =>
                        <div className={Style.image} key={img.id}>
                            <NavLink to={link}>
                                <img src={GetImagePath(img.image, gallery)} alt="" />
                            </NavLink>
                        </div>)}
            </div>
        </div>
    )
}

export default AlbumCover