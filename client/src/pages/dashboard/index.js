import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../features/auth/authSlice"
import { Link } from "react-router-dom"

const Index = () => {

    const user = useSelector(selectCurrentUser)

    const content = (
        <>
            <div id='welcome'>
                <span className="welcomeName">
                    <h2>Hi, {user.first_name} {user.last_name}</h2>
                </span>
                <span className="welcomeMessage">
                    <h4>Welcome back! Nice to see you again!</h4>
                </span>
            </div>
            <div className="announcements">
                <span className="announcementHeading">
                    <h3>Announcements</h3>
                </span>
            </div>
            <div className="class-title">
                <h4 id='my-classes'>My Classes</h4>
                <p id='see-all'>See All {`>`}</p>
            </div>
            <div className="classes">
                <div className="left-class">
                    <p>
                        Computer Science - Advanced
                    </p>
                </div>
                <div className="middle-class">
                    <p>
                        Computer Science - General
                    </p>
                </div>
                <div className="right-class">
                    <p>
                        Computer Science - General
                    </p>
                </div>
            </div>
        </>
    )
    return (
        content
    )
}

export default Index