import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './styles.scss'
const ArrowUpButton = () => {
    return (
        <span id='arrowUp'>
            <KeyboardArrowDownIcon onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </span>
    )
}

export default ArrowUpButton