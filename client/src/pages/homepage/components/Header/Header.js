import Style from './HeaderStyle.module.scss'

const Header = () => {
    return (
        <header id={Style.headerContainer}>
            <div className={Style.header}>
                {/* <h3>Ali Bin Abi Taleb School</h3> */}
            </div>
        </header>
    )
}

export default Header