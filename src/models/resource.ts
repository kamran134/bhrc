import { TMultilang } from "./multilang";

export type TCategory = {
    _id: string,
    name: TMultilang,
    description: TMultilang,
    picture: string,
    pictureLink: string,
    createdAt: Date,
    editedAt: Date
}

export interface ITopic extends IResourceKey {
    _id: string,
    category: string,
    createdAt: Date,
    editedAt: Date,
    name: TMultilang,
    attachments?: IAttachment[],
    presentations?: IPresentation[],
    reports?: IReport[],
    videos?: IVideo[],
    informations?: IResource[]
}

export interface IResourceKey {
    [key: string]: string | Date | TMultilang | IAttachment[] | IPresentation[] | IReport[] | IVideo[] | IResource[] | undefined
}

export interface IResource {
    _id: string,
    topic: string,
    createdAt: Date,
    name: TMultilang,
    description: TMultilang,
    shortDescription: TMultilang,
    fileLink: TMultilang,
    path: TMultilang
    picture?: string
}

export interface IAttachment extends IResource {
    attachment: TMultilang
}

export interface IPresentation extends IResource {
    presentation: TMultilang
}

export interface IReport extends IResource {
    report: TMultilang
}

export interface IVideo extends IResource {
    video: TMultilang
}