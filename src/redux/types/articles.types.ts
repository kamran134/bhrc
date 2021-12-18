import { IArticle } from "../../models";

//ARTICLES
export const GET_ARTICLES = "GET_ARTICLES";
export interface ArticlesAction {
    type: typeof GET_ARTICLES;
    payload: IArticle[];
}

export const GET_LAST_4_ARTICLES = "GET_LAST_4_ARTICLES";
export interface LastArticlesAction {
    type: typeof GET_LAST_4_ARTICLES;
    payload: IArticle[];
}

export const GET_ARTICLE_BY_NAME = "GET_ARTICLE_BY_NAME";
export interface ArticleAction {
    type: typeof GET_ARTICLE_BY_NAME;
    payload: IArticle;
}

export const COUNT_ARTICLES = "COUNT_ARTICLES";
export interface CountArticlesAction {
    type: typeof COUNT_ARTICLES;
    payload: number;
}

export const SEARCH_ARTICLES = "SEARCH_ARTICLES";
export interface SearchArticlesAction {
    type: typeof SEARCH_ARTICLES;
    payload: IArticle[];
}

export const GET_POPULAR = "GET_POPULAR";
export interface GetPopularAction {
    type: typeof GET_POPULAR;
    payload: IArticle[];
}

export type ArticleTypes = ArticlesAction | LastArticlesAction | ArticleAction | CountArticlesAction | SearchArticlesAction | GetPopularAction;