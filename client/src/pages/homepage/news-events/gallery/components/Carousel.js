import Style from '../Jiu-Jitsu/Style.module.scss'

const Carousel = ({ obj, gallery }) => {

    const getImagePath = (imageName, galleryName) => {
        return require(`../../../../../assets/img/${galleryName}/${imageName}`)
    }

    return (
        <div className={Style.images}>
            {
                obj.map(img =>
                    <div className={Style.imageContainer} key={img.id}>
                        <img src={getImagePath(img.image, gallery)} alt="" />
                    </div>)}
        </div>
    )
}

export default Carousel