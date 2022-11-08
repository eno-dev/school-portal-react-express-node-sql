import Style from './Style.module.scss'
import SchoolNewsPictures from '../../school-news.jpg'
import Gardening from '../../gardening.jpg'
import { GetNewsStories } from '../../hooks/GetNewsStories'

const Index = () => {

    const { data, loading, error } = GetNewsStories()

    return (
        <div className={Style.schoolNews}>
            <h2>
                Latest News & Events
            </h2>
            <div className={Style.news}>
                {!loading &&
                    data.data.map(obj =>
                        <div className={Style.newsContainer}>
                            <div className={Style.image}>
                                <img src={`${process.env.REACT_APP_URL}${obj.attributes.Picture.data.attributes.url}`} alt="" />
                            </div>
                            <div className={Style.text}>
                                <h5>
                                    {obj.attributes.Heading}
                                </h5>
                                <p>
                                    {obj.attributes.Description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Index