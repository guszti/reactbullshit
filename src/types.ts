export type StoreState = {
    auth: Auth;
    streams: StreamList;
};

export type Auth = {
    isSignedIn: boolean | null;
    userId: number | null;
};

export type Stream = {
    title: string;
    description: string;
    id: number;
    userId: number;
};

export type StreamList = {
    [key: string]: Stream;
};