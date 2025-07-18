  import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers/Index';
import {thunk} from 'redux-thunk'

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));

  export default store 