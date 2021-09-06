import API from '../../api';
import { Action, ActionCreator } from 'redux';
import { GET_ARTICLES, GET_ARTICLE_BY_NAME, GET_LAST_4_ARTICLES } from './action-types';
import { IArticle } from '../../models/article';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';

interface articlesAction {
    type: typeof GET_ARTICLES,
    payload: IArticle[]
}

const _getArticles: ActionCreator<articlesAction> = (articles: IArticle[]) => (
    {
        type: GET_ARTICLES,
        payload: articles
    }
);

export const getArticles = (page: number, limit: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`articles/${limit}/${(page-1)*limit}`)
        .then(({ data }) => dispatch(_getArticles(data)));
}

const _getLastArticles: ActionCreator<articlesAction> = (articles: IArticle[]) => (
    {
        type: GET_LAST_4_ARTICLES,
        payload: articles
    }
);

export const getLastArticles = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`articles/4/0`)
        .then(({ data }) => dispatch(_getLastArticles(data)));
}

interface articleAction {
    type: typeof GET_ARTICLE_BY_NAME,
    payload: IArticle
}

const _getArticleByName: ActionCreator<articleAction> = (article: IArticle) => ({
    type: GET_ARTICLE_BY_NAME,
    payload: article
});

export const getArticleByName = (humanId: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`articleByPath/${humanId}`)
        .then(({ data }) => dispatch(_getArticleByName(data)));
}

export type ArticleTypes = articlesAction & articleAction;