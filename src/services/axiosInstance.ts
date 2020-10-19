import axios, { AxiosInstance } from 'axios';
import { decodeJwtPayload } from '../utils/jwtAuth';
import { serverURL, sessionTimeout, endpointList } from '../utils/constants';
import store from '../redux/store';
import * as actions from '../redux/actions/sessionActions';
import { IDecodedPayload } from '../utils/CustomInterfaces';
import { selectSession } from '../redux/selectors/sessionSelector'
import { authenticationApiInstance } from './';

const instance: AxiosInstance = axios.create({
  baseURL: serverURL,
  timeout: sessionTimeout,
});

const unauthenticatedPaths = [endpointList.login, endpointList.register];

const refreshPath = endpointList.refresh;

instance.interceptors.request.use(requestInterceptor, undefined);

instance.interceptors.response.use(undefined, responseErrorInterceptor);

function requestInterceptor(config: any) {
  const session = selectSession(store.getState())
  if (!isUnauthenticatedEndpoint(config.url) && refreshPath !== config.url) {
    const accessToken = session.accessToken
    if (accessToken) {
      config.headers = {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        "accessToken": accessToken,
        'Authorization': 'Bearer ' + accessToken,
      };
    }
  } else if (refreshPath === config.url) {
    const refreshToken = session.refreshToken;
    if (refreshToken) {
      config.headers = {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        "refreshToken": refreshToken,
      };
    }
  }
  return config;
}

function responseErrorInterceptor(error: any) {
  if (error.response.status === 401 && error.config && !error.config.__isRetryRequest) {
    return authenticationApiInstance.refresh()
      .then((response) => {
        store.dispatch(actions.saveAccessToken(response.data.accessToken || ''))
        const decodedPayload: IDecodedPayload = decodeJwtPayload(response.data.accessToken || '')
        store.dispatch(actions.saveRole(decodedPayload.role))
        error.config.__isRetryRequest = true;
        return doRetry(error.config)
      })
  } else if (error.response.status === 400) {
    return Promise.reject(error.response);
  } else if (error.response.status === 403) {
    return Promise.reject(error.response);
  } else if (error.response.status === 440) {
    store.dispatch(actions.logoutUser())
    return Promise.reject(error.response);
  } else {
    // store.dispatch(toggleServerErrorNotification(true));
    return Promise.reject(error);
  }
}

function isUnauthenticatedEndpoint(url: any) {
  return unauthenticatedPaths.find(path => url.includes(path));
}

function doRetry(config: any) {
  return instance
    .request(config)
    .then(response => Promise.resolve(response))
    .catch(error => {
      if (error.response.status === 401) {
        store.dispatch(actions.logoutUser())
        return Promise.reject(new Error('not_authenticated_req'))
      }
      return Promise.reject(error)
    })
}

export default instance;