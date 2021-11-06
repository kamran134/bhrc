/* eslint-disable import/no-anonymous-default-export */
import { ACTIVE_SEARCH, SET_LANGUAGE, SettingsTypes, OPEN_MODAL, REDIRECT } from '../types';
import { ISettingsState } from '../states';
import i18n from 'i18next';

const INITIAL_STATE: ISettingsState = {
    language: localStorage.getItem('az.bhrc.language') || 'az',
    searchActive: false,
    modal: false,
    redirect: undefined
}

export function settingsReducer(state = INITIAL_STATE, action: SettingsTypes) {
    switch (action.type) {
        case SET_LANGUAGE:
            i18n.changeLanguage(action.payload);
            return {...state, language: action.payload }
        case ACTIVE_SEARCH:
            return {...state, searchActive: action.payload }
        case OPEN_MODAL:
            return {...state, modal: action.payload }
        case REDIRECT:
            return {...state, redirect: action.payload }
        default:
            return state;
    }
}