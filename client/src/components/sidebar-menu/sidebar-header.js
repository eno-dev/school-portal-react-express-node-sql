import Toggle from './toggle'
import Logo from '../../assets/img/s-comm_logo.ico'
import ProfileBar from '../secondary-content/profile-bar'
import { useMediaQuery } from 'react-responsive'
import MediaQueries from '../media-query/MediaQueries'

const SidebarHeader = () => {
    const isLargerThanMobile = useMediaQuery({ query: '(min-width: 480px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (

        <header className="sidebar-header">
            {isTabletOrMobile &&
                <>
                    <Toggle />
                    <div className="image-text">
                        {/* <!-- Text under logo --> */}
                        <div className="website-name">
                            <span className="webname">School Portal</span>
                        </div>
                    </div>
                    <ProfileBar />
                </>
            }
            {isLargerThanMobile &&
                <>
                    <ProfileBar />

                    <div className="image-text">
                        <span className="image">
                            <img src={Logo} alt="logo"></img>
                        </span>
                        {/* <!-- Text under logo --> */}
                        <div className="text header-text">
                            <span className="schoolname">Ali Bin Abi Taleb School</span>
                        </div>
                        <Toggle />
                    </div>
                </>
            }
        </header>
    )
}

export default SidebarHeader