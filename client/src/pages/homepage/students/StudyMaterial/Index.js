import Style from './Style.module.scss'
import Grades from './components/Grades/Index'
import Subjects from './components/Subjects/Index'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectNavHeight } from 'features/navbar-height/navHeightSlice.js'

const Index = () => {
    const [grade, setGrade] = useState('')
    const [gradeById, setGradeById] = useState(null)

    const subRef = useRef()
    const navHeight = useSelector(selectNavHeight)

    function focus() {
        const total = subRef.current.offsetTop - navHeight
        window.scrollTo(0, total);
    }

    useEffect(() => {
        if (gradeById !== null) {
            focus()
        }
    }, [gradeById])

    return (
        <div className={Style.container}>
            <div className={Style.headerGrades}>
                <div className={Style.header}>
                    <h1>
                        Study Material
                    </h1>
                </div>
                <div className={Style.grades}>
                    <Grades grade={grade} setGrade={setGrade} gradeById={gradeById} setGradeById={setGradeById} />
                </div>
            </div>
            <div className={Style.gradeSubjectContainer} ref={subRef}>
                {gradeById !== null &&
                    <Subjects gradeById={gradeById} />
                }
                {/* <button onClick={focus}>Focus</button> */}
            </div>
        </div>
    )
}

export default Index