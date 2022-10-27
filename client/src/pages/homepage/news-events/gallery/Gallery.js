import { Link, NavLink } from "react-router-dom"
import Style from "./Style.module.scss"
import { img } from "./expo2020/expoimages"
import { jiuImg } from "./Jiu-Jitsu/imageList"
import { flagDayImg } from "./FlagDay/imageList"

const Gallery = () => {
    return (
        <>
            <div className={Style.images}>
                <div className={Style.albumCover}>
                    <div className={Style.albumHeading}>
                        <h3>
                            Expo 2020
                        </h3>
                    </div>
                    {img.slice(0, 1).map(img =>
                        <div className={Style.imageContainer} key={img.id}>
                            <NavLink to='expo2020'>
                                <img src={require(`../../../../assets/img/expo2020/${img.image}`)} alt="" />
                            </NavLink>
                        </div>)
                    }
                </div>
                <div className={Style.albumCover}>
                    <div className={Style.albumHeading}>
                        <h3>
                            National Day
                        </h3>
                    </div>
                    {img.slice(1, 2).map(img =>
                        <div className={Style.imageContainer} key={img.id}>
                            <NavLink to='expo2020'>
                                <img src={require(`../../../../assets/img/expo2020/${img.image}`)} alt="" />
                            </NavLink>
                        </div>)}
                </div>
                <div className={Style.albumCover}>
                    <div className={Style.albumHeading}>
                        <h3>
                            Flag Day
                        </h3>
                    </div>
                    {flagDayImg.slice(1, 2).map(img =>
                        <div className={Style.imageContainer} key={img.id}>
                            <NavLink to='flagday'>
                                <img src={require(`../../../../assets/img/flagday/${img.image}`)} alt="" />
                            </NavLink>
                        </div>)}
                </div>
                <div className={Style.albumCover}>
                    <div className={Style.albumHeading}>
                        <h3>
                            Jiu-Jitsu
                        </h3>
                    </div>
                    {jiuImg.slice(1, 2).map(img =>
                        <div className={Style.imageContainer} key={img.id}>
                            <NavLink to='juijitsu'>
                                <img src={require(`../../../../assets/img/jui-jitsu/${img.image}`)} alt="" />
                            </NavLink>
                        </div>)}
                </div>
            </div>
        </>
    )
}

export default Gallery