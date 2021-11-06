import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import API from "../../api";
import { IProject } from "../../models";
import { RootState } from "../reducers";
import { CompetitionAction, GET_COMPETITION, SendProjectAction, SEND_PROJECT } from "../types";
import { setAlert } from ".";


const _getCompetition: ActionCreator<CompetitionAction> = competition => ({
    type: GET_COMPETITION,
    payload: competition
});

export const getCompetition = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`competitions/1/0`).then(({ data }) => dispatch(_getCompetition(data[0])))
}

const _sendProject: ActionCreator<SendProjectAction> = response => ({
    type: SEND_PROJECT,
    payload: response
});

export const sendProject = (project: IProject): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`sendRequest`, project).then(({ data }) => {
        if (!data.error) dispatch(_sendProject(data));
        else {
            dispatch(setAlert(data.message, 'error'));
        }
    });
}