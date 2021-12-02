import { IMultilang } from ".";

export interface IArticle {
    _id: string;
    name: IMultilang;
    picture: string;
    createdAt: Date;
    description: IMultilang;
    path: IMultilang;
    pictureExtension: string;
    shortDescription: string;
    views?: number;
    visitors?: string[];
}