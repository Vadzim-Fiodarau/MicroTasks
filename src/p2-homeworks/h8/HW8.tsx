import React, {useState} from 'react'
import {
  checkPeopleAge,
  homeWorkReducer,
  sortNameDown,
  sortNameUp
} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
  _id: number
  name: string
  age: number
}

const initialPeople: UserType[] = [
  {_id: 0, name: 'Кот', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
  const [people, setPeople] = useState<UserType[]>(initialPeople)


  const finalPeople = people.map((p: UserType) => (
    <div className={s.content} key={p._id}>
      <span className={s.name}>{p.name} </span>
      <span className={s.age}>{p.age} </span>
    </div>
  ))

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortNameUp()))
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortNameDown()))
  const checkAge = () => setPeople(homeWorkReducer(initialPeople, checkPeopleAge()))
  return (
    <div>
      <hr/>
      <div className={s.blockContent}>
        {finalPeople}
      </div>


      <div className={s.btnWrap}>
        <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
        <div><SuperButton onClick={sortDown}>sort up</SuperButton></div>
        <div><SuperButton onClick={checkAge}>check</SuperButton></div>
      </div>
      <hr/>
    </div>
  )
}

export default HW8
