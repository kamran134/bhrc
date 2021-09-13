import API from '../../api';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, USER_LOADED } from './action-types';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { RootState } from '../reducers/rootReducer';
import { _hasError } from './error-actions';
import { IUserInfo } from '../../models/user';

interface singInAction {
    type: typeof LOGIN_SUCCESS;
    token: string;
}

const _signIn: ActionCreator<singInAction> = (token: string) => ({
    type: LOGIN_SUCCESS,
    token
});

export const signIn = (identifier: string, password: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`signin`, {
        identifier,
        password
    }).then(({ data }) => {
        if (!data.error) {
            dispatch(_signIn(data.token));
            return data;
        }
        else dispatch(_hasError(data.error));
    }).then(data => {
        if (data) {
            dispatch(getProfile(data.token));
        }
        else console.error('Authorization failed');
    });
}

interface signUpAction {
    type: typeof REGISTER_SUCCESS,
    token: string
}

const _signUp: ActionCreator<signUpAction> = (token: string) => ({
    type: REGISTER_SUCCESS,
    token
});

export const signUp = (email: string, password: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`signup`, {
        email,
        password
    }).then(({ data }) => dispatch(_signUp(data)));
}

interface getProfileAction {
    type: typeof USER_LOADED;
    user: IUserInfo;
}

const _getProfile: ActionCreator<getProfileAction> = (profile: IUserInfo) => ({
    type: USER_LOADED,
    user: profile
});

export const getProfile = (token: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`getProfile`, {
        token
    }).then(({data}) => dispatch(_getProfile(data)));
}

export type AuthType = singInAction & signUpAction & getProfileAction;