type LoadingType = {
  type: string
  loading: boolean
}

type initStateType = {
  loading: boolean
}

const initState = {
  loading: false,
}

export const loadingReducer = (state = initState, action: loadingACType): initStateType => {

  switch (action.type) {
    case 'loading': {
      return {
        ...state,
        loading: action.loading
      }
    }
    default:
      return state
  }
}
export type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean): LoadingType => {
  return {
    type: 'loading',
    loading
  } as const
}