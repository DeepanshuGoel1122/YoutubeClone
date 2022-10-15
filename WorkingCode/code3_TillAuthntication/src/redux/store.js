import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authReducer } from './reducers/auth.reducer'

// const initialState = {
//     name: "deepu",
//     age: "21"
// }

// const reducer = initialState => initialState;

const rootReducer = combineReducers({

    auth:authReducer,
})



const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;