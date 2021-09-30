import API from '../../api';
import { LOGIN_SUCCESS, LOGOUT, REGISTER_STAGE, REGISTER_SUCCESS, USER_LOADED } from './action-types';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { RootState } from '../reducers/rootReducer';
import { _hasError } from './error-actions';
import { IUser, IUserInfo } from '../../models/user';
import { setAlert } from './alert-actions';
import { openModal } from './settings';

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
            console.log('hanst error');
            dispatch(setAlert('Successfull authorization', 'success'));
            dispatch(_signIn(data.token));
            dispatch(openModal(false));
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

interface singOutAction {
    type: typeof LOGOUT
}

const _signOut: ActionCreator<singOutAction> = () => ({
    type: LOGOUT
});

export const signOut = (userId: string, token: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`signout`, {
        _id: userId,
        token
    }).then(({ data }) => dispatch(_signOut()));
}

interface signUpAction {
    type: typeof REGISTER_SUCCESS,
    token: string
}

const _signUp: ActionCreator<signUpAction> = (token: string) => ({
    type: REGISTER_SUCCESS,
    token
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
    }).then(({data}) => {
        if (data.error) {
            dispatch(_hasError(data))
        } else dispatch(_getProfile(data))
    });
}

interface processStageAction {
    type: typeof REGISTER_STAGE;
    stage: number;
}

export const setProcessStage = (stage: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => dispatch({
    type: REGISTER_STAGE,
    stage
});

export type AuthType = singInAction & signUpAction & getProfileAction & processStageAction;