import {
  SAVE_ROLE,
  SAVE_ACCESS_TOKEN,
  LOGIN_SUCCESS,
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  LOGOUT
} from '../types';
import { ISessionState, SessionActions } from '../types/sessionType'

const initialState: ISessionState = {
  refreshToken: null,
  accessToken: null,
  roleName: null,
  language: null,
  theme: 'system',
}

export default function (state = initialState, action: SessionActions) {
  switch (action.type) {
    case SAVE_ROLE:
      return {
        ...state,
        roleName: action.payload.roleName
      };
    case SAVE_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload.token
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        refreshToken: action.payload.refreshToken,
        accessToken: action.payload.accessToken,
        roleName: action.payload.roleName,
      }
    case LOGOUT:
      return {
        ...initialState
      }
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      }
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      }
    default:
      return state;
  }
}