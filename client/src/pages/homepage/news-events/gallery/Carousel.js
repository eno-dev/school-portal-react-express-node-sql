import Style from './Jiu-Jitsu/Style.module.scss'

const Carousel = ({ obj, gallery }) => {

    return (
        <div className={Style.images}>
            {
                obj.slice(0, 20).map(img =>
                    <div className={Style.imageContainer} key={img.id}>
                        {gallery === 'expo2020' &&
                            <img src={require(`../../../../assets/img/expo2020/${img.image}`)} alt="" />
                        }
                        {gallery === 'flagday' &&
                            <img src={require(`../../../../assets/img/flagday/${img.image}`)} alt="" />
                        }
                        {gallery === '' &&
                            <img src={require(`../../../../assets/img/jui-jitsu/${img.image}`)} alt="" />
                        }
                        {gallery === 'juijitsu' &&
                            <img src={require(`../../../../assets/img/jui-jitsu/${img.image}`)} alt="" />
                        }
                    </div>)}
        </div>
    )
}

export default Carousel