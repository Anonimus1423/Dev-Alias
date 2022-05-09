import { v4 as uuidv4 } from 'uuid';

const IActionTypes = {
  AddTeam: 'AddTeam',
  RemoveTeam: 'RemoveTeam',
  RenameTeam: 'RenameTeam',
  LocalSet: 'LocalSet',
  AddPoint: 'add-point',
  DeletePoint: 'delete-point'
};
const defaultState = {
  teams: []
};
export default function teamReducer(state = defaultState, action)
{
  let stateTeams = state.teams;
  switch(action.type)
  {
  case IActionTypes.AddTeam:
    return {...state, teams: [...state.teams, { id: uuidv4(), name: action.payload.teamName, score: 0 }]};
  case IActionTypes.RemoveTeam:
    stateTeams = stateTeams.filter(el=>{
      return el.id !== action.payload.teamId;
    });
    return {...state,teams: [...stateTeams]};
  case IActionTypes.LocalSet:
    return {...state,...action.payload}
  case IActionTypes.RenameTeam:
    stateTeams[action.payload.teamId].name = action.payload.newName;
    return {...state,teams: [...stateTeams]};
  case IActionTypes.AddPoint:
    stateTeams[action.payload.index].score += 1
    return {...state,teams: [...stateTeams]};
  case IActionTypes.DeletePoint:
    stateTeams[action.payload.index].score -= 1
    return {...state,teams: [...stateTeams]};
  default:
    return state;
  }
}
export const addTeamAction = (teamName) => ({ type: IActionTypes.AddTeam, payload: { teamName } });

export const removeTeamAction = (teamId) => {
  return{
    type: IActionTypes.RemoveTeam,
    payload:{
      teamId
    }
  };
};

export const selectNewTeamName = (id,newName) => {
  return{
    type:IActionTypes.RenameTeam,
    payload:{
      teamId:id,
      newName
    }
  };
};

export const localSet = (teams) => {
  return{
    type:IActionTypes.LocalSet,
    payload:{
      teams
    }
  }
}

export const AddPointer = (index) => {
  return{
    type:IActionTypes.AddPoint,
    payload:{
      index
    }
  }
}

export const DeletePointer = (index) => {
  return{
    type:IActionTypes.DeletePoint,
    payload:{
      index
    }
  }
}
