import { useMediaQuery } from 'react-responsive'
const MediaQueries = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 810px)'
    })
    const isLargerThanMobile = useMediaQuery({ query: '(min-width: 480px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
}


export default MediaQueries 