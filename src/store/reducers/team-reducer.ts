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
        case IActionTypes.RemoveTeam:
            let stateTeams = [...state.teams]
            stateTeams = stateTeams.filter(el=>{
                console.log(el.id !== action.payload.teamId)
                return el.id !== action.payload.teamId
            })
            return {...state,teams: [...stateTeams]}
        case IActionTypes.RenameTeam:
            let newTeams = [...state.teams]
            newTeams[action.payload.teamId].name = action.payload.newName
            return {...state,teams: [...newTeams]}
        default:
            return state;
    }
}
export const addTeamAction = (teamName: string) => ({ type: IActionTypes.AddTeam, payload: { teamName } })

export const removeTeamAction = (teamId:string) => {
    return{
        type:IActionTypes.RemoveTeam,
        payload:{
            teamId
        }
    }
}

export const selectNewTeamName = (id,newName) => {
    return{
        type:IActionTypes.RenameTeam,
        payload:{
            teamId:id,
            newName
        }
    }
}