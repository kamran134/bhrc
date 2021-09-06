import { ICategory, ITopic } from "../../models/resource";

export interface IResourceState {
    categories?: ICategory[],
    topics?: ITopic[]
}