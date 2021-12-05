import API from "../../api";
import { GET_HOMEPAGE, GET_STATICS, GET_TEAM, GLOBAL_SEARCH, HomePageTypes } from "../types";
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { IHomePage, ITeamMember } from "../../models";
import { ISearch } from "../../models/search.model";
import { IStaticPage } from "../../models/staticPages.model";

const _getHomePage: ActionCreator<HomePageTypes> = (homepage: IHomePage) => ({
    type: GET_HOMEPAGE,
    payload: homepage
});

export const getHomePage = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`homepage`)
        .then(({ data }) => dispatch(_getHomePage(data)));
}

const _getTeam: ActionCreator<HomePageTypes> = (team: ITeamMember[]) => ({
    type: GET_TEAM,
    payload: team
});

export const getTeam = (limit: number, skip: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`team/${limit}/${skip}`)
        .then(({ data }) => dispatch(_getTeam(data)));
}

const _globalSearch: ActionCreator<HomePageTypes> = (searchResults: ISearch[]) => ({
    type: GLOBAL_SEARCH,
    payload: searchResults
});

export const globalSearch = (searchString: string, empty?: boolean): ThunkAction<void, RootState, unknown, Action<string>> =>
dispatch => {
    !empty ? API.get(`search/${searchString}`)
        .then(({ data }) => {
            if (data) {
                let searchData: ISearch[] = [
                    {
                        categoryName: 'News',
                        result: data.articles
                    },
                    {
                        categoryName: 'Attachments',
                        result: data.attachments
                    },
                    {
                        categoryName: 'Informations',
                        result: data.informations
                    },
                    {
                        categoryName: 'Presentations',
                        result: data.presentations
                    },
                    {
                        categoryName: 'Reports',
                        result: data.reports
                    },
                    {
                        categoryName: 'Videos',
                        result: data.videos
                    },
                ];
                return dispatch(_globalSearch(searchData))
            }
            
        }) :
    dispatch(_globalSearch(undefined));
}

const _getStatics: ActionCreator<HomePageTypes> = (staticPages: IStaticPage[]) => ({
    type: GET_STATICS,
    payload: staticPages
});

export const getStatics = (limit: number, skip: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`pages/${limit}/${skip}`)
        .then(({ data }) => dispatch(_getStatics(data)));
}