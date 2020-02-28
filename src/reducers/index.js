import { combineReducers } from 'redux';
import UserReducer from './ReducerUsers';

const allReducers = combineReducers({
    users: UserReducer
});

export default allReducers;