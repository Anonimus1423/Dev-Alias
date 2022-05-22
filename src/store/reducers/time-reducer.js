let localInfo = JSON.parse(localStorage.getItem('game'))
const TimeActions = {
  changeTime: 'change-time',
};
const defaultState = {
  time: localInfo ? localInfo.time.time : 60
};
const changeLocal = (newTime) => {
  let locals = JSON.parse(localStorage.getItem('game'))
  if(locals){
    locals.time = {time:Number.parseInt(newTime)}
    localStorage.setItem('game',JSON.stringify(locals))
 }
}
export default function timeReducer(state = defaultState, action)
{
  switch(action.type)
  {
  case TimeActions.changeTime:
    changeLocal(action.payload.time)
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