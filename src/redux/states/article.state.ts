import { IArticle, IAttachment, IPresentation, IReport, IResource, IVideo } from "../../models";

export interface IArticleState {
    articles: IArticle[];
    articleByName?: IArticle;
    count?: number;
    foundArticles: IArticle[];
    //found?: IFound;
}

interface IFound {
    articles: IArticle[];
    attachments: IAttachment[];
    informations: IResource[];
    presentations: IPresentation[];
    reports: IReport[];
    videos: IVideo[];
}