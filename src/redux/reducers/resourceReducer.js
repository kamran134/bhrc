import { GET_CATEGORY_RESOURCES, GET_RESOURCES_CATEGORIES } from "../actions/action-types";

const INITIAL_STATE = {
    categories: [],
    category: undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_RESOURCES_CATEGORIES:
            return {...state, categories: payload };
        case GET_CATEGORY_RESOURCES:
            return {...state, category: payload };
        default:
            return state;
    }
}