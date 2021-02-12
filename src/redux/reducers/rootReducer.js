import { combineReducers } from 'redux';
import alert from './alertReducer';
import auth from './authReducer';
import language from './languageReducer';

export default combineReducers({
    alert,
    auth,
    language
});