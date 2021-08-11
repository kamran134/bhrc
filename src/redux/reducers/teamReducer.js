import { GET_TEAM } from "../actions/action-types";

const INITIAL_STATE = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_TEAM:
            return payload;
        default:
            return state;
    }
}