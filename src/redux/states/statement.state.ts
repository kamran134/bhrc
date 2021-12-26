import { IStatement } from "../../models";

export interface IStatementState {
    statements: IStatement[];
    statement?: IStatement;
}