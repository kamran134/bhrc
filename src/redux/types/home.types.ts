import { IHomePage, ITeamMember } from "../../models";

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