import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import API from "../../api";
import { RootState } from "../reducers";
import { GET_VISITOR_ID, SEND_VIEW, VisitorAction } from "../types";

const _getVisitorId: ActionCreator<VisitorAction> = (visitorId: string) => ({
    type: GET_VISITOR_ID,
    payload: visitorId
});

export const getVisitorId = (): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`getId`).then(({ data }) => dispatch(_getVisitorId(data)));
}

export const sendView = (
    visitorId: string,
    newsId: string
): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.post(`seen/${newsId}/${visitorId}`).then(({ data }) => dispatch(({
        type: SEND_VIEW,
        payload: data
    })));
}