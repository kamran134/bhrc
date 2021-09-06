import API from '../../api';
import { REGISTER, REGISTER_SUCCESS } from './action-types';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { RootState } from '../reducers/rootReducer';

export const login = (identifier: string, password: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {

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
        username: email,
        password
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(({ data }) => dispatch(_signUp(data)));
}