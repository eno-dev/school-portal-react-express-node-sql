import Style from '../../Jiu-Jitsu/Style.module.scss'
import { GetImageById } from '../../hooks/GetImageById'
import { useParams } from 'react-router-dom'

const PhotoAlbum = () => {
    let { id } = useParams();

    const { data, loading, error } = GetImageById(id)

    return (
        <div className={Style.galleryContent}>
            <div className={Style.galleryTitle}>
                <h3>
                    {!loading && data.data.attributes.Heading}
                </h3>
            </div>
            <div className={Style.images}>
                {!loading &&
                    data.data.attributes.Images.data.map(img =>
                        <div className={Style.imageContainer} key={img.id}>
                            <img src={`${process.env.REACT_APP_URL}${img.attributes.url}`} alt="" />
                        </div>
                    )}
            </div>
        </div>

    )
}

export default PhotoAlbum