import { combineReducers, createStore } from 'redux';
import teamReducer from './reducers/team-reducer';
import timeReducer from './reducers/time-reducer';

const rootReducer = combineReducers({
  teams: teamReducer,
  time: timeReducer
});

export const store = createStore(rootReducer);