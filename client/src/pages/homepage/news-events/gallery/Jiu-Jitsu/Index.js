import { jiuImg } from "./imageList"
import { useState } from "react"
import PhotoAlbum from "../components/PhotoAlbum"

const Index = () => {
    const [galleryOpen, setGalleryOpen] = useState(false)

    return (
        <div>
            <PhotoAlbum obj={jiuImg} gallery={'jui-jitsu'} heading={'Jiu Jitsu'} />
        </div>
    )
}

export default Index