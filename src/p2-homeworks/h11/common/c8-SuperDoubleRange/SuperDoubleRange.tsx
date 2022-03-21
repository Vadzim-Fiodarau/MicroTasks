import React, {ChangeEvent} from 'react'
import {DefaultInputPropsType} from '../c7-SuperRange/SuperRange';



type SuperDoubleRangePropsType = DefaultInputPropsType & {
  onChangeRange?: (value: number) => void

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChange,onChangeRange,
    value, ...restProps
  }
) => {

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e) // сохраняем старую функциональность

    onChangeRange && onChangeRange(+e.currentTarget.value)
  }


  return (
    <>
      <input
        type={'range'}
        onChange={onChangeCallback}


        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />
      <input
        type={'range'}
        onChange={onChangeCallback}


        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />

    </>
  )
}

export default SuperDoubleRange
