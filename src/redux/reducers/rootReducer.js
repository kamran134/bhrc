import { combineReducers } from 'redux';
import alert from './alertReducer';
import auth from './authReducer';
import settings from './settingsReducer';
import articles from './articleReducer';
import resources from './resourceReducer'
import homepage from './homepageReducer';
import team from './teamReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    alert,
    auth,
    settings,
    articles,
    resources,
    homepage,
    team,
    form: formReducer
});