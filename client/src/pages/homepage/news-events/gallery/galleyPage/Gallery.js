import AlbumCover from "../components/AlbumCover"
import Style from './Style.module.scss'

const Gallery = () => {
    return (
        <div className={Style.images}>
            <AlbumCover gallery={'expo2020'} heading={'Expo 2020'} link={'expo2020'} />
            <AlbumCover gallery={'expo2020'} heading={'National Day'} link={'nationalday'} />
            <AlbumCover gallery={'flagday'} heading={'Flag Day'} link={'flagday'} />
            <AlbumCover gallery={'jui-jitsu'} heading={'Jui Jitsu'} link={'juijitsu'} />
        </div>
    )
}

export default Gallery