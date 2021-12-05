import { IHomePage, ITeamMember } from "../../models";
import { ISearch } from "../../models/search.model";
import { IStaticPage } from "../../models/staticPages.model";

//HOME
export const GET_HOMEPAGE = "GET_HOMEPAGE";
export interface HomePageAction {
    type: typeof GET_HOMEPAGE;
    payload: IHomePage;
}

export const GET_TEAM = "GET_TEAM";
export interface TeamAction {
    type: typeof GET_TEAM;
    payload: ITeamMember[];
}

export const GLOBAL_SEARCH = "GLOBAL_SEARCH";
export interface GlobalSearchAction {
    type: typeof GLOBAL_SEARCH;
    payload: ISearch[];
}

export const GET_STATICS = "GET_STATICS";
export interface GetStaticAction {
    type: typeof GET_STATICS;
    payload: IStaticPage[];
}

export type HomePageTypes = HomePageAction | TeamAction | GlobalSearchAction | GetStaticAction;