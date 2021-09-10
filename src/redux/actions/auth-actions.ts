import API from '../../api';
import { GET_PROFILE, LOGIN_SUCCESS, REGISTER_SUCCESS } from './action-types';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { RootState } from '../reducers/rootReducer';
import { ISignIn } from '../states/auth-state';
import { _hasError } from './error-actions';
import { IUser } from '../../models/user';

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
            dispatch(getProfile(data.token, data.userId));
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
    type: typeof GET_PROFILE;
    payload: IUser;
}

const _getProfile: ActionCreator<getProfileAction> = (profile: IUser) => ({
    type: GET_PROFILE,
    payload: profile
});

export const getProfile = (token: string, userId: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`getProfile`, {
        _id: userId,
    }, {headers: {
        'Content-Type': 'application/json',
        Authorization: `BHRC ${token}`
    }}).then(({data}) => dispatch(_getProfile(data)));
}

export type AuthType = singInAction & signUpAction & getProfileAction;