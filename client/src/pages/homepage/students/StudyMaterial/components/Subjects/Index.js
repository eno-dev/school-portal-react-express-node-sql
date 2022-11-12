import Style from './Style.module.scss'
import { GetGradesById } from '../../hooks/GetGradesById'
import { Link } from 'react-router-dom'

const Index = ({ gradeById }) => {
    const { data, loading, error } = GetGradesById(gradeById)

    const styleName = name => { return name.split(' ').join('') }

    return (
        <>
            <div className={Style.container}>
                {error && (
                    <p>
                        Error retreiving data
                    </p>
                )}

                {data && !loading && (
                    data.data.attributes.subjects.data.map(obj =>
                        <Link to={`${data.data.attributes.Name}/${styleName(obj.attributes.url)}`} key={obj.id} className={Style.link}>
                            <div className={Style.subjectContainer}>
                                <div className={Style.heading}>
                                    <h4>
                                        {obj.attributes.Name}
                                    </h4>
                                </div>
                                <div className={Style.imgContainer}>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </>
    )
}

export default Index