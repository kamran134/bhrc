/* eslint-disable import/no-anonymous-default-export */
import { GET_COMPETITION, SEND_PROJECT, UrbanicaType } from "../types";
import { IUrbanicaState } from "../states";

const INITIAL_STATE: IUrbanicaState = {
    competition: undefined,
    competitions: undefined,
    response: undefined
}

export function urbanicaReducer(state = INITIAL_STATE, action: UrbanicaType) {
    const { type } = action;
    switch(type) {
        case GET_COMPETITION:
            return {...state, competition: action.payload}
        case SEND_PROJECT:
            return {...state, response: action.payload}
        default:
            return state;
    }
}