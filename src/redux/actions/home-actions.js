import API from "../../api";
import { GET_HOMEPAGE, GET_TEAM } from "./action-types";

export const getHomePage = () => dispatch => {
    API.get(`homepage`)
        .then(({ data }) => dispatch({
            type: GET_HOMEPAGE,
            payload: data
        }));
}

export const getTeam = (limit, skip) => dispatch => {
    API.get(`team/${limit}/${skip}`)
        .then(({ data }) => dispatch({
            type: GET_TEAM,
            payload: data
        }));
}