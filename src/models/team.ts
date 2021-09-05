import { TMultilang } from "./multilang";
import { TSocialNetwork } from "./socialNetwork";

export type TTeamMember = {
    _id: string,
    name: TMultilang,
    bio: TMultilang,
    createdAt: Date,
    editedAt: Date,
    picture: string,
    pictureExtension: string,
    pictureLink: string,
    profession: TMultilang,
    socialNetworks: TSocialNetwork[]
}