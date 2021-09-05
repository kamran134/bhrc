import API from "../../api";
import { GET_HOMEPAGE, GET_TEAM } from "./action-types";
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';
import { THomePage } from "../../models/homepage";
import { TTeamMember } from "../../models/team";

export type homePageAction = {
    type: typeof GET_HOMEPAGE,
    payload: THomePage
}

const _getHomePage: ActionCreator<homePageAction> = (homepage: THomePage) => ({
    type: GET_HOMEPAGE,
    payload: homepage
});

export const getHomePage = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`homepage`)
        .then(({ data }) => dispatch(_getHomePage(data)));
}

export type teamAction = {
    type: typeof GET_TEAM,
    payload: TTeamMember[]
}

const _getTeam: ActionCreator<teamAction> = (team: TTeamMember[]) => ({
    type: GET_TEAM,
    payload: team
});

export const getTeam = (limit: number, skip: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`team/${limit}/${skip}`)
        .then(({ data }) => dispatch(_getTeam(data)));
}