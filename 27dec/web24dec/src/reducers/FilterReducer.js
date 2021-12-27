import * as actionType from '../actions/ActionTypes'

export default function FilterReducer(state={},action)
{
    switch(action.type)
    {
        case actionType.FILTER_CHANGE :                             
                            return  action.payload.filter
        default: return state
    }
}