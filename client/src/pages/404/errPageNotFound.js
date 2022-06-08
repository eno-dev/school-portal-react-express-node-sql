import { Link } from "react-router-dom"
const ErrPageNotFound = () => {
    return (
        <div>
            <h1>
                Page not Found!
            </h1>
            <Link to={'/'}>Back to the homepage</Link>
        </div>
    )
}

export default ErrPageNotFound