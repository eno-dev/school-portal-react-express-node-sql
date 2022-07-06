import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowStyle from './ArrowStyle.module.scss'

const ArrowUpButton = () => {
    return (
        <span id={ArrowStyle.arrowUp}>
            <KeyboardArrowDownIcon onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </span>
    )
}

export default ArrowUpButton