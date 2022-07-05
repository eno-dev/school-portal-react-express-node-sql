import { Outlet } from "react-router-dom"


const Body = () => {
    return (
        <div className="homepage-body" >
            <Outlet />
        </div>
    )
}

export default Body