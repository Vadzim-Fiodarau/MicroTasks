import React, {KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string
  setNameCallback: (e: any) => void
  addUser: () => void
  error: string
  totalUsers: number
  setError: (error: string) => void
  onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {
    name,
    setNameCallback,
    addUser,
    error,
    totalUsers,
    setError,
    onKeyPressHandler
  }
) => {

  const inputClass = error ? s.error : s.input
  const disable = !!error

  return (
    <div >
      <input value={name} onChange={setNameCallback}
             onKeyPress={onKeyPressHandler}
             className={inputClass}/>
      <button onClick={addUser} disabled={disable} className={s.button}>add</button>
      <span className={s.totalUser}>{totalUsers}</span>
      <div className={s.errorColor}>{error}</div>
    </div>
  )
}

export default Greeting
