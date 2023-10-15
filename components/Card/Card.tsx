import styles from '../../styles/Card.module.css'

export default function Card(props){

    return(
        <div className={styles.card}
        style={{
            backgroundColor: props.bgColor ?? '#fff'
        }}
        >
           CARD
        </div>
    )
}