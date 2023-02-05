import  ThunkMiddleware from "redux-thunk";
import { compose, applyMiddleware, createStore } from 'redux'
import reducer  from '../redux/reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(ThunkMiddleware))
)

export default store;