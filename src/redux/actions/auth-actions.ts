import API from '../../api';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, USER_LOADED } from './action-types';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { RootState } from '../reducers/rootReducer';
import { ISignIn } from '../states/auth-state';
import { _hasError } from './error-actions';
import { IUser, IUserInfo } from '../../models/user';

interface singInAction {
    type: typeof LOGIN_SUCCESS;
    payload: ISignIn;
}

const _signIn: ActionCreator<singInAction> = (data: ISignIn) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const signIn = (identifier: string, password: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`signin`, {
        identifier,
        password
    }).then(({ data }) => {
        if (!data.error) {
            dispatch(_signIn(data));
            return data;
        }
        else dispatch(_hasError(data.error));
    }).then(data => {
        if (data) {
            dispatch(getProfile(data.token));
        }
        else console.log('pichal');
    });
}

interface signUpAction {
    type: typeof REGISTER_SUCCESS,
    payload: string
}

const _signUp: ActionCreator<signUpAction> = (token: string) => ({
    type: REGISTER_SUCCESS,
    payload: token
});

export const signUp = (email: string, password: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`signup`, {
        email,
        password
    }).then(({ data }) => dispatch(_signUp(data)));
}

interface getProfileAction {
    type: typeof USER_LOADED;
    payload: IUserInfo;
}

const _getProfile: ActionCreator<getProfileAction> = (profile: IUserInfo) => ({
    type: USER_LOADED,
    payload: profile
});

export const getProfile = (token: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`getProfile`, {
        token
    }).then(({data}) => dispatch(_getProfile(data)));
}

export type AuthType = singInAction & signUpAction & getProfileAction;