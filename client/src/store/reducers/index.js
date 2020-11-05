import { combineReducers } from 'redux';
import projectsReducer from './project';

const rootReducers = combineReducers({
    projects: projectsReducer
});

export default rootReducers;