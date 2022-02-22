import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {KeyboardEvent} from 'react'


type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string, _id:string) => void
    userID: string
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback, userID}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')


    const setNameCallback = (e:KeyboardEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError('')
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            addUserCallback(name, userID)
            alert(`Hello ${name} !`)
            setName('')
        }
    }

    const addUser = () => {
        if(name.trim() !== ''){
            addUserCallback(name, userID)
            alert(`Hello ${name} !`)
            setName('')
        } else {
            setError("Title is required");

        }

    }

    const totalUsers = users.length

    return (
      <Greeting
        name={name}
        setNameCallback={setNameCallback}
        addUser={addUser}
        error={error}
        totalUsers={totalUsers}
        setError={setError}
        onKeyPressHandler={onKeyPressHandler}
      />
    )
}

export default GreetingContainer
