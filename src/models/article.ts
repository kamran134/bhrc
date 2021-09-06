import { IMultilang } from "./multilang";

export interface IArticle {
    _id: string,
    name: IMultilang,
    picture: string,
    createdAt: Date,
    //updatedAt: Date,
    description: IMultilang,
    path: IMultilang,
    pictureExtension: string,
    shortDescription: string
}