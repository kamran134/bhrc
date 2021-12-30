import { IOrgDocsState } from "../states/orgDocs.state";
import { GET_ORGDOCS, GET_ORGDOC, OrgDocsTypes } from "../types";

const INITIAL_STATE: IOrgDocsState = {
    orgDocs: [],
    orgDoc: undefined
}

export function orgDocReducer(state = INITIAL_STATE, action: OrgDocsTypes) {
    switch(action.type) {
        case GET_ORGDOCS:
            return {...state, orgDocs: action.payload }
        case GET_ORGDOC:
            return {...state, orgDoc: action.payload}
        default:
            return state;
    }
}