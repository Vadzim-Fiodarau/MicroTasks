import {UserType} from "../HW8";

export type ActionType = sortNameUpType | sortNameDownType | checkPeopleAgeType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sortUp': {
      const copyState = [...state]
      return copyState.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    case 'sortDown': {
      const copyState = [...state]
      return copyState.sort((a, b) => a.name < b.name ? 1 : -1);
    }
    case 'check': {
      const copyState = [...state]
      return copyState.filter(t => t.age >= 18)
    }
    default:
      return state
  }
}

export type sortNameUpType = ReturnType<typeof sortNameUp>
export const sortNameUp = () => {
  return {
    type: 'sortUp',
  }
}

export type sortNameDownType = ReturnType<typeof sortNameDown>
export const sortNameDown = () => {
  return {
    type: 'sortDown',
  }
}

export type checkPeopleAgeType = ReturnType<typeof checkPeopleAge>
export const checkPeopleAge = () => {
  return {
    type: 'check',
  }
}