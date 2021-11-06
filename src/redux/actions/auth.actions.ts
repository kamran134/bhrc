import API from '../../api';
import {
    GetProfileAction,
    AUTH_SUCCESS,
    LOGOUT,
    USER_LOADED,
    REGISTER_STAGE,
    REGISTER_SUCCESS,
    SignUpAction,
    SingInAction,
    SingOutAction
} from '../types';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { RootState } from '../reducers';
import { _hasError, setAlert, openModal, redirect } from '.';
import { IUser, IUserInfo } from '../../models';

const _signIn: ActionCreator<SingInAction> = (token: string) => ({
    type: AUTH_SUCCESS,
    payload: token
});

export const signIn = (identifier: string, password: string, redirect?: string): ThunkAction<void, RootState, unknown, Action<string>> => 
(dispatch, getState) => {
    API.post(`signin`, {
        identifier,
        password
    }).then(({ data }) => {
        if (!data.error) {
            dispatch(setAlert('Successfull authorization', 'success'));
            dispatch(_signIn(data.token));
            dispatch(openModal(false));
            // if (getState().settings.redirect) browserHistory.push(getState().settings.redirect!); 
            return data;
        }
        else {
            dispatch(setAlert(data.message, 'error'));
            dispatch(_hasError(data.error));
        }
    }).then(data => {
        if (data) {
            dispatch(getProfile(data.token));
        }
        else console.error('Authorization failed');
    });
}

const _signOut: ActionCreator<SingOutAction> = () => ({
    type: LOGOUT
});

export const signOut = (userId: string, token: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`signout`, {
        _id: userId,
        token
    }).then(({ data }) => {
        dispatch(_signOut());
        dispatch(redirect(''));
    });
}

const _signUp: ActionCreator<SignUpAction> = (token: string) => ({
    type: REGISTER_SUCCESS,
    payload: token
});

export const signUp = (user: IUser): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`signup`, {
        email: user.login,
        password: user.password,
        profile: user.userInfo.profile
    }).then(({ data }) => {
        if (!data.error) {
            dispatch(_signUp(data));
            dispatch(setAlert("Successfull register", "success"));
            dispatch(openModal(false));
        }
        else {
            dispatch(_hasError(data.message));
            dispatch(setAlert(data.message, 'error'));
        }
    });
}

const _getProfile: ActionCreator<GetProfileAction> = (profile: IUserInfo) => ({
    type: USER_LOADED,
    payload: profile
});

export const getProfile = (token: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`getProfile`, {
        token
    }).then(({data}) => {
        if (data.error) {
            dispatch(_hasError(data))
        } else dispatch(_getProfile(data))
    });
}

export const setProcessStage = (stage: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => dispatch({
    type: REGISTER_STAGE,
    payload: stage
});