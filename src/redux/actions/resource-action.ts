import API from '../../api';
import { ICategory, ITopic } from '../../models/resource';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';
import { GET_CATEGORY_RESOURCES, GET_RESOURCES_CATEGORIES } from "./action-types";

interface categoriesAction {
    type: typeof GET_RESOURCES_CATEGORIES,
    payload: ICategory[]
}

const _getResourcesCategories: ActionCreator<categoriesAction> = (categories: ICategory[]) => ({
    type: GET_RESOURCES_CATEGORIES,
    payload: categories
});

export const getResourcesCategories = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`categories`)
        .then(({ data }) => dispatch(_getResourcesCategories(data)));
}

interface topicsAction {
    type: typeof GET_CATEGORY_RESOURCES,
    payload: ITopic[]
}

const _getCategoryResources: ActionCreator<topicsAction> = (topics: ITopic[]) => ({
    type: GET_CATEGORY_RESOURCES,
    payload: topics
});

export const getCategoryResources = (categoryId: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`category/${categoryId}`)
        .then(({ data }) => dispatch(_getCategoryResources(data)));
}

export type CategoriesTypes = categoriesAction & topicsAction;