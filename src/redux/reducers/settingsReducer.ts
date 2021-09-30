import { ACTIVE_SEARCH, OPEN_SIGNIN, SET_LANGUAGE } from '../actions/action-types';
import i18n from 'i18next';
import { ISettingsState } from '../states/settings-state';
import { SettingsTypes } from '../actions/settings';

const initialState: ISettingsState = {
    language: localStorage.getItem('az.bhrc.language') || 'az',
    searchActive: false,
    modal: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SettingsTypes) => {
    const { type, language, searchActive, open } = action;
    switch (type) {
        case SET_LANGUAGE:
            i18n.changeLanguage(language);
            return {...state, language }
        case ACTIVE_SEARCH:
            return {...state, searchActive }
        case OPEN_SIGNIN:
            return {...state, modal: open}
        default:
            return state;
    }
}