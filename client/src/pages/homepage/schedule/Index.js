import myPDF from 'client/src/assets/pdf/StudentsT3.pdf#zoom=FitW'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectNavHeight } from '../../../features/navbar-height/navHeightSlice.js'
import ScheduleStyle from './styles.module.scss'

const Index = () => {
    const pdfRef = useRef()
    const navHeight = useSelector(selectNavHeight)

    function focus() {
        const total = pdfRef.current.offsetTop - navHeight
        console.log(total)
        window.scrollTo(0, total);
    }

    return (
        <div className={ScheduleStyle.scheduleBody}>
            <header>
                <h1>
                    Schedule
                </h1>
            </header>

            <div className={ScheduleStyle.pdfViewer}>
                <button onClick={focus}>Focus</button>
                <embed
                    ref={pdfRef}
                    src={myPDF}
                    frameBorder="0"
                    scrolling="auto"
                    height="100%"
                    width="100%"
                ></embed>
            </div>
        </div>
    )
}

export default Index