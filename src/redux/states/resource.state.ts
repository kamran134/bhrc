import { ICategory, ITopic } from "../../models";

export interface IResourceState {
    categories?: ICategory[];
    topics?: ITopic[];
}