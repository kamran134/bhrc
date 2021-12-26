import { IMultilang } from ".";

export interface IStatement {
    _id: string;
    name: IMultilang;
    path: IMultilang;
    shortDescription: IMultilang;
    description: IMultilang;
    statement: string;
    picture: string;
    createdAt: Date;
    filePath: IMultilang;
}