import { UserApi, RoleApi, AuthenticationApi } from '../openApi';
import { serverURL } from '../utils/constants';
import instance from './axiosInstance';

export const roleApiInstance = new RoleApi(undefined, serverURL, instance);

export const userApiInstance = new UserApi(undefined, serverURL, instance);

export const authenticationApiInstance = new AuthenticationApi(undefined, serverURL, instance);

