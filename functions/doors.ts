import DoorModel from "../model/door";

export function createDoors(qtt: number, selecteds: number): DoorModel[] {
    return Array.from({ length: qtt }, (_, i) => {
        const num = i + 1
        const haveGift = num === selecteds
        return new DoorModel(num, haveGift)
    })
}


export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel) {
    return doors.map(actualDoor => {
        const equalTo = actualDoor.number === modifiedDoor.number

        if (equalTo) {
            return modifiedDoor
        } else {
            return modifiedDoor.open ? actualDoor : actualDoor.unMark()
        }
    })
}