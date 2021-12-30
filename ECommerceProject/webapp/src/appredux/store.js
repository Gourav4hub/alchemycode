import { combineReducers ,createStore} from 'redux'

import MasterReducer from './reducers/MasterReducer'

var store = createStore(combineReducers({
    masterdata : MasterReducer
}),{
    masterdata : { categories : [] , brands : [] , products : [] }
})

export default store