import { GET_ARTICLES, GET_ARTICLE_BY_NAME } from "../actions/action-types"
import { ArticleTypes } from "../actions/article-actions";
import { IArticleState } from "../states/article-state";

const INITIAL_STATE: IArticleState = {
    articles: [],
    articleByName: undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action: ArticleTypes) {
    switch (action.type) {
        case GET_ARTICLES:
            return {...state, articles: action.payload }
        case GET_ARTICLE_BY_NAME:
            return {...state, articleByName: action.payload }
        default:
            return state;
    }
}