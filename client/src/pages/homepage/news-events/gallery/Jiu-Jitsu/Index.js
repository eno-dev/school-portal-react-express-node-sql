import { jiuImg } from "./imageList"
import Style from './Style.module.scss'
import { useState } from "react"
import Carousel from "../Carousel"

const Index = () => {
    const [galleryOpen, setGalleryOpen] = useState(false)

    return (
        <div>
            <div className={Style.galleryTitle}>
                <h4>
                    Jiu-Jitsu
                </h4>
            </div>
            <Carousel obj={jiuImg} gallery={'juijitsu'} />
        </div>
    )
}

export default Index