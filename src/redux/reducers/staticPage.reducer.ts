import { IStaticPage } from "../../models/staticPages.model";
import { GetStaticPageAction, GET_STATIC_PAGE } from "../types";

const INITIAL_STATE: IStaticPage = {
    _id: '',
    name: {},
    shortDescription: {},
    description: {},
    path: {},
    createdAt: new Date()
}

export function staticPageReducer(state = INITIAL_STATE, action: GetStaticPageAction) {
    switch(action.type) {
        case GET_STATIC_PAGE:
            return action.payload
        default:
            return state;
    }
}