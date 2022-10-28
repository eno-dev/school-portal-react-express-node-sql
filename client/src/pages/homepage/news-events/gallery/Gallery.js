import Style from "./Style.module.scss"
import { img } from "./expo2020/expoimages"
import { jiuImg } from "./Jiu-Jitsu/imageList"
import { flagDayImg } from "./FlagDay/imageList"
import GalleryCover from "./components/GalleryCover"

const Gallery = () => {
    return (
        <div className={Style.images}>
            <GalleryCover imagesObj={img} gallery={'expo2020'} heading={'Expo 2020'} link={'expo2020'} />
            <GalleryCover imagesObj={img} gallery={'expo2020'} heading={'National Day'} link={'nationalday'} />
            <GalleryCover imagesObj={flagDayImg} gallery={'flagday'} heading={'Flag Day'} link={'flagday'} />
            <GalleryCover imagesObj={jiuImg} gallery={'jui-jitsu'} heading={'Jui Jitsu'} link={'juijitsu'} />
        </div>
    )
}

export default Gallery