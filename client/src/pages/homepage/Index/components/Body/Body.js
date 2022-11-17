import { Outlet } from "react-router-dom"
import BodyStyle from "./BodyStyle.module.scss"
import Breadcrumbs from 'components/breadcrumbs/Index'

const Body = () => {
    return (
        <div className={BodyStyle.homepageBody} >
            <Breadcrumbs />
            <Outlet />
        </div>
    )
}

export default Body