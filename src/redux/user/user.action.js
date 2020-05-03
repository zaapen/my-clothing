import { UserActionTypes } from './user.types'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,  //has to be the same as the user.reducer.
  payload: user
})