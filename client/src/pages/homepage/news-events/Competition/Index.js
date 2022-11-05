import Style from './Style.module.scss'
import EYSC from './img/EYSC.PNG'
import Competition from './components/Competition'

const Index = () => {
    return (
        <div className={Style.container}>
            <div className={Style.heading}>
                <h1>
                    Competition
                </h1>
            </div>
            <Competition img={EYSC} heading={'EYSC'}
                info={'The fifth edition of the Emirates Young Scientist Competition will be held in February 2023 in Dubai. The event is set to attract both students and teachers with its attractive environment that fosters a passion for science, technology, innovation and entrepreneurship. The Emirates Young Scientist Competition brings together leading international experts and institutions in science, technology, innovation, and entrepreneurship. This offers participants the opportunity to learn, share knowledge, discuss ideas and work together to achieve tangible results backed up by scientific research, science and technology, yet instil creativity and innovation throughout the process. Dates: 1st - 5th of February 2023. Location: Dubai Festival Arena Registration Deadline: Monday 5th of December 2022 at midnight'} />

            <Competition img={EYSC} heading={'EYSC'}
                info={'The fifth edition of the Emirates Young Scientist Competition will be held in February 2023 in Dubai. The event is set to attract both students and teachers with its attractive environment that fosters a passion for science, technology, innovation and entrepreneurship. The Emirates Young Scientist Competition brings together leading international experts and institutions in science, technology, innovation, and entrepreneurship. This offers participants the opportunity to learn, share knowledge, discuss ideas and work together to achieve tangible results backed up by scientific research, science and technology, yet instil creativity and innovation throughout the process. Dates: 1st - 5th of February 2023. Location: Dubai Festival Arena Registration Deadline: Monday 5th of December 2022 at midnight'} />
        </div>
    )
}

export default Index