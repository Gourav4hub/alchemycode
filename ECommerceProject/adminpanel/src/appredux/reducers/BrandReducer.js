import * as actionType from '../actions/ActionTypes'

export default function BrandReducer(state=[],action)
{
    switch(action.type){
        case actionType.LOAD_BRANDS: return action.payload.brands
      
        default: return state                                
    }
}