import { createSelector } from 'reselect'

const selectUsers = state => state.users

export const selectCurrentUser = createSelector([selectUsers], (users) => users.currentUser)