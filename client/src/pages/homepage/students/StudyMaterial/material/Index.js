import { useParams } from 'react-router-dom'
import { GetLearningMaterials } from './hooks/GetLearningMaterial';

const Index = () => {
    let { grade, subject } = useParams();
    const { data, loading, error } = GetLearningMaterials()

    if (data) {
        // console.log(data.data[0].attributes)
        data.data.map(obj => {
            console.log(obj)
        })
    }

    return (
        <div>{grade}{subject}</div>
    )
}

export default Index