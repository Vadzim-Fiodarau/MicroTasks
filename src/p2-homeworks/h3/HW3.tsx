import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';
import s from "./Greeting.module.css";

// types
export type UserType = {
  _id: string
  name: string
}

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<UserType[]>([])
  const userID = v1()
  const addUserCallback = (name: string, _id: string) => {
    setUsers([...users, {name, _id}])
  }

  return (
    <div className={s.wrap}>
      <hr/>
      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback} userID={userID}/>
      <hr/>
    </div>
  )
}

export default HW3
