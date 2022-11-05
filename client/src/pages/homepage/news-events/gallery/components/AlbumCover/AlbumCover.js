import Style from './Style.module.scss'
import { Link } from 'react-router-dom'
import { GetStrapiImages } from '../../hooks/GetStrapiImages'

const AlbumCover = () => {
    const { data, loading, error } = GetStrapiImages()
    const websiteSrc = `http://localhost:1337`

    return (
        <>
            {!loading &&
                data.data.map(img =>
                    <div className={Style.albumCover} key={img.id}>
                        <div className={Style.albumHeading}>
                            <h3>
                                {img.attributes.Heading}
                            </h3>
                            {console.log(img.attributes.Images.data[0])}
                        </div>
                        <div className={Style.imageContainer}>
                            <div className={Style.image}>
                                <Link to={`${img.id}`}>
                                    <img src={`${websiteSrc}${img.attributes.Images.data[0].attributes.url}`} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default AlbumCover