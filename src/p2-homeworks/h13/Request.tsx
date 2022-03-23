import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./api/RequestsAPI";

export const Request = () => {
  const [value, setValue] = useState(false)
  const [error, setError] = useState('')

  const onClickButtonHandler = () => {
    if(!value){
      setError('Ошибка, попробуйте ещё раз')
    } else {
      setError('Всё ок')
    }
    return requestAPI.checkBox(value)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked)
    setError('')
  }

  return (
    <div>
      <SuperButton
        onClick={onClickButtonHandler}
      >
        Request
      </SuperButton>
      <SuperCheckbox checked={value} onChange={onChangeHandler}/>
      {error && <div>{error}</div>}
    </div>
  );
};

