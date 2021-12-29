import { combineReducers ,createStore} from 'redux'

import CategoryReducer from './reducers/CategoryReducer'

var store = createStore(combineReducers({
    categories : CategoryReducer
}),{
    categories : []
})

export default store