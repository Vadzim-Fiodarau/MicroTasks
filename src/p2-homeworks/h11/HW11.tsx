import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  return (
    <div>
      <hr/>

      <div>
        <span style={{marginLeft: 10}}>{value1}</span>
        <SuperRange
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setValue1(+e.currentTarget.value)
          }}
        />
      </div>

      <div>
        <span style={{marginLeft: 10}}>{value1}</span>
        <SuperDoubleRange
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setValue1(+e.currentTarget.value)
          }}

        />
        <span style={{marginLeft: 10}}>{value2}</span>
      </div>

      <hr/>
    </div>
  )
}

export default HW11
