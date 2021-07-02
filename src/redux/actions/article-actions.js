import API from '../../api';
import { GET_ARTICLES, GET_ARTICLE_BY_NAME, GET_LAST_4_ARTICLES } from './action-types';

export const getArticles = (page, limit) => dispatch => {
    API.get(`articles/${limit}/${(page-1)*limit}`)
        .then(({ data }) => dispatch({
            type: GET_ARTICLES,
            payload: data
        }));
}

export const getLastArticles = () => dispatch => {
    API.get(`articles/4/0`)
        .then(({ data }) => dispatch({
            type: GET_LAST_4_ARTICLES,
            payload: data
        }))
}

export const getArticleByName = humanId => dispatch => {
    API.get(`articleByPath/${humanId}`)
        .then(({ data }) => dispatch({
            type: GET_ARTICLE_BY_NAME,
            payload: data
        }))
}