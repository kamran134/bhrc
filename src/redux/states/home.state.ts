import {IHomePage, ITeamMember} from "../../models";
import { ISearch } from "../../models/search.model";
import { IStaticPage } from "../../models/staticPages.model";

export interface IHome extends IHomePage {
    teamMembers: ITeamMember[];
    searchResults?: ISearch[];
    staticPages: IStaticPage[];
}