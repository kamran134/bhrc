import API from '../../api';
import { REGISTER, REGISTER_SUCCESS } from './action-types';

export const login = (identifier, password) => dispatch => {

}

export const signUp = (email, password) => dispatch => {
    API.post(`signup`, {
        username: email,
        password
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(({ data }) => dispatch({
        type: REGISTER_SUCCESS,
        payload: data
    }));
}