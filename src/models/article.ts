import { TMultilang } from "./multilang";

export type TArticle = {
    _id: string,
    name: TMultilang,
    picture: string,
    createdAt: Date,
    //updatedAt: Date,
    description: TMultilang,
    path: TMultilang,
    pictureExtension: string,
    shortDescription: string
}