

export const pointsActions = {
    ChangePoint : 'change-point'
}

let isGame = JSON.parse(localStorage.getItem('game'))
const defaultState = {
    points: isGame ? isGame.point.points : 120
}

export default function pointsReducer(state = defaultState,action){
    switch(action.type){
        case pointsActions.ChangePoint:
            return {...state,points:action.payload.newPoint}
        default:
            return state
    }
} 

export const changePoint = (newPoint) => {
    return{
        type: pointsActions.ChangePoint,
        payload:{
            newPoint
        }
    }
}