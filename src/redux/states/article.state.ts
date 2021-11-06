import { IArticle } from "../../models";

export interface IArticleState {
    articles: IArticle[],
    articleByName?: IArticle
}