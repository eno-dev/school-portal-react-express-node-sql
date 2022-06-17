import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../features/auth/authSlice"
import { Link } from "react-router-dom"

const Index = () => {

    const user = useSelector(selectCurrentUser)

    const content = (
        <>
            <div id='welcome'>
                <h2>Hi, {user.first_name} {user.last_name}</h2>
                <h4>Welcome back! Nice to see you again!</h4>
            </div>
            <div className="announcements">
                <h3>Announcements</h3>
            </div>
            <div className="class-title">
                <h4 id='my-classes'>My Classes</h4>
                <p id='see-all'>See All {`>`}</p>
            </div>
            <div className="classes">
                <div className="left-class">
                    Computer Science - Advanced
                </div>
                <div className="middle-class">
                    Computer Science - General
                </div>
                <div className="right-class">
                    Computer Science - General
                </div>
            </div>
        </>
    )
    return (
        content
    )
}

export default Index