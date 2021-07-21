import API from "../../api";
import { GET_HOMEPAGE } from "./action-types";

export const getHomePage = () => dispatch => {
    API.get(`homepage`)
        .then(({ data }) => dispatch({
            type: GET_HOMEPAGE,
            payload: data
        }));
}