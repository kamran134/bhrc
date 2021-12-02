export const GET_VISITOR_ID = "GET_VISITOR_ID";
export interface VisitorAction {
    type: typeof GET_VISITOR_ID;
    payload: string;
}

export const SEND_VIEW = "SEND_VIEW";
export interface SendViewAction {
    type: typeof SEND_VIEW;
    payload: number;
}

export type VisitorTypes = VisitorAction | SendViewAction;