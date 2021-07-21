import { GET_HOMEPAGE } from "../actions/action-types";

const INITIAL_STATE = {
    welcome: undefined,
    about: undefined,
    activity: undefined,
    resources: undefined,
    signin: undefined,
    team: undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_HOMEPAGE:
            return {...state, ...payload }
        default:
            return state;
    }
}