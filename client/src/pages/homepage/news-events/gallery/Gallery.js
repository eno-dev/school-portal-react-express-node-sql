import Style from "./Style.module.scss"
import { img } from "./expo2020/expoimages"
import { jiuImg } from "./Jiu-Jitsu/imageList"
import { flagDayImg } from "./FlagDay/imageList"
import AlbumCover from "./components/AlbumCover"

const Gallery = () => {
    return (
        <div className={Style.images}>
            <AlbumCover imagesObj={img} gallery={'expo2020'} heading={'Expo 2020'} link={'expo2020'} />
            <AlbumCover imagesObj={img} gallery={'expo2020'} heading={'National Day'} link={'nationalday'} />
            <AlbumCover imagesObj={flagDayImg} gallery={'flagday'} heading={'Flag Day'} link={'flagday'} />
            <AlbumCover imagesObj={jiuImg} gallery={'jui-jitsu'} heading={'Jui Jitsu'} link={'juijitsu'} />
        </div>
    )
}

export default Gallery