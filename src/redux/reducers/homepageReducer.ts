import { THomePage } from "../../models/homepage";
import { GET_HOMEPAGE } from "../actions/action-types";
import { homePageAction } from "../actions/home-actions";

const INITIAL_STATE: THomePage = {
    welcome: undefined,
    about: undefined,
    activity: undefined,
    resources: undefined,
    signin: undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action: homePageAction) {
    const { type, payload } = action;
    switch (type) {
        case GET_HOMEPAGE:
            return {...state, ...payload }
        default:
            return state;
    }
}