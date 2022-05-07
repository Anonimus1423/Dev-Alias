import { combineReducers, createStore } from "redux";
import teamReducer from './reducers/team-reducer';

const rootReducer = combineReducers({
    teams: teamReducer
})
export type reducersType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer)