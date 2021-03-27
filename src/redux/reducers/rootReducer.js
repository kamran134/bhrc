import { combineReducers } from 'redux';
import alert from './alertReducer';
import auth from './authReducer';
import settings from './settingsReducer';
import articles from './articleReducer';

export default combineReducers({
    alert,
    auth,
    settings,
    articles
});