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

export type ArticleTypes = ArticlesAction | LastArticlesAction | ArticleAction;