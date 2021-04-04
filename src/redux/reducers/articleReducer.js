import { GET_ARTICLES } from "../actions/action-types"

const initialState = {
    articles: [],
    articleByName: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return {...state, articles: action.payload }
        default:
            return state;
    }
}