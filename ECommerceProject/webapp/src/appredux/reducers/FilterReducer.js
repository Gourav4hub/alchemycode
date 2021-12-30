import * as actionType from '../actions/ActionTypes'

export default function FilterReducer(state=[],action)
{
    switch(action.type)
    {
        case actionType.CHANGE_FILTER_CATEGORY : 
                if(action.payload.status)
                    return {...state,categories:[...state.categories,action.payload.cid]}
                else
                    return {...state,categories: state.categories.filter(ct=>ct!=action.payload.cid)}
        case actionType.CHANGE_FILTER_BRAND : 
                    if(action.payload.status)
                        return {...state,brands:[...state.brands,action.payload.brandid]}
                    else
                        return {...state,brands: state.brands.filter(ct=>ct!=action.payload.brandid)}                    
        default: return state                    
    }
}