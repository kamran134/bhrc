import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IStatement } from "../../models";
import { RootState } from "../reducers";
import { GET_STATEMENT, GET_STATEMENTS, StatementTypes } from "../types";
import API from "../../api";

const _getStatements: ActionCreator<StatementTypes> = (statements: IStatement[]) => ({
    type: GET_STATEMENTS,
    payload: statements
});

export const getStatements = (limit: number, skip: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => (
    API.get(`statements/${limit}/${skip}`, ).then(({ data }) => dispatch(_getStatements(data)))
);

const _getStatement: ActionCreator<StatementTypes> = (statement: IStatement) => ({
    type: GET_STATEMENT,
    payload: statement
});

export const getStatement = (statementId: string): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => (
    API.get(`statementById/${statementId}`).then(({ data }) => dispatch(_getStatement(data)))
);