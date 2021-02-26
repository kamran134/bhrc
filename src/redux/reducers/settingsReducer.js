import { ACTIVE_SEARCH, SET_LANGUAGE } from '../actions/action-types';
import i18n from 'i18next';

const initialState = {
    language: localStorage.getItem('az.bhrc.language') || 'az',
    searchActive: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const { type, language, searchActive } = action;
    switch (type) {
        case SET_LANGUAGE:
            i18n.changeLanguage(language);
            return {...state, language }
        case ACTIVE_SEARCH:
            return {...state, searchActive }
        default:
            return state;
    }
}