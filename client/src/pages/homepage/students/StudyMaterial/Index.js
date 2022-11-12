import Style from './Style.module.scss'
import Grades from './components/Grades/Index'
import Subjects from './components/Subjects/Index'
import { useEffect, useState } from 'react'

const Index = () => {
    const [grade, setGrade] = useState('')
    const [gradeById, setGradeById] = useState(null)

    return (
        <div className={Style.container}>
            <h1>
                Study Material
            </h1>
            <Grades grade={grade} setGrade={setGrade} gradeById={gradeById} setGradeById={setGradeById} />
            {gradeById !== null &&
                <Subjects gradeById={gradeById} />
            }
        </div>
    )
}

export default Index