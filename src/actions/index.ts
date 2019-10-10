import Constants from "./constants";
import stream from "../apis/stream";
import history from "../history";

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

export const createStream: (formValues: any) => void = (formValues: any) => async (dispatch: Function, getState: Function) => {
    const {userId} = getState().auth;
    const response = await stream.post("/streams", {...formValues, userId});

    dispatch({
        type: Constants.CREATE_STREAM,
        payload: response.data
    });

    history.push("/");
};

export const fetchStreams: () => void = () => async (dispatch: Function) => {
    const response = await stream.get("/streams");

    dispatch({
        type: Constants.FETCH_STREAMS,
        payload: response.data
    });
};

export const fetchStream: (streamId: number) => void = (streamId: number) => async (dispatch: Function) => {
    const response = await stream.get(`/streams/${streamId}`);

    dispatch({
        type: Constants.FETCH_STREAM,
        payload: response.data
    });
};

export const editStream: (streamId: number, formValues: any) => void = (streamId: number, formValues: any) => async (dispatch: Function) => {
    const response = await stream.patch(`/streams/${streamId}`, formValues);

    dispatch({
        type: Constants.EDIT_STREAM,
        payload: response.data
    });

    history.push("/");
};

export const deleteStream: (streamId: number) => void = (streamId: number) => async (dispatch: Function) => {
    await stream.delete(`/streams/${streamId}`);

    dispatch({
        type: Constants.DELETE_STREAM,
        payload: streamId
    });

    history.push("/");
};