import {IHomePage, ITeamMember} from "../../models";
import { ISearch } from "../../models/search.model";

export interface IHome extends IHomePage {
    teamMembers: ITeamMember[];
    searchResults?: ISearch[];
}