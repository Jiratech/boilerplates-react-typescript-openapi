import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOAD_USERS_ATTEMPT,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  CREATE_USER_ATTEMPT,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  REGISTER_USER_ATTEMPT,
  REGISTER_USER_SUCCES,
  REGISTER_USER_ERROR,
  LOGOUT,
  LOAD_ROLES_ATTEMPT,
  LOAD_ROLES_SUCCESS,
  LOAD_ROLES_ERROR
} from '../types';
import { IUserState, UserActions } from '../types/userType'

const initialState: IUserState = {
  isLoading: false,
  error: null,
  userList: [],
  roles: [],
}

export default function (
  state: IUserState = initialState,
  action: UserActions
): IUserState {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    case LOAD_USERS_ATTEMPT:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        userList: action.payload.users,
        isLoading: false
      };
    case LOAD_USERS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    case CREATE_USER_ATTEMPT:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        userList: [...state.userList, action.payload.user],
        isLoading: false
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    case REGISTER_USER_ATTEMPT:
      return {
        ...state,
        isLoading: true
      };
    case REGISTER_USER_SUCCES:
      return {
        ...state,
        isLoading: false
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
      case LOAD_ROLES_ATTEMPT:
        return {
          ...state,
          isLoading: true
        };
      case LOAD_ROLES_SUCCESS:
        return {
          ...state,
          roles: action.payload.roles,
          isLoading: false
        };
      case LOAD_ROLES_ERROR:
        return {
          ...state,
          error: action.payload.error,
          isLoading: false
        };
    case LOGOUT:
      return {
        ...initialState
      }
    default:
      return state;
  }
}