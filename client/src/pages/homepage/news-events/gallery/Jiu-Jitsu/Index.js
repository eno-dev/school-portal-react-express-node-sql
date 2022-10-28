import { jiuImg } from "./imageList"
import Style from './Style.module.scss'
import { useState } from "react"
import PhotoAlbum from "../components/PhotoAlbum"

const Index = () => {
    const [galleryOpen, setGalleryOpen] = useState(false)

    return (
        <div>
            <div className={Style.galleryTitle}>
                <h4>
                    Jiu-Jitsu
                </h4>
            </div>
            <PhotoAlbum obj={jiuImg} gallery={'jui-jitsu'} />
        </div>
    )
}

export default Index