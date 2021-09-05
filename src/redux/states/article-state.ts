import { TArticle } from "../../models/article";

export type TArticleState = {
    articles: TArticle[],
    articleByName?: TArticle
}