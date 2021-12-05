import { IMultilang } from ".";

export interface IStaticPage {
    _id: string;
    name: IMultilang;
    path: IMultilang;
    description: IMultilang;
    shortDescription: IMultilang;
    picture?: string;
    createdAt: Date;
}