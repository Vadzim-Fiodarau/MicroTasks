import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";

function HW10() {

  const state = useSelector<AppStoreType, boolean>((state) => state.loading.loading)
  const dispatch = useDispatch()


  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 2000)
    console.log('loading...')
  };

  return (
    <div>

      {state
        ? (
          <div>крутилка...</div>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }

    </div>
  )
}

export default HW10
