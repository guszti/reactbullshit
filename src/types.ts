export type Song = {
    title: string;
    duration: string;
};

export type StoreState = {
    songs: Song[];
    selectedSong: Song;
};
