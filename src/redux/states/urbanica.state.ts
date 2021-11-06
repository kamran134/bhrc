import { IContest } from "../../models";

export interface IUrbanicaState {
    competition?: IContest;
    competitions?: IContest[];
    response?: any;
}