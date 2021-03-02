import { combineReducers } from 'redux';
import users from './user';
import games from './games';

const rootReducer = combineReducers({
  users,
  games,
});

export default rootReducer;
