import Constants from "./constants";
import stream from "../apis/stream";

export const signIn = (userId: number) => {
    return {
        type: Constants.SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: Constants.SIGN_OUT
    };
};

export const createStream = (formValues: any) => async (dispatch: Function) => {
    const response = await stream.post("/streams", formValues);

    dispatch({
        type: Constants.CREATE_STREAM,
        payload: response.data
    });
};

export const fetchStreams: () => void = () => async (dispatch: Function) => {
    const response = await stream.get("/streams");

    dispatch({
        type: Constants.FETCH_STREAMS,
        payload: response.data
    });
};

export const fetchStream = (streamId: number) => async (dispatch: Function) => {
    const response = await stream.get(`/streams/${streamId}`);

    dispatch({
        type: Constants.FETCH_STREAM,
        payload: response.data
    });
};

export const editStream = (streamId: number, formValues: any) => async (dispatch: Function) => {
    const response = await stream.put(`/streams/${streamId}`, formValues);

    dispatch({
        type: Constants.EDIT_STREAM,
        payload: response.data
    });
};

export const deleteStream = (streamId: number) => async (dispatch: Function) => {
    await stream.delete(`/streams/${streamId}`);

    dispatch({
        type: Constants.DELETE_STREAM,
        payload: streamId
    });
};