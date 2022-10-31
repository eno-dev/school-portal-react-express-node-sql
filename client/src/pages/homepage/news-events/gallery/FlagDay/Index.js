import { flagDayImg } from "./imageList"
import PhotoAlbum from '../components/PhotoAlbum'

const Index = () => {
    return (
        <PhotoAlbum obj={flagDayImg} gallery={'flagday'} heading={'Flag Day'} />
    )
}

export default Index