import * as actionType from '../actions/ActionTypes'

export default function CategoryReducer(state=[],action)
{
    switch(action.type){
        case actionType.LOAD_CATEGORIES: return action.payload.categories
        case actionType.ADD_CATEGORY : return [
                                       ...state , action.payload.category 
                                ]
        default: return state                                
    }
}