import API from '../../api';
import {
    AUTH_SUCCESS,
    LOGOUT,
    USER_LOADED,
    REGISTER_STAGE,
    REGISTER_SUCCESS,
    AuthType,
    GET_USER_PROJECTS,
    UPDATE_PROFILE
} from '../types';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { RootState } from '../reducers';
import { _hasError, setAlert, openModal, redirect } from '.';
import { IProfile, IProject, IUser, IUserInfo } from '../../models';

const _signIn: ActionCreator<AuthType> = (token: string) => ({
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

const _signOut: ActionCreator<AuthType> = () => ({
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

const _signUp: ActionCreator<AuthType> = (token: string) => ({
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

const _getProfile: ActionCreator<AuthType> = (profile: IUserInfo) => ({
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

const _getUserProjects: ActionCreator<AuthType> = (projects: IProject[]) => ({
    type: GET_USER_PROJECTS,
    payload: projects
});

export const getUserProjects = (userId: string, limit: number, skip: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`projectsByUser/${userId}/${limit}/${skip}`).then(({ data }) => {
        if (data.error) dispatch(_hasError(data));
        else dispatch(_getUserProjects(data));
    });
}

const _updateProfile: ActionCreator<AuthType> = (profile: IProfile) => ({
    type: UPDATE_PROFILE,
    payload: profile
});

export const updateProfile = (profile?: IProfile, picture?: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    API.post(`updateProfile`, {
        token: getState().auth.token,
        _id: getState().auth.user?._id,
        profile,
        picture
    })
        .then(({ data }) => dispatch(_updateProfile(data)))
        .catch(e => dispatch(_hasError(e)));
}

const _testRequest: ActionCreator<AuthType> = (projects: IProject[]) => ({
    type: GET_USER_PROJECTS,
    payload: projects
});

export const testRequest = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    API.post(`testApi`, {
        _id: getState().auth.user?._id
    }, {
        headers: {
            "Authorization": `BHRC ${getState().auth.token}`
        }
    }).then(({ data }) => {
        if (data.error) dispatch(_hasError(data));
        else dispatch(_testRequest(data));
    });
}

export const setProcessStage = (stage: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => dispatch({
    type: REGISTER_STAGE,
    payload: stage
});