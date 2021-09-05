import { TCategory, ITopic } from "../../models/resource";

export type TResourceState = {
    categories?: TCategory[],
    topics?: ITopic[]
}