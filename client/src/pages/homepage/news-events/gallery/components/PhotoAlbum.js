import Style from '../Jiu-Jitsu/Style.module.scss'
import { GetFiles } from './hooks/GetFiles'
import GetImagePath from './hooks/GetImagePath'

const PhotoAlbum = ({ gallery, heading }) => {
    const { data, loading, error } = GetFiles(gallery)

    return (
        <div className={Style.galleryContent}>
            <div className={Style.galleryTitle}>
                <h3>
                    {heading}
                </h3>
            </div>
            <div className={Style.images}>
                {!loading &&
                    data.map(img =>
                        <div className={Style.imageContainer} key={img.id}>
                            <img src={GetImagePath(img.image, gallery)} alt="" />
                        </div>)}
            </div>
        </div>

    )
}

export default PhotoAlbum