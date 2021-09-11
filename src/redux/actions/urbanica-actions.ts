import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import API from "../../api";
import { IContest } from "../../models/urbanica";
import { RootState } from "../reducers/rootReducer";
import { GET_COMPETITION } from "./action-types";

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

export type UrbanicaType = CompetitionAction;