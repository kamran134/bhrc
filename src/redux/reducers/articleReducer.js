import { GET_ARTICLES, GET_ARTICLE_BY_NAME } from "../actions/action-types"

const initialState = {
    articles: [],
    articleByName: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return {...state, articles: action.payload }
        case GET_ARTICLE_BY_NAME:
            return {...state, articleByName: action.payload }
        default:
            return state;
    }
}