

export const pointsActions = {
    ChangePoint : 'change-point'
}

const defaultState = {
    points:120
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