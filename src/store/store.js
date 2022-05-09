import { combineReducers, createStore } from 'redux';
import { activeReducer } from './reducers/active-index';
import pointsReducer from './reducers/point-reducer';
import { questsReducer } from './reducers/quests-reducer';
import teamReducer from './reducers/team-reducer';
import timeReducer from './reducers/time-reducer';

const rootReducer = combineReducers({
  teams: teamReducer,
  time: timeReducer,
  point: pointsReducer,
  index: activeReducer,
  quests: questsReducer
});

export const store = createStore(rootReducer);