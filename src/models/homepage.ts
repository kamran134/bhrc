import { TMultilang } from "./multilang"

export type THomePage = {
    _id?: string,
    editedAt?: Date,
    about?: THomePageBlock,
    activity?: THomePageBlock,
    resources?: THomePageBlock,
    signin?: THomePageBlock,
    team?: THomePageBlock,
    welcome?: THomePageBlock
}

export type THomePageBlock = {
    title: TMultilang,
    subtitle?: TMultilang,
    text?: TMultilang
}