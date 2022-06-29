import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../features/auth/authSlice"
import Classes from "./components/Classes"
import Announcements from "./components/Announcements"
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
            <Classes />
            <Announcements />

        </>
    )

    return (
        content
    )
}

export default Index