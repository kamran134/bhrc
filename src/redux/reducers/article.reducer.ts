import { ArticleTypes, COUNT_ARTICLES, GET_ARTICLES, GET_ARTICLE_BY_NAME } from "../types"
import { IArticleState } from "../states";

const INITIAL_STATE: IArticleState = {
    articles: [],
    articleByName: undefined,
    count: undefined
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
        default:
            return state;
    }
}