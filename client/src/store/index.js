import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import dataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
  authReducer,
  dataReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;