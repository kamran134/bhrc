import { combineReducers } from 'redux';
import { alertReducer } from './alert.reducer';
import { authReducer } from './auth.reducer';
import { settingsReducer } from './settings.reducer';
import { newsReducer } from './article.reducer';
import { resourcesReducer } from './resource.reducer'
import { homepageReducer } from './homepage.reducer';
import { teamReducer } from './team.reducer';
import { urbanicaReducer } from './urbanica.reducer';
import { visitorsReducer } from './visitors.reducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    settings: settingsReducer,
    news: newsReducer,
    resources: resourcesReducer,
    homepage: homepageReducer,
    team: teamReducer,
    urbanica: urbanicaReducer,
    visitors: visitorsReducer,
    form: formReducer
});

export type RootState = ReturnType<typeof rootReducer>