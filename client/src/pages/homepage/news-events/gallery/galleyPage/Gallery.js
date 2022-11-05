import AlbumCover from "../components/AlbumCover/AlbumCover"
import Style from './Style.module.scss'

const Gallery = () => {
    return (
        <div className={Style.images}>
            <AlbumCover />
        </div>
    )
}

export default Gallery