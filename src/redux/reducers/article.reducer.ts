import { ArticleTypes, COUNT_ARTICLES, GET_ARTICLES, GET_ARTICLE_BY_NAME, GET_POPULAR, SEARCH_ARTICLES } from "../types"
import { IArticleState } from "../states";

const INITIAL_STATE: IArticleState = {
    articles: [],
    articleByName: undefined,
    foundArticles: [],
    count: undefined,
    popularArticles: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export function newsReducer(state = INITIAL_STATE, action: ArticleTypes) {
    switch (action.type) {
        case GET_ARTICLES:
            return {...state, articles: action.payload }
        case GET_ARTICLE_BY_NAME:
            return {...state, articleByName: action.payload }
        case COUNT_ARTICLES:
            return {...state, count: action.payload }
        case SEARCH_ARTICLES:
            return {...state, foundArticles: action.payload }
        case GET_POPULAR:
            return {...state, popularArticles: action.payload }
        default:
            return state;
    }
}