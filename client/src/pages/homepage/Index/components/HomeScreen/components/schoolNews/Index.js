import Style from './Style.module.scss'
import { GetData } from 'hooks/GetData'

const Index = () => {
    const { data, loading, error } = GetData('news-stories')

    return (
        <div className={Style.schoolNews}>
            <h2>
                Latest News & Events
            </h2>
            <div className={Style.news}>
                {!loading &&
                    data.data.map(obj =>
                        <div className={Style.newsContainer} key={obj.id}>
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