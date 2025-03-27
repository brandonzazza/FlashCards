import Styles from './Card.module.css';

function Card(){
    return(<div className={Styles.mainContainer}>
        <h1 className={Styles.appTitle}>Flash Card App</h1>
        <div className={Styles.cardContainer}>
            <div className={Styles.rightArrow}>r</div>
            <div className={Styles.card}>
                <p className='card-text'>Test</p>
            </div>
            <div className={Styles.leftArrow}>l</div>
        </div>
    </div>);
}

export default Card;