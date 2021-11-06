import { IHomePage } from "../../models";
import { GET_HOMEPAGE, HomePageAction } from "../types";

const INITIAL_STATE: IHomePage = {
    welcome: undefined,
    about: undefined,
    activity: undefined,
    resources: undefined,
    signin: undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
export function homepageReducer(state = INITIAL_STATE, action: HomePageAction) {
    const { type, payload } = action;
    switch (type) {
        case GET_HOMEPAGE:
            return {...state, ...payload }
        default:
            return state;
    }
}