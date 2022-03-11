import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

export type arrType = string[]
const arr: arrType = ['x', 'y', 'z']

function HW7() {
  const [value, onChangeOption] = useState<string>(arr[1])

  return (
    <div>
      <hr/>
      <div>
        <SuperSelect
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
      <div>
        <SuperRadio
          name={'radio'}
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>

      <hr/>
    </div>
  )
}

export default HW7
