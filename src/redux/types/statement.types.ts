import { IStatement } from "../../models";

export const GET_STATEMENTS = "GET_STATEMENTS";
export interface GetStatementsAction {
    type: typeof GET_STATEMENTS;
    payload: IStatement[];
}

export const GET_STATEMENT = "GET_STATEMENT";
export interface GetStatementAction {
    type: typeof GET_STATEMENT;
    payload: IStatement;
}

export type StatementTypes = GetStatementAction | GetStatementsAction;