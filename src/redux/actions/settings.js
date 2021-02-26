import { ACTIVE_SEARCH, SET_LANGUAGE } from './action-types';

export const setLanguage = language => dispatch => {
    localStorage.setItem('az.bhrc.language', language);
    return dispatch({
        type: SET_LANGUAGE,
        language
    })
}

export const activeSearch = searchActive => dispatch => {
    return dispatch({
        type: ACTIVE_SEARCH,
        searchActive
    })
}