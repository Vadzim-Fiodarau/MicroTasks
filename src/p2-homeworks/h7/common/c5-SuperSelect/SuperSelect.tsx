import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent
} from 'react'
import {arrType} from "../../HW7";
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: arrType | undefined
  onChangeOption?: (option: string) => void

}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions = options?.map((t, i) => {
    return <option key={i} value={t}>
     {t}
    </option>
  })

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)

  }

  return (
    <div>
      <select className={s.select} onChange={onChangeCallback}  {...restProps}>
        {mappedOptions}
      </select>

    </div>
  )
}

export default SuperSelect
