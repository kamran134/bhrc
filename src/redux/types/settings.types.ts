//SETTINGS
export const SET_LANGUAGE = "SET_LANGUAGE";

export interface LanguageAction {
    type: typeof SET_LANGUAGE;
    payload: string;
}

export const ACTIVE_SEARCH = "ACTIVE_SEARCH";

export interface ActiveSearchAction {
    type: typeof ACTIVE_SEARCH;
    payload: boolean;
}

export const OPEN_MODAL = "OPEN_MODAL";

export interface OpenModalAction {
    type: typeof OPEN_MODAL;
    payload: boolean;
}

export const REDIRECT = "REDIRECT";

export interface RedirectAction {
    type: typeof REDIRECT;
    payload: string;
}

export type SettingsTypes = LanguageAction | ActiveSearchAction | OpenModalAction | RedirectAction;