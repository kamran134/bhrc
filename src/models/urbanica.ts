import { IMultilang } from "./multilang";

export interface IUrbanicaPageContent {
    mainTitle: IMultilang;
    mainSlogan: IMultilang;
    leftBlock1: IUrbanicaBlock;
    rightBlock: IUrbanicaBlock;
    leftBlock2: IUrbanicaBlock;
}

interface IUrbanicaBlock {
    title: IMultilang;
    text: IMultilang;
}

export interface IContest {
    _id: string;
    name: IMultilang;
    shortDescription: IMultilang;
    description: IMultilang;
    path: IMultilang;
    createdAt: Date;
    startDate: Date;
    endDate: Date;
    picture: string;
}

export interface IProject {
    _id?: string;
    contestId?: string;
    userId?: string;
    general?: IProjectGeneralInfo;
    details?: IProjectDetails;
    budget?: IProjectBudjet;
}

interface IProjectGeneralInfo {
    projectName?: string;
    neccessary?: string;
    howSolve?: string;
    groups?: string;
}

interface IProjectDetails {
    goal?: string;
    suggestions?: string;
    expectedResult?: string;
}

interface IProjectBudjet {
    period: IPeriod;
    participants: IBudget[];
    activities: IBudget[];
    devices: IBudget[];
    others: IBudget[];
}

interface IBudget {
    name: string;
    period: IPeriod;
    price: number;
}

interface IPeriod {
    quantity: number;
    unit: "day" | "week" | "month" | "year"
}