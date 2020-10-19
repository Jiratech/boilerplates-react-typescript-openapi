import { createSelector } from 'reselect';
import { initialState } from '../store';
import { ISessionState } from '../types/sessionType';

export const selectSession = (state: any) => state.session ? state.session : initialState

export const selectAccessToken = () => createSelector(
  selectSession,
  (substate: ISessionState) => substate.accessToken
)

export const selectRefreshToken = () => createSelector(
  selectSession,
  (substate: ISessionState) => substate.refreshToken
)

export const selectRole = () => createSelector(
  selectSession,
  (substate: ISessionState) => substate.roleName
)

export const selectLanguage = () => createSelector(
  selectSession,
  (substate: ISessionState) => substate.language
)

export const selectTheme = () => createSelector(
  selectSession,
  (substate: ISessionState) => substate.theme
)