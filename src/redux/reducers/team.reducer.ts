import { GET_TEAM, TeamAction } from "../types";

const INITIAL_STATE: any = [];

// eslint-disable-next-line import/no-anonymous-default-export
export function teamReducer(state = INITIAL_STATE, action: TeamAction) {
    const { type } = action;
    switch (type) {
        case GET_TEAM:
            return action.payload;
        default:
            return state;
    }
}