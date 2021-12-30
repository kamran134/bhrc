import { combineReducers } from 'redux';
import { alertReducer } from './alert.reducer';
import { authReducer } from './auth.reducer';
import { settingsReducer } from './settings.reducer';
import { newsReducer } from './article.reducer';
import { resourcesReducer } from './resource.reducer'
import { homepageReducer } from './homepage.reducer';
import { staticPageReducer } from './staticPage.reducer';
import { urbanicaReducer } from './urbanica.reducer';
import { visitorsReducer } from './visitors.reducer';
import { reducer as formReducer } from 'redux-form';
import { statementReducer } from './statement.reducer';
import { orgDocReducer } from './orgDocs.reducer';

export const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    settings: settingsReducer,
    news: newsReducer,
    resources: resourcesReducer,
    homepage: homepageReducer,
    staticPage: staticPageReducer,
    urbanica: urbanicaReducer,
    visitors: visitorsReducer,
    report: statementReducer,
    docs: orgDocReducer,
    form: formReducer
});

export type RootState = ReturnType<typeof rootReducer>