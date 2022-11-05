import Style from '../../Jiu-Jitsu/Style.module.scss'
import { GetImageById } from '../../hooks/GetImageById'
import { useParams } from 'react-router-dom'

const PhotoAlbum = () => {
    let { id } = useParams();

    const { data, loading, error } = GetImageById(id)

    const websiteSrc = `http://localhost:1337`

    return (
        <div className={Style.galleryContent}>
            <div className={Style.galleryTitle}>
                <h3>
                </h3>
            </div>
            <div className={Style.images}>
                {!loading &&
                    data.data.attributes.Images.data.map(img =>
                        <div className={Style.imageContainer} key={img.id}>
                            <img src={`${websiteSrc}${img.attributes.url}`} alt="" />
                        </div>)}
            </div>
        </div>

    )
}

export default PhotoAlbum