import { SET_LANGUAGE } from './action-types';

export const setLanguage = language => dispatch => {
    localStorage.setItem('az.bhrc.language', language);
    return dispatch({
        type: SET_LANGUAGE,
        language
    })
}