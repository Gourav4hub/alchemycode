import { createStore } from "redux";

import CartReducer from "./reducers/CartReducer";

var store = createStore(CartReducer,{ carts : [] })

export default store;