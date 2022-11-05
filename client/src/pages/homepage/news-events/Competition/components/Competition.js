import Style from './Style.module.scss'

const Competition = ({ img, heading, info, dates }) => {
    return (
        <div className={Style.content}>
            <div className={Style.heading}>
                <h3>
                    {heading}
                </h3>
            </div>
            <div className={Style.container}>
                <div className={Style.imgContainer}>
                    <a href="https://e.moe.gov.ae/ords/f?p=110:1:&P_LANG=en">
                        <img src={img} alt="" />
                    </a>
                </div>
                <div className={Style.info}>
                    <p>
                        {info}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Competition