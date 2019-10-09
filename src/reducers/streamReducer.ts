import Constants from "../actions/constants";
import {omit, mapKeys} from "lodash";

export default (state = {}, action: any) => {
    switch(action.type) {
        case Constants.FETCH_STREAMS:
            return {
                ...state,
                ...mapKeys(action.payload, "id")
            };
        case Constants.FETCH_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case Constants.CREATE_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case Constants.EDIT_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case Constants.DELETE_STREAM:
            return omit(state, action.payload);
        default:
            return state;
    }
};