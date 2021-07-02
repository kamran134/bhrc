import API from '../../api';
import { GET_CATEGORY_RESOURCES, GET_RESOURCES_CATEGORIES } from "./action-types";

export const getResourcesCategories = () => dispatch => {
    API.get(`categories`)
        .then(({ data }) => dispatch({
            type: GET_RESOURCES_CATEGORIES,
            payload: data
        }));
}

export const getCategoryResources = categoryId => dispatch => {
    API.get(`category/${categoryId}`)
        .then(({ data }) => dispatch({
            type: GET_CATEGORY_RESOURCES,
            payload: data
        }));
}