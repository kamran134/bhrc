import { ACTIVE_SEARCH, SET_LANGUAGE } from './action-types';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';

type languageAction = {
    type: typeof SET_LANGUAGE,
    language: string
}

const _setLanguage: ActionCreator<languageAction> = (language: string) => ({
    type: SET_LANGUAGE,
    language
});

export const setLanguage = (language: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    localStorage.setItem('az.bhrc.language', language);
    return dispatch(_setLanguage(language));
}

type activeSearchAction = {
    type: typeof ACTIVE_SEARCH,
    searchActive: boolean
}

const _activeSearch: ActionCreator<activeSearchAction> = (searchActive: boolean) => ({
    type: ACTIVE_SEARCH,
    searchActive
})

export const activeSearch = (searchActive: boolean): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    return dispatch(_activeSearch(searchActive))
}

export type SettingsTypes = languageAction & activeSearchAction;