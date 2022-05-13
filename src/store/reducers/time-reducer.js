
const TimeActions = {
  changeTime: 'change-time',
};
const defaultState = {
  time: 60
};
export default function timeReducer(state = defaultState, action)
{
  switch(action.type)
  {
  case TimeActions.changeTime:
    return {...state, time: action.payload.time};
  default:
    return state;
  }
}

export const changeTime = (time) => {
  return{
    type:TimeActions.changeTime,
    payload:{
      time
    }
  };
};