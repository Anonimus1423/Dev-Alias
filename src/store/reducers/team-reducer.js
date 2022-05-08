
const IActionTypes = {
    AddTeam: "AddTeam",
    RemoveTeam: "RemoveTeam",
    RenameTeam: "RenameTeam"
}
const defaultState = {
    teams: []
}
export default function teamReducer(state = defaultState, action)
{
    switch(action.type)
    {
        case IActionTypes.AddTeam:
            return {...state, teams: [...state.teams, { id: state.teams.length, name: action.payload.teamName }]};
        case IActionTypes.RemoveTeam:
            let stateTeams = [...state.teams]
            stateTeams = stateTeams.filter(el=>{
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
export const addTeamAction = (teamName) => ({ type: IActionTypes.AddTeam, payload: { teamName } })

export const removeTeamAction = (teamId) => {
    return{
        type: IActionTypes.RemoveTeam,
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