import { GET_VISITOR_ID, SEND_VIEW, VisitorTypes } from "../types";

const INITIAL_STATE: {visitorId: string, seen: number} = {
    visitorId: localStorage.getItem('visitorID') || '',
    seen: 0
}

// eslint-disable-next-line import/no-anonymous-default-export
export function visitorsReducer(state = INITIAL_STATE, action: VisitorTypes) {
    switch (action.type) {
        case GET_VISITOR_ID:
            localStorage.setItem("visitorID", action.payload);
            return {...state, visitorId: action.payload};
        case SEND_VIEW:
            return {...state, seen: action.payload}
        default:
            return state;
    }
}