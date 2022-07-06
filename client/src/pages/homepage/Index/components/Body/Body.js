import { Outlet } from "react-router-dom"
import BodyStyle from "./BodyStyle.module.scss"

const Body = () => {
    return (
        <div className={BodyStyle.homepageBody} >
            <Outlet />
        </div>
    )
}

export default Body