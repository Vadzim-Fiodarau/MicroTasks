type ActionType = changeThemeDarkType | changeThemeRedType | changeThemeSomeType

export type ThemeType = 'dark' | 'red' | 'some'

export type initStateType = {
  theme: string
}
type changeThemeType = {
  type: string
  theme: ThemeType

}
const initState = {
  theme: 'dark'
};

export const themeReducer = (state = initState, action: ActionType): initStateType => {
  switch (action.type) {
    case 'dark': {
      return {
        ...state,
        theme: action.theme
      }
    }
    case 'red': {
      return {
        ...state,
        theme: action.theme
      }
    }
    case 'some': {
      return {
        ...state,
        theme: action.theme
      }
    }
    default:
      return state;
  }
};
type changeThemeDarkType = ReturnType<typeof changeThemeDark>
export const changeThemeDark = (theme: ThemeType): changeThemeType => {
  return {
    type: 'dark',
    theme
  } as const
};

type changeThemeRedType = ReturnType<typeof changeThemeRed>
export const changeThemeRed = (theme: ThemeType): changeThemeType => {
  return {
    type: 'red',
    theme
  } as const
};

type changeThemeSomeType = ReturnType<typeof changeThemeSome>
export const changeThemeSome = (theme: ThemeType): changeThemeType => {
  return {
    type: 'some',
    theme
  } as const
};

