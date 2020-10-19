import { IUser, IRole } from '../../openApi';
import { ActionType } from 'typesafe-actions';
import * as userActions from '../actions/userActions';
import * as sessionActions from '../actions/sessionActions';

export interface IUserState {
  isLoading: boolean;
  error: string | null;
  userList: Array<IUser>;
  roles: Array<IRole>;
}

export type UserActions = ActionType<typeof userActions | typeof sessionActions.logoutUser>;
