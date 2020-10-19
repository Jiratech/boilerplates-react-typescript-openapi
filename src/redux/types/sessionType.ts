import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/sessionActions';
import { themes } from '../../styles/theme/themes';

export type ThemeKeyType = keyof typeof themes | 'system';
export interface ISessionState {
  refreshToken: string | null;
  accessToken: string | null;
  roleName: string | null;
  language: string | null;
  theme: ThemeKeyType;
}

export type SessionActions = ActionType<typeof actions>;