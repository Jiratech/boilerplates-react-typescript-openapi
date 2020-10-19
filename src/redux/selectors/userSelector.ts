import { createSelector } from 'reselect';
import { initialState } from '../store';
import { IUserState } from '../types/userType';

const selectUser = (state: any) => state.user ? state.user : initialState

export const selectIsLoading = () => createSelector(
  selectUser,
  (substate: IUserState) => substate.isLoading
);

export const selectUserList = () => createSelector(
  selectUser,
  (substate: IUserState) => substate.userList
)

export const selectRoleList = () => createSelector(
  selectUser,
  (substate: IUserState) => substate.roles
)