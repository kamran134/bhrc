import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import API from "../../api";
import { RootState } from "../reducers";
import { GetStaticPageAction, GET_STATIC_PAGE } from "../types";

const _getStaticPage: ActionCreator<GetStaticPageAction> = page => ({
    type: GET_STATIC_PAGE,
    payload: page
});

export const getStaticPage = (humanId: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    API.get(`pageByPath/${humanId}`).then(({ data }) => dispatch(_getStaticPage(data)));
}