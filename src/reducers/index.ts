import {Song} from "../types";
import {combineReducers} from "redux";

const songsReducer = (): Song[] => {
  return [
      {
          title: "No Scrubs",
          duration: "4:05"
      },
      {
          title: "Macarena",
          duration: "2:30"
      },
      {
          title: "ALl Star",
          duration: "3:15"
      },
      {
          title: "Asd",
          duration: "21:8"
      }
  ];
};

const selectedSongReducer = (selectedSong=null, action: any) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});