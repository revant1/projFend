import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from '../reducers/';
import thunkMiddleware  from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger({});

const middlewares = [loggerMiddleware, thunkMiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];

const composedEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose(...enhancers);

const store = createStore(rootReducer,composedEnhancers);

export default store;


