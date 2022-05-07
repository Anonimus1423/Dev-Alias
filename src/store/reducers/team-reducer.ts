import { teamState, ActionTypes, IActionTypes } from '../../types/team-reducer-types';
const defaultState: teamState = {
    teams: []
}
export default function teamReducer(state = defaultState, action: ActionTypes) : teamState
{
    switch(action.type)
    {
        case IActionTypes.AddTeam:
            return {...state, teams: [...state.teams, { id: state.teams.length, name: action.payload.teamName }]};
        default:
            return state;
    }
}
export const addTeamAction = (teamName: string) => ({ type: IActionTypes.AddTeam, payload: { teamName } })