/* eslint-disable import/no-anonymous-default-export */
import { GET_COMPETITION } from "../actions/action-types";
import { UrbanicaType } from "../actions/urbanica-actions";
import { IUrbanicaState } from "../states/urbanica-state";

const INITIAL_STATE: IUrbanicaState = {
    competition: undefined,
    competitions: undefined
}

export default function(state = INITIAL_STATE, action: UrbanicaType) {
    const { type, competition } = action;
    switch(type) {
        case GET_COMPETITION:
            return {...state, competition}
        default:
            return state;
    }
}