import { IMultilang } from ".";

export interface IOrgDoc {
    _id: string;
    name: IMultilang;
    path: IMultilang;
    shortDescription: IMultilang;
    description: IMultilang;
    orgdoc: string;
    picture: string;
    createdAt: Date;
    filePath: IMultilang;
}