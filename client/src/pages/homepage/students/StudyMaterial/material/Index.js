import { Style } from '@mui/icons-material';
import { useParams } from 'react-router-dom'
import { GetLearningMaterials } from './hooks/GetLearningMaterial';

const Index = () => {
    let { grade, subject } = useParams();

    const { data, loading, error } = GetLearningMaterials(grade, subject)

    return (
        <div>
            {
                data && data.data.length === 0 && (
                    <div className={Style.nodata}>
                        <h1>
                            No Data!
                        </h1>
                    </div>
                )}

            {!loading && (
                data.data.map(obj =>
                    <div className={Style.text} key={obj.id}>
                        <h1>
                            {obj.attributes.Heading}
                        </h1>
                    </div>
                )
            )}
        </div>
    )
}

export default Index