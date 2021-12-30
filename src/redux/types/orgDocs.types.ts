import { IOrgDoc } from "../../models";

export const GET_ORGDOCS = "GET_ORGDOCS";
export interface GetOrgDocsAction {
    type: typeof GET_ORGDOCS;
    payload: IOrgDoc[];
}

export const GET_ORGDOC = "GET_ORGDOC";
export interface GetOrgDocAction {
    type: typeof GET_ORGDOC;
    payload: IOrgDoc;
}

export type OrgDocsTypes = GetOrgDocsAction | GetOrgDocAction;