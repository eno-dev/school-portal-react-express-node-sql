import Style from './Style.module.scss'
import { GetCompContent } from './hooks/GetCompContent'
import ReactMarkdown from 'react-markdown'
import Divider from 'components/divider/Index'

const Index = () => {
    const { data, loading, error } = GetCompContent()

    return (
        <div className={Style.container}>

            <div className={Style.pageHeading}>
                <h1>Competitons</h1>
            </div>
            {!loading &&
                data.data.map(obj =>
                    <div className={Style.contentContainer} key={obj.id}>
                        <div className={Style.heading}>
                            <h3>
                                {obj.attributes.Heading}
                            </h3>
                        </div>
                        <div className={Style.mainContent}>
                            <div className={Style.imgContainer}>
                                <img src={`${process.env.REACT_APP_URL}${obj.attributes.Picture.data[0].attributes.url}`} alt="" />
                            </div>
                            <div className={Style.description}>
                                <ReactMarkdown>
                                    {obj.attributes.Description}
                                </ReactMarkdown>
                                <a href={obj.attributes.Link} target="_blank" rel="noreferrer">Read More</a>
                            </div>
                        </div>
                    </div>

                )
            }
        </div >
    )
}

export default Index