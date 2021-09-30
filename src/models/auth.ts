export interface IRegisterForm {
    email: string;
    password: string;
    passwordRepeat: string;
}

export interface ILoginForm {
    identifier: string;
    password: string;
}

export interface IAuthForm {
    identifier: string;
    email: string;
    password: string;
    passwordRepeat: string;
    fullname: string;
    bio: string;
}