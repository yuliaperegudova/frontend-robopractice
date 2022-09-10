export interface User {
    id: string;
    Fullname: string;
    Days: Day[];
}

export interface Day {
    Date: string;
    Start: string;
    End: string;
}
