import API from '../../api';
import { GET_ARTICLES, GET_LAST_4_ARTICLES } from './action-types';

export const getArticles = (page, limit) => dispatch => {
    API.get(`articles?limit=${limit}&skip=${(page-1)*limit}`)
        .then(({ data }) => dispatch({
            type: GET_ARTICLES,
            payload: data
        }));
}

export const getLastArticles = () => dispatch => {
    API.get(`articles?limit=4`)
        .then(({ data }) => dispatch({
            type: GET_LAST_4_ARTICLES,
            payload: data
        }))
}