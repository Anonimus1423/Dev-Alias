const defaultState=0

export const ActiveActions = {
    IncrementActive: 'in-active'
}

export const activeReducer = (state=defaultState,action) => {
    switch(action.type){
        case ActiveActions.IncrementActive:
            return action.payload.newActiveItemIndex
        default:
            return state
    }
}

export const setActiveIndex = (index) => {
    return{
        type: ActiveActions.IncrementActive,
        payload:{
            newActiveItemIndex: index
        }
    }
}