import { useParams } from 'react-router-dom'
import { GetLearningMaterials } from './hooks/GetLearningMaterial';
import { GetSubjectHeading } from './hooks/GetSubjectHeading';
import Style from './Style.module.scss'
import MyPdf from './components/MyPdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Index = () => {
    let { grade, subject } = useParams();

    const { data, loading, error } = GetLearningMaterials(grade, subject)
    const { headingData, headingLoading, headingError } = GetSubjectHeading(subject)

    const checkFileExt = (filename) => {
        if (filename === '.pdf') {
            return <PictureAsPdfIcon />
        }
        console.log(filename)
    }
    if (data) {
        console.log(data)
    }

    return (
        <div>
            {headingData &&
                <h1>
                    {headingData.data[0].attributes.Name}
                </h1>
            }
            {
                data && data.data.length === 0 && (
                    <div className={Style.nodata}>
                        <h2>
                            No Data!
                        </h2>
                    </div>
                )}

            {!loading && (
                data.data.map(obj =>
                    <div className={Style.container} key={obj.id}>
                        <div className={Style.text}>
                            <h3>
                                {obj.attributes.Heading}
                            </h3>
                        </div>
                        {/* <iframe src={`${process.env.REACT_APP_URL}${data.data[0].attributes.Material.data[0].attributes.url}`}
                            frameBorder="0"
                            height="100%"
                            width="100%">
                        </iframe> */}
                        <div className={Style.objectContainer}>
                            <object data={`${process.env.REACT_APP_URL}${data.data[0].attributes.Material.data[0].attributes.url}`}
                                type="application/pdf" width="100%" height="100%">
                                <p>Alternative text - include a link <a href={`${process.env.REACT_APP_URL}${data.data[1].attributes.Material.data[0].attributes.url}`} target='_blank' rel="noreferrer">to the PDF!</a></p>
                            </object>

                        </div>
                    </div>

                )
            )}
        </div>
    )
}

export default Index