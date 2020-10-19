import {
  LOAD_USERS_ATTEMPT,
  CREATE_USER_ATTEMPT,
  LOGIN_ATTEMPT,
  REGISTER_USER_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  REGISTER_USER_SUCCES,
  REGISTER_USER_ERROR,
  LOAD_ROLES_ATTEMPT,
  LOAD_ROLES_SUCCESS,
  LOAD_ROLES_ERROR
} from '../types';
import { IUser, IRole } from '../../openApi';
import { action } from 'typesafe-actions';
import { ISagaActionMeta } from '../../utils/CustomInterfaces';

export const loadUserList = () => action(LOAD_USERS_ATTEMPT);
export const loadUsersSucces = (users: IUser[]) => action(LOAD_USERS_SUCCESS, { users });
export const loadUsersError = (error: string) => action(LOAD_USERS_ERROR, { error });

export const createUser = (user: IUser, meta?: ISagaActionMeta) => action(CREATE_USER_ATTEMPT, user, meta);
export const createUserSucces = (user: IUser) => action(CREATE_USER_SUCCESS, { user });
export const createUserError = (error: string) => action(CREATE_USER_ERROR, { error });

export const loginUser = (email: string, password: string, meta?: ISagaActionMeta) => action(LOGIN_ATTEMPT, { email, password }, meta);
export const loginSucces = (refreshToken: string, accessToken: string, roleName: string) => action(LOGIN_SUCCESS, { refreshToken, accessToken, roleName });
export const loginError = (error: string) => action(LOGIN_ERROR, { error });

export const registerUser = (user: IUser, meta?: ISagaActionMeta) => action(REGISTER_USER_ATTEMPT, { user }, meta);
export const registerUserSucces = () => action(REGISTER_USER_SUCCES);
export const registerUserError = (error: string) => action(REGISTER_USER_ERROR, { error });

export const loadRolesList = () => action(LOAD_ROLES_ATTEMPT);
export const loadRolesSucces = (roles: IRole[]) => action(LOAD_ROLES_SUCCESS, {roles});
export const loadRolesError = (error: string) => action(LOAD_ROLES_ERROR, { error });
