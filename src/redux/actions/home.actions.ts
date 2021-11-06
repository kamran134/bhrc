import API from "../../api";
import { GET_HOMEPAGE, GET_TEAM, HomePageAction, TeamAction } from "../types";
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { IHomePage, ITeamMember } from "../../models";

const _getHomePage: ActionCreator<HomePageAction> = (homepage: IHomePage) => ({
    type: GET_HOMEPAGE,
    payload: homepage
});

export const getHomePage = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`homepage`)
        .then(({ data }) => dispatch(_getHomePage(data)));
}

const _getTeam: ActionCreator<TeamAction> = (team: ITeamMember[]) => ({
    type: GET_TEAM,
    payload: team
});

export const getTeam = (limit: number, skip: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`team/${limit}/${skip}`)
        .then(({ data }) => dispatch(_getTeam(data)));
}