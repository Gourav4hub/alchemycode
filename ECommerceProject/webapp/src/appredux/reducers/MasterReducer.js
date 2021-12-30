import * as actionType from '../actions/ActionTypes'

export default function MasterReducer(state=[],action)
{
    switch(action.type){
        case actionType.LOAD_BRANDS: return {
            ...state,brands:action.payload.brands
        }
        case actionType.LOAD_CATEGORIES: return {
            ...state,categories:action.payload.categories
        }
        case actionType.LOAD_PRODUCTS: return {
            ...state,products:action.payload.products
        }
        default: return state                                
    }
}