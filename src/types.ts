export type StoreState = {
    auth: Auth;
    streams: Stream[];
};

export type Auth = {
    isSignedIn: boolean | null;
    userId: number | null;
};

export type Stream = {
    title: string;
    description: string;
    id: number;
};