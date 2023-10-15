import styles from '../../styles/Door.module.css'
import DoorModel from '../../model/door'
import Gift from '../Gift/Gift'

interface DoorProps {
    value: DoorModel,
    onChange: (newDoor: DoorModel) => void
}


export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.open ? styles.selected : ''

    function mark(e: any) {
        props.onChange(door.mark())
    }


    function isOpen(e) {
        e.stopPropagation()
        props.onChange(door.isOpen())
    }


    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.doorknob}
                    onClick={isOpen}
                ></div>
            </div>
        )
    }

    return (

        <div className={styles.area} onClick={mark}>
            <div className={`${styles.structure} ${selected}`}>
                {door.closed ?
                    renderDoor() : door.haveGift ? <Gift /> : false}
            </div>
            <div className={styles.ground}>
                <div className={styles.ground_i}></div>
            </div>
        </div>
    )

}