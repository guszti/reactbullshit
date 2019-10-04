import {Song} from "../types";

export const selectSong = (song: Song) => {
    return {
        type: "SELECT_SONG",
        payload: song
    }
};
