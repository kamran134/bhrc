import { IMultilang } from "./multilang";

export interface IUser {
    _id: string;
    login: string;
    password: string;
    email: string;
    profile: IProfile;
}

export interface IProfile {
    _id: string;
    userId: string;
    fullName: IMultilang;
    bio: IMultilang;
    role?: UserRole;
    rating?: number;
    language: string;
    darkMode: boolean;
}

export enum UserRole {
    SUPERADMIN = 0,
    ADMIN = 1,
    EDITOR = 2,
    PARTICIPANT = 3
}