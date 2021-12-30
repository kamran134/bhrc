import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IOrgDoc } from "../../models";
import { RootState } from "../reducers";
import { GET_ORGDOC, GET_ORGDOCS, OrgDocsTypes } from "../types";
import API from "../../api";

const _getOrgDocs: ActionCreator<OrgDocsTypes> = (orgDocs: IOrgDoc[]) => ({
    type: GET_ORGDOCS,
    payload: orgDocs
});

export const getOrgDocs = (limit: number, skip: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => (
    API.get(`orgdocs/${limit}/${skip}`, ).then(({ data }) => dispatch(_getOrgDocs(data)))
);

const _getOrgDoc: ActionCreator<OrgDocsTypes> = (orgDoc: IOrgDoc) => ({
    type: GET_ORGDOC,
    payload: orgDoc
});

export const getOrgDoc = (orgDocId: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => (
    API.get(`orgdocById/${orgDocId}`).then(({ data }) => dispatch(_getOrgDoc(data)))
);