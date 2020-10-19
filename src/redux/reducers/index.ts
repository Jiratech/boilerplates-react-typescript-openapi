import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  session: sessionReducer,
  user: userReducer,
});