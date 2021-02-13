import { SET_LANGUAGE } from '../actions/action-types';
import i18n from 'i18next';

const initialState = {
    language: localStorage.getItem('az.bhrc.language') || 'az'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const { type, language } = action;

    switch (type) {
        case SET_LANGUAGE:
            i18n.changeLanguage(language);
            return {...state, language }
        default:
            return state;
    }
}