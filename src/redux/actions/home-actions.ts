import API from "../../api";
import { GET_HOMEPAGE, GET_TEAM } from "./action-types";
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';
import { IHomePage } from "../../models/homepage";
import { ITeamMember } from "../../models/team";

export interface homePageAction {
    type: typeof GET_HOMEPAGE,
    payload: IHomePage
}

const _getHomePage: ActionCreator<homePageAction> = (homepage: IHomePage) => ({
    type: GET_HOMEPAGE,
    payload: homepage
});

export const getHomePage = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`homepage`)
        .then(({ data }) => dispatch(_getHomePage(data)));
}

export interface teamAction {
    type: typeof GET_TEAM,
    payload: ITeamMember[]
}

const _getTeam: ActionCreator<teamAction> = (team: ITeamMember[]) => ({
    type: GET_TEAM,
    payload: team
});

export const getTeam = (limit: number, skip: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`team/${limit}/${skip}`)
        .then(({ data }) => dispatch(_getTeam(data)));
}