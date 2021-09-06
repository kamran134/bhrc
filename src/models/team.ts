import { IMultilang } from "./multilang";
import { ISocialNetwork } from "./socialNetwork";

export interface ITeamMember {
    _id: string,
    name: IMultilang,
    bio: IMultilang,
    createdAt: Date,
    editedAt: Date,
    picture: string,
    pictureExtension: string,
    pictureLink: string,
    profession: IMultilang,
    socialNetworks: ISocialNetwork[]
}