import { IStaticPage } from "../../models/staticPages.model";

export const GET_STATIC_PAGE = "GET_STATIC_PAGE";
export interface GetStaticPageAction {
    type: typeof GET_STATIC_PAGE;
    payload: IStaticPage;
}