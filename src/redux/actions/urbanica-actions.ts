import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import API from "../../api";
import { IContest, IProject } from "../../models/urbanica";
import { RootState } from "../reducers/rootReducer";
import { GET_COMPETITION, SEND_PROJECT } from "./action-types";

interface CompetitionAction {
    type: typeof GET_COMPETITION;
    competition: IContest;
}

const _getCompetition: ActionCreator<CompetitionAction> = competition => ({
    type: GET_COMPETITION,
    competition
});

export const getCompetition = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`competitions/1/0`).then(({ data }) => dispatch(_getCompetition(data[0])))
}

interface SendProjectAction {
    type: typeof SEND_PROJECT;
    payload: any
}

const _sendProject: ActionCreator<SendProjectAction> = response => ({
    type: SEND_PROJECT,
    payload: response
});

export const sendProject = (project: IProject): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`sendRequest`, project).then(({ data }) => dispatch(_sendProject(data)));
}

export type UrbanicaType = CompetitionAction & SendProjectAction;