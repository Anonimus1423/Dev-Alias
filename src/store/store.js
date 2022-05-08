import { combineReducers, createStore } from "redux";
import teamReducer from './reducers/team-reducer';

const rootReducer = combineReducers({
    teams: teamReducer
})

export const store = createStore(rootReducer)