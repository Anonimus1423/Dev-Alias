import { combineReducers, createStore } from 'redux';
import pointsReducer from './reducers/point-reducer';
import teamReducer from './reducers/team-reducer';
import timeReducer from './reducers/time-reducer';

const rootReducer = combineReducers({
  teams: teamReducer,
  time: timeReducer,
  point: pointsReducer
});

export const store = createStore(rootReducer);