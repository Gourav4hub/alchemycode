import { combineReducers ,createStore} from 'redux'

import CategoryReducer from './reducers/CategoryReducer'
import BrandReducer from './reducers/BrandReducer'

var store = createStore(combineReducers({
    categories : CategoryReducer,
    brands : BrandReducer
}),{
    categories : [] , brands : []
})

export default store