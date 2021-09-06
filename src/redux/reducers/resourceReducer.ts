import { GET_CATEGORY_RESOURCES, GET_RESOURCES_CATEGORIES } from "../actions/action-types";
import { CategoriesTypes } from "../actions/resource-action";
import { IResourceState } from "../states/resource-state";

const INITIAL_STATE: IResourceState = {
    categories: [],
    topics: undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action: CategoriesTypes) {
    const { type, payload } = action;
    switch (type) {
        case GET_RESOURCES_CATEGORIES:
            return {...state, categories: payload };
        case GET_CATEGORY_RESOURCES:
            return {...state, topics: payload };
        default:
            return state;
    }
}