import ProfileBar from './profile-bar'
import { useSelector } from 'react-redux'

const Index = () => {

    const selectedUser = useSelector((state) => state.sidebar.user)

    return (
        <aside>
            <ProfileBar />
            <div className="profile">
                <span className="user-id">ERP 36273</span>
                <div className="profile-picture">
                    <i className='bx bxs-user-circle type' type="button"></i>
                </div>
                <span className="user-name d-flex justify-content-center">{selectedUser.first_name}</span>
                <div className="profile-info">
                    <h5>About</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque id beatae exercitationem,
                    </p>
                    <div className="about">
                        <div className="left-info">
                            <span className="age">
                                <h6>Age</h6>
                                <p>17</p>
                            </span>
                            <span className="grade">
                                <h6>Grade</h6>
                                <p>10A</p>
                            </span>
                        </div>
                        <div className="right-info">
                            <span className="address">
                                <h6>Address</h6>
                                <p>Al Ain</p>
                            </span>
                            <span className="phone">
                                <h6>Phone</h6>
                                <p>{selectedUser.phone}</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Index