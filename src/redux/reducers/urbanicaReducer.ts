/* eslint-disable import/no-anonymous-default-export */
import { GET_COMPETITION, SEND_PROJECT } from "../actions/action-types";
import { UrbanicaType } from "../actions/urbanica-actions";
import { IUrbanicaState } from "../states/urbanica-state";

const INITIAL_STATE: IUrbanicaState = {
    competition: undefined,
    competitions: undefined,
    response: undefined
}

export default function(state = INITIAL_STATE, action: UrbanicaType) {
    const { type, competition, payload } = action;
    switch(type) {
        case GET_COMPETITION:
            return {...state, competition}
        case SEND_PROJECT:
            return {...state, response: payload}
        default:
            return state;
    }
}