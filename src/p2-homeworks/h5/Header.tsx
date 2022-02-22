import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {


  return (
    <div className={s.header}>
      <NavLink to={PATH.PRE_JUNIOR}  className={({isActive}) => isActive ? s.active :  s.link}  >Pre Junior</NavLink>
      <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.active :  s.link}>Junior</NavLink>
      <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.active :  s.link}>Junior Plus</NavLink>
      <div className={s.block}/>
    </div>
  )
}

export default Header
