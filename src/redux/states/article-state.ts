import { IArticle } from "../../models/article";

export interface IArticleState {
    articles: IArticle[],
    articleByName?: IArticle
}