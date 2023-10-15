import { useEffect, useState } from "react";
import Door from "../../../components/Door/Door";
import { createDoors, updateDoors } from "../../../functions/doors";

import styles from '../../../styles/Game.module.css'
import Link from "next/link";

import { useRouter } from 'next/router'

export default function Game() {
  const router = useRouter()
  const [doors, setDoors] = useState([])
  const [gift, setGift] = useState(0)
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)


  router.query.doors
  router.query.params




  useEffect(() => {

    let minx = Math.ceil(min)
    let maxx = Math.ceil(max)
    let res = Math.floor(Math.random() * (maxx - minx + 1)) + minx

    setGift(res)
    const doors = +router.query.doors

    setDoors(createDoors(doors, gift))

  }, [router?.query])


  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} value={door} onChange={
        newDoor => setDoors(updateDoors(doors, newDoor))
      } />
    })
  }
  return (

    <div id={styles.game}>
      <div className={styles.doors}>
        {renderDoors()}
      </div>
      <div className={styles.buttons}>

        <Link href={'/'}>
          <button>Back</button>
        </Link>


      </div>
    </div>
  )
}