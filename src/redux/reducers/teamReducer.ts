import { GET_TEAM } from "../actions/action-types";
import { teamAction } from "../actions/home-actions";

const INITIAL_STATE: any = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action: teamAction) {
    const { type, payload } = action;
    switch (type) {
        case GET_TEAM:
            return payload;
        default:
            return state;
    }
}