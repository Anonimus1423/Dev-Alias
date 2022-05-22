const refreshActions = {
    'CHANGE-REFRESH' : 'change-refresh'
}
const changeLocal = (newRefreshCount) => {
    let locals = JSON.parse(localStorage.getItem('game'))
    if(locals){
      locals.refresh = Number.parseInt(newRefreshCount)
      localStorage.setItem('game',JSON.stringify(locals))
   }
}
let isGame = JSON.parse(localStorage.getItem('game'))
const defaultState = isGame ? isGame.refresh : 5
function RefreshReducer(state=defaultState,action){
    switch(action.type){
        case refreshActions['CHANGE-REFRESH']:
            changeLocal(action.payload.refresh)
            return action.payload.refresh
            break;
        default:
            return state
    }
}

export const ChangeRefresh = (newCount) => {
    return{
        type:  refreshActions['CHANGE-REFRESH'],
        payload:{
            refresh: newCount
        }
    }
}

export default RefreshReducer