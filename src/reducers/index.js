import { combineReducers } from 'redux';

import api from './api';
import auth from './auth';
import viewReducer from './view';
import deleteReducer from './delete';
import getReducer from './get';
import updateReducer from './update'

const rootReducer = combineReducers({
    api,
    auth,
    viewReducer,
    deleteReducer,
    getReducer,
    updateReducer,
})

export default rootReducer;