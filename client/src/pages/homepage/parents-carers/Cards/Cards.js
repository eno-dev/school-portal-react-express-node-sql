import Style from './CardsStyle.module.scss'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Cards = () => {

    const createCards = () => {
        const classObject = {
            '9A': 'https://chat.whatsapp.com/LXhcsJoXGbsA2AwlIM5QBH', '9B': 'Link', '9C': 'Link', '9D': 'Link', '9E': 'Link', '9F': 'Link',
            '10A': 'Link', '10B': 'Link', '10C': 'Link', '10D': 'Link', '10E': 'Link', '10F': 'Link',
            '11A': 'Link', '11B': 'Link', '11C': 'Link', '11D': 'Link', '11E': 'Link', '11F': 'Link',
            '12A': 'Link', '12B': 'Link', '12C': 'Link', '12D': 'Link', '12E': 'Link', '12F': 'Link',
        }

        // Create array
        const result = Object.keys(classObject).map(key => {
            return { grade: key, link: classObject[key] }
        })

        // Adding id to each row
        result.map((o, i) => Object.assign(o, { id: i + 1 }))


        return result.map(({ grade, link, id }) => (
            <a href={link} key={id}>
                <button className={Style.cardLink} key={id}>
                    <div className="grade">
                        {grade}
                    </div>
                    <WhatsAppIcon />
                </button >
            </a>
        ))
    }

    return (
        <div className={Style.cards}>
            <div className={Style.cardsContainer}>
                {/* {users} */}
                {createCards()}
            </div>
        </div>
    )
}

export default Cards