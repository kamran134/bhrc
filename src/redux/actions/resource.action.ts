import API from '../../api';
import { ICategory, ITopic } from '../../models';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { CategoriesAction, GET_CATEGORY_RESOURCES, GET_RESOURCES_CATEGORIES, TopicsAction } from "../types";

const _getResourcesCategories: ActionCreator<CategoriesAction> = (categories: ICategory[]) => ({
    type: GET_RESOURCES_CATEGORIES,
    payload: categories
});

export const getResourcesCategories = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`categories`)
        .then(({ data }) => dispatch(_getResourcesCategories(data)));
}

const _getCategoryResources: ActionCreator<TopicsAction> = (topics: ITopic[]) => ({
    type: GET_CATEGORY_RESOURCES,
    payload: topics
});

export const getCategoryResources = (categoryId: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`category/${categoryId}`)
        .then(({ data }) => dispatch(_getCategoryResources(data)));
}