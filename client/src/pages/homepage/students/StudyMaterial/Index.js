import Style from './Style.module.scss'
import Grades from './components/Grades/Index'
import Subjects from './components/Subjects/Index'
import { useEffect, useState } from 'react'

const Index = () => {
    const [grade, setGrade] = useState('')
    const [gradeById, setGradeById] = useState()

    return (
        <div>
            <h1>
                Study Material
            </h1>
            <Grades grade={grade} setGrade={setGrade} gradeById={gradeById} setGradeById={setGradeById} />
            <Subjects gradeById={gradeById} />
        </div>
    )
}

export default Index