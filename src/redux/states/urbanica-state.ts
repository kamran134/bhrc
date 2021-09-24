import { IContest } from "../../models/urbanica";

export interface IUrbanicaState {
    competition?: IContest;
    competitions?: IContest[];
    response?: any;
}