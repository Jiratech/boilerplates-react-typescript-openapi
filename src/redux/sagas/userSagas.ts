import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_USERS_ATTEMPT,
  CREATE_USER_ATTEMPT,
  LOGIN_ATTEMPT,
  REGISTER_USER_ATTEMPT,
  LOAD_ROLES_ATTEMPT,
} from '../types';
import { IDecodedPayload } from '../../utils/CustomInterfaces';
import { decodeJwtPayload } from '../../utils/jwtAuth';
import { userApiInstance, roleApiInstance } from '../../services';
import { authenticationApiInstance } from '../../services';
import { ActionType } from 'typesafe-actions';
import * as userActions from '../actions/userActions';

function* loadUsers() {
  try {
    const users = yield call([userApiInstance, userApiInstance.getUsers]);
    yield put(userActions.loadUsersSucces(users.data))
  }
  catch (e) {
    yield put(userActions.loadUsersError(e));
  }
}

function* createUser(action: ActionType<typeof userActions.createUser>) {
  try {
    const createdUser = yield call([userApiInstance, userApiInstance.createUser], action.payload);
    yield put(userActions.createUserSucces(createdUser.data))
  }
  catch (e) {
    yield put(userActions.createUserError(e));
  }
}

function* loadRoles() {
  try {
    const roles = yield call([roleApiInstance, roleApiInstance.getAllRoles]);
    yield put(userActions.loadRolesSucces(roles.data))
  }
  catch (e) {
    yield put(userActions.loadRolesError(e));
  }
}

function* registerUser(action: ActionType<typeof userActions.registerUser>) {
  try {
    const { meta } = action;
    let user = action.payload.user;
    user.roleId = undefined;
    const registeredUser = yield call([authenticationApiInstance, authenticationApiInstance.register], user);
    yield put(userActions.registerUserSucces());
    if (meta) {
      yield call(meta.redirect, meta.path)
    }
    yield put(userActions.registerUserError(registeredUser.statusText));
  }
  catch (e) {
    yield put(userActions.registerUserError(e));
  }
}

function* loginUser(action: ActionType<typeof userActions.loginUser>) {
  try {
    const response = yield call([authenticationApiInstance, authenticationApiInstance.login], { email: action.payload.email, password: action.payload.password });
    const accessTokenPayload: IDecodedPayload = decodeJwtPayload(response.data.accessToken);
    yield put(userActions.loginSucces(response.data.refreshToken, response.data.accessToken, accessTokenPayload.role));
  }
  catch (e) {
    yield put(userActions.loginError(e));
  }
}

export function* userSaga() {
  yield takeLatest(LOAD_USERS_ATTEMPT, loadUsers);
  yield takeLatest(CREATE_USER_ATTEMPT, createUser);
  yield takeLatest(REGISTER_USER_ATTEMPT, registerUser);
  yield takeLatest(LOGIN_ATTEMPT, loginUser);
  yield takeLatest(LOAD_ROLES_ATTEMPT, loadRoles);
}