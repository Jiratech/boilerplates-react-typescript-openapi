import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { loadState, saveState } from '../utils/localStorage';
import throttle from 'lodash.throttle';
import { userSaga } from './sagas/userSagas';

export const history = createBrowserHistory()

export const initialState = loadState();

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
];

const store = createStore(rootReducer(history), initialState, applyMiddleware(...middleware))

sagaMiddleware.run(userSaga);

store.subscribe(throttle(() => {
  saveState({
    session: store.getState().session
  });
}, 1000));

export default store;