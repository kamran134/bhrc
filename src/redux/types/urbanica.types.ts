import { IContest } from "../../models";

//URBANICA
export const GET_COMPETITION = "GET_COMPETITION";

export interface CompetitionAction {
    type: typeof GET_COMPETITION;
    payload: IContest;
}

export const SEND_PROJECT = "SEND_PROJECT";

export interface SendProjectAction {
    type: typeof SEND_PROJECT;
    payload: any
}

export type UrbanicaType = CompetitionAction | SendProjectAction;