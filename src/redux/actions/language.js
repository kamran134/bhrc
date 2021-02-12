import { SET_LANGUAGE } from './action-types';

export const setLanguage = language => dispatch => {
    return dispatch({
        type: SET_LANGUAGE,
        language
    })
}