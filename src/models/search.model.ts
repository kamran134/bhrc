import { IArticle, IAttachment, IResource, IPresentation, IReport, IVideo } from ".";

export interface ISearch {
    categoryName: string;
    result: IArticle[] | IAttachment[] | IResource[] | IPresentation[] | IReport[] | IVideo[]
}