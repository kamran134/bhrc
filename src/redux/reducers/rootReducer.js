import { combineReducers } from 'redux';
import alert from './alertReducer';
import auth from './authReducer';
import settings from './settingsReducer';

export default combineReducers({
    alert,
    auth,
    settings
});