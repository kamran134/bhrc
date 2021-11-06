import { IMultilang } from "."

export interface IHomePage {
    _id?: string,
    editedAt?: Date,
    about?: IHomePageBlock,
    activity?: IHomePageBlock,
    resources?: IHomePageBlock,
    signin?: IHomePageBlock,
    team?: IHomePageBlock,
    welcome?: IHomePageBlock
}

export interface IHomePageBlock {
    title: IMultilang,
    subtitle?: IMultilang,
    text?: IMultilang
}