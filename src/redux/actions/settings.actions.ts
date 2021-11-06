import { ActiveSearchAction, ACTIVE_SEARCH, LanguageAction, OpenModalAction, OPEN_MODAL, REDIRECT, RedirectAction, SET_LANGUAGE } from '../types';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

const _setLanguage: ActionCreator<LanguageAction> = (language: string) => ({
    type: SET_LANGUAGE,
    payload: language
});

export const setLanguage = (language: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    localStorage.setItem('az.bhrc.language', language);
    return dispatch(_setLanguage(language));
}

const _activeSearch: ActionCreator<ActiveSearchAction> = (searchActive: boolean) => ({
    type: ACTIVE_SEARCH,
    payload: searchActive
});

export const activeSearch = (searchActive: boolean): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    return dispatch(_activeSearch(searchActive))
}

const _openModal: ActionCreator<OpenModalAction> = (openModal: boolean) => ({
    type: OPEN_MODAL,
    payload: openModal
});

export const openModal = (openModal: boolean): ThunkAction<void, RootState, unknown, Action<string>> => 
dispatch => {
    dispatch(_openModal(openModal));
};

const _redirect: ActionCreator<RedirectAction> = (url: string) => ({
    type: REDIRECT,
    payload: url
});

export const redirect = (url: string): ThunkAction<void, RootState, unknown, Action<string>> =>
dispatch => {
    dispatch(_redirect(url));
}