import { CategoriesTypes, GET_CATEGORY_RESOURCES, GET_RESOURCES_CATEGORIES } from "../types";
import { IResourceState } from "../states";

const INITIAL_STATE: IResourceState = {
    categories: [],
    topics: undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
export function resourcesReducer(state = INITIAL_STATE, action: CategoriesTypes) {
    switch (action.type) {
        case GET_RESOURCES_CATEGORIES:
            return {...state, categories: action.payload };
        case GET_CATEGORY_RESOURCES:
            return {...state, topics: action.payload };
        default:
            return state;
    }
}