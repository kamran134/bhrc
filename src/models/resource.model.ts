import { IMultilang } from ".";

export interface ICategory {
    _id: string,
    name: IMultilang,
    description: IMultilang,
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
    name: IMultilang,
    attachments?: IAttachment[],
    presentations?: IPresentation[],
    reports?: IReport[],
    videos?: IVideo[],
    informations?: IResource[]
}

export interface IResourceKey {
    [key: string]: string | Date | IMultilang | IAttachment[] | IPresentation[] | IReport[] | IVideo[] | IResource[] | undefined
}

export interface IResource {
    _id: string,
    topic: string,
    createdAt: Date,
    name: IMultilang,
    description: IMultilang,
    shortDescription: IMultilang,
    fileLink: IMultilang,
    path: IMultilang
    picture?: string
}

export interface IAttachment extends IResource {
    attachment: IMultilang
}

export interface IPresentation extends IResource {
    presentation: IMultilang
}

export interface IReport extends IResource {
    report: IMultilang
}

export interface IVideo extends IResource {
    video: IMultilang
}