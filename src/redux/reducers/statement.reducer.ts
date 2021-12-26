import { IStatementState } from "../states/statement.state";
import { GET_STATEMENTS, GET_STATEMENT, StatementTypes } from "../types";

const INITIAL_STATE: IStatementState = {
    statements: [],
    statement: undefined
}

export function statementReducer(state = INITIAL_STATE, action: StatementTypes) {
    switch(action.type) {
        case GET_STATEMENTS:
            return {...state, statements: action.payload }
        case GET_STATEMENT:
            return {...state, statement: action.payload}
        default:
            return state;
    }
}