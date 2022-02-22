import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";

type AffairsPropsType = {
  data: AffairType[]
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {

  const mappedAffairs = props.data.map((a: AffairType) => {
    const deleteAffairCallback = () => {
      props.deleteAffairCallback(a._id)
    }
    return (
      <Affair
        key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
        affair={a}
        deleteAffairCallback={deleteAffairCallback}
      />

    )
  })

  const setAll = () => {
    props.setFilter('all')
  }
  const setHigh = () => {
    props.setFilter('high')
  }
  const setMiddle = () => {
    props.setFilter('low')
  }
  const setLow = () => {
    props.setFilter('middle')
  }

  return (
    <div className={s.wrapAffair}>

      {mappedAffairs}

        <button className={s.buttonFilter} onClick={setAll}>All</button>
        <button className={s.buttonFilter} onClick={setHigh}>High</button>
        <button className={s.buttonFilter} onClick={setMiddle}>Middle</button>
        <button className={s.buttonFilter} onClick={setLow}>Low</button>

    </div>
  )
}

export default Affairs
