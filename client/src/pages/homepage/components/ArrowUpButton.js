import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const ArrowUpButton = () => {
    return (
        <span id='arrowUp'>
            <ArrowDropUpIcon onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </span>
    )
}

export default ArrowUpButton