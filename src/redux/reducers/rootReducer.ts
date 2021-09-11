import { combineReducers } from 'redux';
import alert from './alertReducer';
import auth from './authReducer';
import settings from './settingsReducer';
import news from './articleReducer';
import resources from './resourceReducer'
import homepage from './homepageReducer';
import team from './teamReducer';
import urbanica from './urbanicaReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    alert,
    auth,
    settings,
    news,
    resources,
    homepage,
    team,
    urbanica,
    form: formReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>