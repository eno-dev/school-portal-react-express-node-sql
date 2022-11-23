import Style from './Style.module.scss'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Link, useLocation } from 'react-router-dom'

const Index = () => {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation()

    return (
        <div className={Style.container}>
            <nav>
                {breadcrumbs.map(({ match, breadcrumb }) => (
                    <>
                        <Link
                            key={match.pathname}
                            to={match.pathname}
                            className={match.pathname === location.pathname ?
                                `${Style.breadcrumbActive}` : `${Style.breadcrumbNotActive}`
                            }
                        >
                            {match.pathname === location.pathname ?
                                <div className={Style.noBreadExtension}>
                                    {breadcrumb}
                                </div>
                                :
                                <>
                                    <div className={Style.breadExtension}>
                                        {breadcrumb}
                                    </div>
                                </>
                            }
                        </Link>
                        {match.pathname === location.pathname ?
                            <>
                            </>
                            :
                            <div className={Style.seperator}>
                                {`>`}
                            </div>
                        }

                    </>
                ))}
            </nav>
        </div>
    )
}

export default Index