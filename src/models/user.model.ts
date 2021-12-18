import { IMultilang } from ".";

export interface IUser {
    _id?: string;
    login: string;
    password: string;
    userInfo: IUserInfo;
}

export interface IUserInfo {
    _id?: string;
    profile: IProfile;
    emails?: IEmail[];
    online?: boolean;
    createdAt?: Date;
}

export interface IProfile {
    role?: UserRole;
    _id?: string;
    darkMode?: boolean;
    language?: string;
    ratinrg?: number;
    fullName: IMultilang;
    bio: IMultilang;
    picture?: string;
}

interface IEmail {
    address: string;
    verified: boolean;
}

export enum UserRole {
    SUPERADMIN = "superadmin",
    ADMIN = "admin",
    EDITOR = "editor",
    PARTICIPANT = "user"
}