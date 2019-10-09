import {Auth} from "../types";
import Constants from "../actions/constants";

const initialState: Auth = {
    isSignedIn: null,
    userId: null
};

export default (state=initialState, action: any) => {
    switch (action.type) {
        case Constants.SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            };
        case Constants.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                userId: null
            };
        default:
            return state;
    }
};