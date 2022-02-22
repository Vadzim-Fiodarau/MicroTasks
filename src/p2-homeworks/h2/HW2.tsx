import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
  _id: number
  name: string
  priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'Anime', priority: 'low'},
  {_id: 3, name: 'Games', priority: 'low'},
  {_id: 4, name: 'Work', priority: 'high'},
  {_id: 5, name: 'HTML & CSS', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
  if (filter === 'all') return affairs
  if (filter === 'high') return affairs.filter(t=>t.priority === 'high')
  if (filter === 'low') return affairs.filter(t=>t.priority === 'low')
  if (filter === 'middle') return affairs.filter(t=>t.priority === 'middle')
  else return []
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
  return affairs.filter(t=>t._id !== _id)
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

  return (
    <div className={s.wrap}>
      <hr/>
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr/>
    </div>
  )
}

export default HW2

