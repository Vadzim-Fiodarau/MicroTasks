import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {
  changeThemeDark,
  changeThemeRed,
  changeThemeSome,
  ThemeType
} from "./bll/themeReducer";



 const themes: ThemeType[] = ['dark', 'red', 'some'];

function HW12() {

  const theme = useSelector<AppStoreType, string>(theme => theme.theme.theme)
  const dispatch = useDispatch()

  const onChangeCallback = (e:ChangeEvent<HTMLSelectElement>) => {
    if(e.currentTarget.value === 'dark')
    dispatch(changeThemeDark('dark'))
    if(e.currentTarget.value === 'red')
      dispatch(changeThemeRed('red'))
    if(e.currentTarget.value === 'some')
      dispatch(changeThemeSome( 'some'))
  }


  return (
    <div className={s[theme]}>
      <hr/>
      <span className={s[theme + '-text']}>
                homeworks 12
            </span>

      < SuperSelect
        options={themes}
        onChange={onChangeCallback}
      />

      <hr/>
    </div>
  );
}

export default HW12;
