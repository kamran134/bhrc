import { ICategory, ITopic } from "../../models";

//RESOURCES
export const GET_RESOURCES_CATEGORIES = "GET_RESOURCES_CATEGORIES";

export interface CategoriesAction {
    type: typeof GET_RESOURCES_CATEGORIES;
    payload: ICategory[];
}

export const GET_CATEGORY_RESOURCES = "GET_CATEGORY_RESOURCES";

export interface TopicsAction {
    type: typeof GET_CATEGORY_RESOURCES;
    payload: ITopic[];
}

export type CategoriesTypes = CategoriesAction | TopicsAction;