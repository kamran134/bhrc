import API from '../../api';
import { Action, ActionCreator } from 'redux';
import { ArticleAction, ArticlesAction, ArticleTypes, COUNT_ARTICLES, GET_ARTICLES, GET_ARTICLE_BY_NAME, GET_LAST_4_ARTICLES, LastArticlesAction, SEARCH_ARTICLES } from '../types';
import { IArticle } from '../../models';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';

const _getArticles: ActionCreator<ArticleTypes> = (articles: IArticle[]) => (
    {
        type: GET_ARTICLES,
        payload: articles
    }
);

export const getArticles = (page: number, limit: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`articles/${limit}/${(page-1)*limit}`)
        .then(({ data }) => dispatch(_getArticles(data)));
}

const _getLastArticles: ActionCreator<ArticleTypes> = (articles: IArticle[]) => (
    {
        type: GET_LAST_4_ARTICLES,
        payload: articles
    }
);

export const getLastArticles = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`articles/4/0`)
        .then(({ data }) => dispatch(_getLastArticles(data)));
}

const _getArticleByName: ActionCreator<ArticleTypes> = (article: IArticle) => ({
    type: GET_ARTICLE_BY_NAME,
    payload: article
});

export const getArticleByName = (humanId: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`articleByPath/${humanId}`)
        .then(({ data }) => dispatch(_getArticleByName(data)));
}

const _countArticles: ActionCreator<ArticleTypes> = (count: number) => ({
    type: COUNT_ARTICLES,
    payload: count
});

export const countArticles = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`getArticlesCount`).then(({ data }) => dispatch(_countArticles(data)));
}

const _searchArticles: ActionCreator<ArticleTypes> = (articles: IArticle[]) => ({
    type: SEARCH_ARTICLES,
    payload: articles
});

export const searchArticles = (searchString: string, empty?: boolean): ThunkAction<void, RootState, unknown, Action<string>> =>
dispatch => {
    !empty ? API.get(`search/${searchString}`).then(({ data }) => dispatch(_searchArticles(data.articles))) :
    dispatch(_searchArticles([]));
}