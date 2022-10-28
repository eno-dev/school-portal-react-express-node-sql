import Style from '../Style.module.scss'
import { NavLink } from 'react-router-dom'

const AlbumCover = ({ imagesObj, gallery, heading, link }) => {

    const getImagePath = (imageName, galleryName) => {
        return require(`assets/img/${galleryName}/${imageName}`)
    }

    return (
        <div className={Style.albumCover}>
            <div className={Style.albumHeading}>
                <h3>
                    {heading}
                </h3>
            </div>
            <div className={Style.imageContainer}>
                {
                    imagesObj.slice(0, 1).map(img =>
                        <div className={Style.image} key={img.id}>
                            <NavLink to={link}>
                                <img src={getImagePath(img.image, gallery)} alt="" />
                            </NavLink>
                        </div>)}
            </div>
        </div>
    )
}

export default AlbumCover