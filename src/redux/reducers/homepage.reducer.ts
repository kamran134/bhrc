import { IHomeState } from "../states";
import { GET_HOMEPAGE, GET_STATICS, GET_TEAM, GLOBAL_SEARCH, HomePageTypes } from "../types";

const INITIAL_STATE: IHomeState = {
    welcome: undefined,
    about: undefined,
    activity: undefined,
    resources: undefined,
    signin: undefined,
    teamMembers: [],
    searchResults: [],
    staticPages: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export function homepageReducer(state = INITIAL_STATE, action: HomePageTypes) {
    switch (action.type) {
        case GET_HOMEPAGE:
            return {...state, ...action.payload }
        case GET_TEAM:
            return {...state, teamMembers: action.payload }
        case GLOBAL_SEARCH:
            return {...state, searchResults: action.payload }
        case GET_STATICS:
            return {...state, staticPages: action.payload }
        default:
            return state;
    }
}