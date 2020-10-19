import {
  SAVE_ROLE,
  SAVE_ACCESS_TOKEN,
  LOGOUT,
  LOGIN_SUCCESS,
  CHANGE_LANGUAGE,
  CHANGE_THEME,
} from '../types';
import { action } from 'typesafe-actions';
import { ThemeKeyType } from '../types/sessionType';

export const loginSucces = (refreshToken: string, accessToken: string, roleName: string) => action(LOGIN_SUCCESS, { refreshToken, accessToken, roleName });

export const saveAccessToken = (token: string) => action(SAVE_ACCESS_TOKEN, { token });
export const saveRole = (roleName: string) => action(SAVE_ROLE, { roleName });
export const logoutUser = () => action(LOGOUT);

export const changeLanguage = (language: string) => action(CHANGE_LANGUAGE, { language });

export const changeTheme = (theme: ThemeKeyType) => action(CHANGE_THEME, { theme });