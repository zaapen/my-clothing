export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',  //has to be the same as the user.reducer.
  payload: user
})